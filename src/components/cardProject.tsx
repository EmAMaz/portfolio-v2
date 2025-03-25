import { useTranslation } from "react-i18next";

type Props = {
  nameProject: string;
  urlLive: string;
  urlGithub: string;
  technology:string;
};

export default function CardProject({
  nameProject,
  urlLive,
  urlGithub,
  technology
}: Props) {
  const { t } = useTranslation();

  return (
    <div className="flex-1">
      <ul style={{ paddingLeft: "8px" }}>
        <li className="border-b-2 border-zinc-700 p-6">
          <div>
            <div className="font-semibold text-base leading-none ">
              <div className="flex gap-6">
                <div className="border-t-2 border-b-2 rounded-md border-zinc-700 p-3 w-max">{nameProject}</div>
              </div>
            </div>
            <ul className="list-disc mt-4">
              <p className="font-bold">{t("text-features-technology")}</p>
              <li>{technology}</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <button className="border p-2 inset-shadow-2xs shadow-md hover:shadow-emerald-500/50">
                <a href={urlLive}>{t("text-view-live")}</a>
              </button>
              <button className="border p-2 inset-shadow-2xs shadow-md hover:shadow-emerald-500/50">
                <a href={urlGithub}>{t("text-view-code")}</a>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
