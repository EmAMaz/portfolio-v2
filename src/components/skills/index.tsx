import { useTranslation } from "react-i18next";
import CardSkills from "../cardSkills";

export default function SkillPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="font-geist-ultra">
        <div className="flex flex-col text-center items-center bg-white justify-center h-screen pt-16 pb-8">
          <h2 className="bg-clip-text text-custom-title mb-4 xl:mb-0">
            {t("text-skills-title")}
          </h2>
          <div className="grid justify-items-center gap-4 grid-cols-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 overflow-y-auto max-h-screen py-8">
            <CardSkills imgUrl="iconsTech/typescript.svg" titulo="Typescript" urlRef="https://www.typescriptlang.org/"/>
            <CardSkills imgUrl="iconsTech/reactlogo.svg" titulo="React" urlRef="https://reactjs.org/"/>
            <CardSkills imgUrl="iconsTech/angular.svg" titulo="Angular" urlRef="https://angular.dev/"/>
            <CardSkills imgUrl="iconsTech/nextjs.svg" titulo="Next.js" urlRef="https://nextjs.org/"/>
            <CardSkills imgUrl="iconsTech/node.svg" titulo="Node.js" urlRef="https://nodejs.org/en/"/>
            <CardSkills imgUrl="iconsTech/express.svg" titulo="Express" urlRef="https://expressjs.com/"/>
            <CardSkills imgUrl="iconsTech/mysql.svg" titulo="Mysql" urlRef="https://www.mysql.com/"/>
            <CardSkills imgUrl="iconsTech/mongodb.svg" titulo="MongoDB" urlRef="https://www.mongodb.com/"/>
            <CardSkills imgUrl="iconsTech/firebase.svg" titulo="Firebase" urlRef="https://firebase.google.com/"/>
            <CardSkills imgUrl="iconsTech/git.svg" titulo="Git" urlRef="https://git-scm.com/"/>
            <CardSkills imgUrl="iconsTech/github.svg" titulo="Github" urlRef="https://github.com/"/>
            <CardSkills imgUrl="iconsTech/nginx.svg" titulo="Nginx" urlRef="https://nginx.com/"/>
            <CardSkills imgUrl="iconsTech/redux.svg" titulo="Redux" urlRef="https://nginx.com/"/>
          </div>
        </div>
      </div>
    </>
  );
}
