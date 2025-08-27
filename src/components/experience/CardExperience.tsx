import { useTranslation } from "react-i18next";

export default function CardExperience({ experience }: { experience: string }) {
  const { t } = useTranslation();
  return (
    <div>
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
            {t(`text-experience-${experience}-position`)}
          </div>
          <p className="text-sm text-muted-foreground">
            {t(`text-experience-${experience}`)}
          </p>
          <p className="text-sm text-muted-foreground">
            {t(`text-experience-${experience}-date`)}
          </p>
          <ul className="list-disc mt-4 gap-1 flex flex-col">
            <li className="list-none font-bold uppercase text-sm">
              {t("text-experience-tasksTitle")}:
            </li>
            <li>{t(`text-experience-${experience}-tasks`)}</li>
            <li className="list-none font-bold uppercase text-sm">
              {t("text-experience-technologiesTitle")}:
            </li>
            <li>{t(`text-experience-${experience}-technologies`)}</li>
            <li className="list-none font-bold uppercase text-sm">
              {t("text-experience-practicesTitle")}:
            </li>
            <li>{t(`text-experience-${experience}-practices`)}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

