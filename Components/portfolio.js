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

const Portfolio = () => {
  return (
    <div className='snap-start bg-slate-100'>
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
        <div className="h-20 col-span-6"></div>
      </div>
    </div>
  )
}

export default Portfolio;