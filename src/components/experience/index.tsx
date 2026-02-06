import { useTranslation } from "react-i18next";
import CardExperience from "./CardExperience";

export default function ExperiencePage() {
  const { t } = useTranslation();
  return (
    <div className="font-geist-ultra">
      <div>
        <section className="min-h-screen bg-gradient-to-t from-black/10 to-white absolute top-0 left-0 w-screen justify-center flex items-center">
          <div className="container flex justify-center items-center mx-auto px-4 overflow-y-auto h-full pt-8 pb-16">
            <div className="flex flex-col lg:flex-col gap-8 h-screen">
                <h2 className="bg-clip-text text-gradient-vercel gradient-text select-none text-5xl font-bold text-gray-800 mb-4">
                  {t("text-experience-title")}
                </h2>
              <div className="text-center lg:text-left flex-1">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-0">
                  <div className="flex flex-col gap-5">
                    <p className="text-gray-600 xl:w-[600px] text-left">
                      <span className="font-bold bg-gradient-to-r text-lg/7 from-black to-blue-400 bg-clip-text text-transparent">
                        {t("text-experience-description")}
                      </span>
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="lg:flex-shrink-0 md:flex-shrink-0 sm:flex">
                        <img
                          alt="Picture of the author"
                          loading="lazy"
                          width="300"
                          height="300"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-xl hover:shadow-xl transition duration-200 ease-in-out cursor-pointer"
                          src="imageCv/fotocv.jpeg"
                        />
                      </div>
                      <div>
                        <p className="mt-0.5 italic text-black/60 max-w-[250px]">
                          {t("text-experience-chiste")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <CardExperience experience="freelance" />
                    <CardExperience className="h-2/3 md:h-3/4 mb-6 xl:min-h-0" experience="venedicto" />
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
