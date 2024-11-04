import { useTranslation } from "react-i18next";

export default function SkillPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="font-geist-ultra">
        <div className="flex min-h-screen flex-col items-center bg-white dark:bg-black pb-16">
          <h1 className="mb-4 self-center mt-10 bg-clip-text dark:text-gradient-vercel dark:gradient-text text-gradient-vercel gradient-text">
            {t("text-skills-title")}
          </h1>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://reactjs.org/"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                  <img src="/typescript.svg" alt="" />
                </div>
                <p className="font-bold">Typescript</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://reactjs.org/"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                  <img src="/reactlogo.svg" alt="" />
                </div>
                <p className="font-bold">React</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://reactjs.org/"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                  <img src="/angular.svg" alt="" />
                </div>
                <p className="font-bold">Angular</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://nodejs.org/en/"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                  <img src="/node.svg" alt="" />
                </div>
                <p className="font-bold">Node.js</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://expressjs.com/"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                  <img src="/express.svg" alt="" />
                </div>
                <p className="font-bold">Express</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.mysql.com/"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                  <img src="/mysql.svg" alt="" />
                </div>
                <p className="font-bold">Mysql</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.mongodb.com/"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                  <img src="/mongodb.svg" alt="" />
                </div>
                <p className="font-bold">MongoDB</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://nginx.com"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                  <img src="/nginx.svg" alt="" />
                </div>
                <p className="font-bold">Nginx</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://https://firebase.google.com/"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                  <img src="/firebase.svg" alt="" />
                </div>
                <p className="font-bold">Firebase</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://git-scm.com/"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                  <img src="/git.svg" alt="" />
                </div>
                <p className="font-bold">Git</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/"
            >
              <div className="foundation_card__v7VKB dark:bg-[#111] transition ease-in-out  delay-150 hover:-translate-y-3 hover:scale-103 hover:bg-white/40 duration-300 flex items-center justify-center space-x-4 dark:hover:scale-100">
                <div>
                 <img src="/github.svg" alt="" />
                </div>
                <p className="font-bold">GitHub</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
