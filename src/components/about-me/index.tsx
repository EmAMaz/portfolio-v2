import { useTranslation } from "react-i18next";

export default function AboutMePage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="font-geist-ultra">
        <div>
          <div className="flex min-h-screen flex-col items-center px-4 pb-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
            <h1 className="mt-10 mb-4 self-center bg-clip-text text-gradient-vercel gradient-text">
              {t("text-aboutme-title")}
            </h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 opacity-75 rounded-tr-full"></div>
              </div>
              <div className="flex items-start bg-gray-100">
                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl text-black">
                    👋 {t("text-aboutme-h2")}
                    <span className="text-blue-600"> Santiago Maza</span>
                  </h2>
                  <p className="mt-4 text-gray-600/65 text-base font-bold">
                    {t("text-aboutme-description")}
                  </p>
                  <a
                    href="mailto:santiagomaza33@gmail.com"
                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    {t("text-aboutme-email")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
