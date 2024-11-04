import { useTranslation } from "react-i18next";
import CardSkills from "../cardSkills";

export default function SkillPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="font-geist-ultra">
        <div className="flex min-h-screen flex-col items-center bg-white">
          <h1 className="mb-4 self-center mt-10 bg-clip-text text-gradient-vercel gradient-text">
            {t("text-skills-title")}
          </h1>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            <CardSkills imgUrl="/typescript.svg" titulo="Typescript" urlRef="https://www.typescriptlang.org/"></CardSkills>
            <CardSkills imgUrl="/reactlogo.svg" titulo="React" urlRef="https://reactjs.org/"></CardSkills>
            <CardSkills imgUrl="/angular.svg" titulo="Angular" urlRef="https://angular.dev/"></CardSkills>
            <CardSkills imgUrl="/nextjs.svg" titulo="Next.js" urlRef="https://nextjs.org/"></CardSkills>
            <CardSkills imgUrl="/node.svg" titulo="Node.js" urlRef="https://nodejs.org/en/"></CardSkills>
            <CardSkills imgUrl="/express.svg" titulo="Express" urlRef="https://expressjs.com/"></CardSkills>
            <CardSkills imgUrl="/mysql.svg" titulo="Mysql" urlRef="https://www.mysql.com/"></CardSkills>
            <CardSkills imgUrl="/mongodb.svg" titulo="MongoDB" urlRef="https://www.mongodb.com/"></CardSkills>
            <CardSkills imgUrl="/firebase.svg" titulo="Firebase" urlRef="https://firebase.google.com/"></CardSkills>
            <CardSkills imgUrl="/git.svg" titulo="Git" urlRef="https://git-scm.com/"></CardSkills>
            <CardSkills imgUrl="/github.svg" titulo="Github" urlRef="https://github.com/"></CardSkills>
            <CardSkills imgUrl="/nginx.svg" titulo="Nginx" urlRef="https://nginx.com/"></CardSkills>
          </div>
        </div>
      </div>
    </>
  );
}
