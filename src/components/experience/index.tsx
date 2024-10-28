import { useTranslation } from "react-i18next";

export default function ExperiencePage() {
  const { t } = useTranslation();
  return (
    <div className="font-geist-ultra">
      <div>
        <section className="py-32 bg-gradient-to-t from-black/10 to-white dark:from-black/15 dark:to-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="text-center lg:text-left flex-1">
                <h2 className="bg-clip-text dark:text-gradient-vercel dark:gradient-text text-gradient-vercel gradient-text select-none text-5xl font-bold text-gray-800 dark:text-white mb-4">
                  {t("text-experience-title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-bold bg-gradient-to-r text-lg from-black to-blue-400 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:to-blue-400 dark:text-transparent">
                    {t("text-experience-description")}
                  </span>
                </p>
                <div className="mt-10">
                  <div className="flex items-center gap-4 pb-10">
                    <div className="lg:flex-shrink-0 md:flex-shrink-0 sm:flex">
                      <img
                        alt="Picture of the author"
                        loading="lazy"
                        width="300"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-xl hover:shadow-xl transition duration-200 ease-in-out cursor-pointer"
                        src="/full.webp "
                      />
                    </div>
                    <div>
                      <p className="mt-0.5 italic text-black/60 dark:text-white/60">
                       
                        {t("text-experience-chiste")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <ul style={{ paddingLeft: "8px" }}>
                  <li className="pl-8 pb-8 relative border-l-2 border-l-primary border-l-black">
                    <div
                      className="absolute border top-0 rounded-full bg-background flex items-center justify-center border-primary"
                      aria-hidden="true"
                      style={{
                        width: "16px",
                        height: "16px",
                        left: "-9px",
                        borderWidth: "2px",
                        background: "#fff",
                        border: "1px solid #000",
                      }}
                    ></div>
                    <div className="font-semibold text-base leading-none mb-1">
                      {t("text-experience-venedicto")}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Venedicto Team
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2024 - {t("text-experience-date")}
                    </p>
                    <ul className="list-disc mt-4">
                      <li>{t("text-experience-venedicto-description1")}</li>
                      <li>{t("text-experience-venedicto-description2")}</li>
                      <li>{t("text-experience-venedicto-description3")}</li>
                      <li>{t("text-experience-venedicto-description4")}</li>
                      <li>{t("text-experience-venedicto-description5")}</li>
                      <li>{t("text-experience-venedicto-description6")}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
