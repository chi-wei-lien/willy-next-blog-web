import Link from "next/link";
import Image from "next/image";

const ComputerFile = (props) => {
  return (
    <Link className="text-center" href={props.url}>
      <a>
        <div className="m-auto w-14 min-h-20">
          <Image
            src={props.img}
            alt="file icon"
            width="100%" height="100%"
            layout="responsive"
            objectFit="contain"
            className=""
          ></Image>
        </div>
        <p className="w-20 text-sm text-center text-white break-all">{props.name}</p>
      </a>
    </Link>
  )
}

export default ComputerFile;