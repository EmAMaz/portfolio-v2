import { useTranslation } from "react-i18next";
import CardProject from "../cardProject";
import HeaderComponent from "../header";

export default function ProjectPage() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="flex flex-col items-center bg-white">
        <h1 className="mb-10 self-center mt-10 bg-clip-text text-gradient-vercel gradient-text">
          {t("text-projects-title")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-12 border mb-10 p-12 rounded-md shadow-lg">
          <CardProject
            nameProject="ValoApi"
            urlGithub="https://github.com/EmAMaz/valorant-api"
            urlLive="https://darling-sunshine-df7b34.netlify.app/"
            technology="Angular, Node.js, Taildwind, API Rest"
          ></CardProject>
          <CardProject
            nameProject="Juego del ahorcado"
            urlGithub="https://github.com/EmAMaz/juegodelahorcado"
            urlLive="https://emamaz.github.io/juegodelahorcado/"
            technology="HTML, CSS, JS, Canva"
          ></CardProject>
          <CardProject
            nameProject="Encriptador de texto"
            urlGithub="https://github.com/EmAMaz/encriptador"
            urlLive="https://emamaz.github.io/encriptador/"
            technology="HTML, CSS, JS, Canva"
          ></CardProject>
          <CardProject
            nameProject="Carta Online"
            urlGithub=""
            urlLive="https://shiny-youtiao-a54e42.netlify.app/"
            technology="React, Redux, Tailwind"
          ></CardProject>
          <CardProject
            nameProject="Web de Paises"
            urlGithub="https://github.com/EmAMaz/encriptador"
            urlLive="https://stellar-tanuki-401827.netlify.app/"
            technology="React, Redux, Tailwind, API Rest"
          ></CardProject>
          <CardProject
            nameProject="Generator de consejos"
            urlGithub="https://github.com/EmAMaz/advice-generator-app"
            urlLive="https://advice-gntor.netlify.app/"
            technology="React, Typescript, Tailwind , Vite, API Rest"
          ></CardProject>
        </div>
      </div>
    </>
  );
}
