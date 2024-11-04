import { useTranslation } from "react-i18next";
import CardProject from "../cardProject";
import HeaderComponent from "../header";

export default function ProjectPage() {
  const { t } = useTranslation();
  return (
    <>
    <HeaderComponent></HeaderComponent>
    
    <div className="flex flex-col items-center bg-white dark:bg-black pb-16">
      <h1 className="mb-4 self-center mt-10 bg-clip-text dark:text-gradient-vercel dark:gradient-text text-gradient-vercel gradient-text">
        {t("text-projects-title")}
      </h1>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-4">
          <CardProject
            projectId="1"
            urlGithub="https://github.com/EmAMaz/valorant-api"
            urlLive="https://emamaz.github.io/valorant-api/"
            urlImg="/projects/valoapipage.png"
          ></CardProject>
          <CardProject
            projectId="2"
            urlGithub="https://github.com/EmAMaz/juegodelahorcado"
            urlLive="https://emamaz.github.io/juegodelahorcado/"
            urlImg="/projects/ahorcadopage.png"
          ></CardProject>
        </div>
        <CardProject
          projectId="3"
          urlGithub="https://github.com/EmAMaz/encriptador"
          urlLive="https://emamaz.github.io/encriptador/"
          urlImg="/projects/encriptadorpage.png"
        ></CardProject>
      </div>
    </div>
    </>
  );
}
