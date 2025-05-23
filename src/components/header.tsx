import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  sectionIndex?: (indice: number) => void | undefined;
  projectSection?: boolean;
}

export default function HeaderComponent({
  sectionIndex,
  projectSection,
}: Props) {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <header className="bg-white font-geist-ultra">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-6 sm:px-6 lg:px-8">
        <span
          onClick={() => {
            !projectSection && sectionIndex && sectionIndex(0);
          }}
          className="cursor-pointer"
        >
          <Link to="/"><img src="/logoH.svg" className="h-10 w-10" alt="" /></Link>
        </span>

          <div className="flex flex-1 items-center justify-end">
            {projectSection && (
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm z-[9999]">
                <li
                  className="cursor-pointer hover:text-zinc-500"
                  onClick={() => !projectSection && sectionIndex && sectionIndex(1)}
                >
                  {t("text-experience")}
                </li>
                <li
                  className="cursor-pointer hover:text-zinc-500"
                  onClick={() => !projectSection && sectionIndex && sectionIndex(2)}
                >
                  {t("text-skills")}
                </li>
                <li
                  className="cursor-pointer hover:text-zinc-500"
                  onClick={() => !projectSection && sectionIndex && sectionIndex(3)}
                >
                  {t("text-aboutme")}
                </li>
              </ul>
            </nav>
            )}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  to="/projects"
                  className="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-85"
                >
                  {t("text-projects-title")}
                </Link>
              </div>
              <button
                onClick={handleChangeLanguage}
                className="border-[1.5px] border-black p-1"
              >
                <span
                  className={`p-1 text-sm ${
                    currentLanguage === "en" ? "bg-black text-white" : ""
                  }`}
                >
                  EN
                </span>
                <span
                  className={`p-1 text-sm ${
                    currentLanguage === "es" ? "bg-black text-white" : ""
                  }`}
                >
                  ES
                </span>
              </button>
            </div>
          </div>
        
      </div>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-zinc-300"></span>
        <span className="h-px flex-2 bg-zinc-300"></span>
      </span>
    </header>
  );
}
