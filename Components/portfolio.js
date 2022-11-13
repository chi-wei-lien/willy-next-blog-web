import Image from "next/image";
import ProjectCard from "./project-card";

class PortfolioCardData {
  constructor (img, title, descr, content) {
    this.img = img;
    this.title = title;
    this.descr = descr;
    this.content = content;
  }
}

const surveyPaper = new PortfolioCardData(
  "/images/portfolio/paper.png",
  "Biometric Survey Paper",
  <p>Chi-Wei Lien and Sudip Vhaduri, "Challenges and Opportunities of Biometric User Authentication in the Age of IoT: A Survey," <span className="underline decoration-2 decoration-pink-500">ACM Computing Surveys, 2022</span> (Under Review)</p>,
  <ul class="list-disc">
    <li>Wrote a 35 pages survey paper to evaluate the limitations and applications of new opportunistic biometrics and their combinations with existing biometrics</li>
  </ul>
)

const youtube = new PortfolioCardData(
  "/images/portfolio/youtube.png",
  "Educational Youtube Creator",
  <p>Created a YouTube Channel to teach coding and cybersecurity</p>,
  <ul class="list-disc">
    <li>
      <span className="underline decoration-2 decoration-pink-500">27 videos</span> are currently available; accumulated over 14,000 views
    </li>
    <li>
      Content covered: Malware design, ARP Spoofing, SQL Injection, XSS, HTML, CSS, JS, Bootstrap, SSH
    </li>
    <li>
      My YouTube Channel: <a href="https://www.youtube.com/@loopholewilson" className="underline decoration-sky-500 decoration-2">@loopholewilson</a>
    </li>
  </ul>
)

const heartAuth = new PortfolioCardData(
  "/images/portfolio/watch.png",
  "Heart Biometric User Authenticating System",
  <p>Collaborating with Prof. Vhaduri to develop a <span className="underline decoration-pink-500 decoration-2">heart biometric model</span> for user authentication</p>,
  <ul class="list-disc">
    <li>
      Designing a machine learning model that identifies valid users' heart rate data collected with Fitbit
    </li>
    <li>
      Skills: Python, Pandas (library), <span className="underline decoration-sky-500 decoration-2">Scikit-learn (library)</span>, Jupyter Notebook
    </li>
  </ul>
)

const Portfolio = () => {
  return (
    <div className='snap-start bg-slate-100' id="portfolio">
      <div className='w-screen min-h-screen'>
        <h1 className='py-10 text-5xl text-center underline decoration-indigo-500'>Portfolio</h1>
        <p className="text-center text-slate-700">
          If you are a recruiter, please download the <br /> formal resume from here:{" "}
          <a
            href="/files/2022-11-9 Chi-Wei Lien.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 decoration-pink-500"
          >resume.pdf</a>
        </p>
        <ProjectCard data={surveyPaper}/>
        <ProjectCard data={youtube}/>
        <ProjectCard data={heartAuth}/>
        <div className="h-20 col-span-6"></div>
      </div>
    </div>
  )
}

export default Portfolio;