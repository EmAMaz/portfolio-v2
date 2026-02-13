import { useTranslation } from "react-i18next";
import HeaderComponent from "../header";
import { projects } from "../../utils/datos";

export default function ProjectPage() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section className="py-24 bg-[#fbfbfb] text-black" id="proyectos">
        <div className="container mx-auto px-6">
          {/* Cabecera Limpia */}
          <div className="mb-16 border-l-2 border-black pl-6">
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">
              {t("text-projects-title")} <span className="font-black">{t("text-projects-title&")}</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg font-medium text-sm tracking-wide">
              EXPLORACIÓN DE INTERFACES Y DESARROLLO FUNCIONAL.
            </p>
          </div>

          {/* Bento Grid Claro */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[850px]">
            {projects.map((project, index) => {
              const isLarge = index === 0;
              const isMedium = index === 1 || index === 2;

              return (
                <div
                  key={project.id}
                  className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
                ${isLarge ? "md:col-span-2 md:row-span-2" : ""} 
                ${isMedium ? "md:col-span-2 md:row-span-1" : "md:col-span-1"}`}
                >
                  {/* Contenedor de Imagen */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-90"
                    />
                    {/* Overlay Gradiente más suave para fondo claro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Contenido sobre la imagen */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                    <h3
                      className={`font-bold text-white tracking-tight ${isLarge ? "text-3xl" : "text-xl"}`}
                    >
                      {project.title}
                    </h3>
                    {/* <p className="text-gray-200 text-sm uppercase mt-2 mb-6 font-medium max-w-xs transition-opacity duration-500">
                      {project.description}
                    </p> */}

                    {/* Botones Monocromáticos */}
                    <div className="flex gap-3">
                      <a
                      href={project.demoLink}
                      className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white hover:text-blue-600 transition-all text-white"
                      title="Ver demo"
                      target="_blank"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="Stack-icon-placeholder-15"
                        />
                        {/* Reemplazar con icono de Link/Ojo */}
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                      
                      <a
                      href={project.repoLink}
                      className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white hover:text-gray-900 transition-all text-white"
                      title="Código fuente"
                      target="_blank"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
