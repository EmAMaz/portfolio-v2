import { useTranslation } from "react-i18next";
import CardExperience from "./CardExperience";
import { getExperienceYears } from "../../utils/getExperienceYears";

export default function ExperiencePage() {
  const { t } = useTranslation();
  return (
    <div className="font-geist-ultra">
      <div className="flex flex-col items-center bg-white justify-center h-screen pt-16 pb-8">
          <div className="flex justify-center items-center px-4 pt-8 pb-16 h-full">
            <div className="flex flex-col justify-center gap-8 h-full">
              <h2 className="bg-clip-text text-gradient-vercel gradient-text select-none text-5xl font-bold text-gray-800 mb-4">
                {t("text-experience-title")}
              </h2>

              <div className="text-center lg:text-left overflow-y-auto xl:overflow-hidden">
                <div className="grid gap-12 xl:grid-cols-2 xl:gap-0 ">
                  <div className="flex flex-col gap-5">
                    <p className="text-gray-600 xl:w-[600px] text-left">
                      <span className="font-bold bg-gradient-to-r text-lg/7 from-black to-blue-400 bg-clip-text text-transparent">
                        {t("text-experience-description", {
                          year: getExperienceYears(),
                        })}
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
                  <div className="flex flex-col xl:overflow-y-auto xl:h-3/4 xl:max-h-[625px]">
                    <CardExperience className="flex-1" experience="forit" />
                    <CardExperience className="flex-1" experience="freelance" />
                    <CardExperience className="flex-1" experience="venedicto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
