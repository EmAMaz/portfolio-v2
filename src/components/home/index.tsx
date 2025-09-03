import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { EnlacesI } from "../../interface/interface";
import { enlaces } from "../../utils/datos";

export default function HomePage() {
  const [listEnlaces, setListEnlaces] = useState<EnlacesI[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
      setListEnlaces(enlaces)
  },[]);

  return (
    <div className="mx-auto text-center relative">
      <h1 className="bg-clip-text text-gradient-vercel gradient-text select-none">
        {t("text-main-title")}
        <span className="sm:block leading-none sm:leading-tight  ">
          {" "}
          Santiago Maza.{" "}
        </span>
      </h1>
      <p className="mx-auto hidden sm:block mt-4 font-medium max-w-xl text-lg/relaxed xl:text-xl/relaxed text-black/65 select-none">
        {t("text-main-description")}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => {window.open("../../../public/curriculum/CV-EmanuelSantiagoMazaIT.pdf", '_blank')}}
        >
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:opacity-85 h-10 px-4 py-2 font-geist-medium">
            {t("text-main-download")}
          </button>
        </a>
      </div>
      <div className="mx-auto mt-10 max-w-xl sm:text-xl/relaxed dark:text-white/55 text-black ">
        <div className="mt-6 flex justify-center gap-4 lg:justify-center">
          {listEnlaces ? (
            listEnlaces.map((enlace: EnlacesI) => {
              return (
                <a
                  key={enlace.id}
                  className="text-gray-700 w-10 transition hover:text-gray-700/75 dark:text-white/75 dark:hover:text-gray-700"
                  target="_blank"
                  rel="noreferrer"
                  href={enlace.url}
                >
                  <img
                    src={`./${enlace.iconImage}`}
                    alt=""
                  />
                </a>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
