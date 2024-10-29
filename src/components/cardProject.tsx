import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  projectId: string;
  urlImg: string;
  urlLive: string;
  urlGithub: string;
};

export default function CardProject({
  projectId,
  urlImg,
  urlLive,
  urlGithub,
}: Props) {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("Mouse entered the element");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("Mouse left the element");
  };
  return (
    <div
      className="relative bg-gray-800 rounded-lg cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={`rounded-lg w-full h-64 bg-gray-800 ${
          isHovered ? "opacity-20" : ""
        }`}
        src={urlImg}
        alt=""
      />
      <div
        className={`flex flex-col text-center absolute top-0 w-full justify-center items-center h-full ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="justify-center flex flex-col items-center w-full">
          <p className="text-white text-lg font-geist-ultra">
            {t(`text-project-title-${projectId}`)}
          </p>
          <span className="text-white">
            {t(`text-project-description-${projectId}`)}
          </span>
          <div className="gap-4 flex pt-4">
            <button className="border-[2px] p-2 border-white text-white hover:border-gray-400 hover:text-gray-400">
              <a href={urlLive}>{t("text-project-buttoncard1")}</a>
            </button>
            <button className="border-[2px] p-2 border-white text-white hover:border-gray-400 hover:text-gray-400">
              <a href={urlGithub}>{t("text-project-buttoncard2")}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
