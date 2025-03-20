import { useTranslation } from "react-i18next";
import CardSkills from "../cardSkills";

export default function SkillPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="font-geist-ultra">
        <div className="flex flex-col items-center bg-white justify-center h-screen py-8">
          <h1 className="bg-clip-text text-gradient-vercel gradient-text">
            {t("text-skills-title")}
          </h1>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 overflow-y-auto max-h-screen py-8">
            <CardSkills imgUrl="/typescript.svg" titulo="Typescript" urlRef="https://www.typescriptlang.org/"/>
            <CardSkills imgUrl="/reactlogo.svg" titulo="React" urlRef="https://reactjs.org/"/>
            <CardSkills imgUrl="/angular.svg" titulo="Angular" urlRef="https://angular.dev/"/>
            <CardSkills imgUrl="/nextjs.svg" titulo="Next.js" urlRef="https://nextjs.org/"/>
            <CardSkills imgUrl="/node.svg" titulo="Node.js" urlRef="https://nodejs.org/en/"/>
            <CardSkills imgUrl="/express.svg" titulo="Express" urlRef="https://expressjs.com/"/>
            <CardSkills imgUrl="/mysql.svg" titulo="Mysql" urlRef="https://www.mysql.com/"/>
            <CardSkills imgUrl="/mongodb.svg" titulo="MongoDB" urlRef="https://www.mongodb.com/"/>
            <CardSkills imgUrl="/firebase.svg" titulo="Firebase" urlRef="https://firebase.google.com/"/>
            <CardSkills imgUrl="/git.svg" titulo="Git" urlRef="https://git-scm.com/"/>
            <CardSkills imgUrl="/github.svg" titulo="Github" urlRef="https://github.com/"/>
            <CardSkills imgUrl="/nginx.svg" titulo="Nginx" urlRef="https://nginx.com/"/>
            <CardSkills imgUrl="/redux.svg" titulo="Redux" urlRef="https://nginx.com/"/>
          </div>
        </div>
      </div>
    </>
  );
}
