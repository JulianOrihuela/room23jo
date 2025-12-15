"use client";
import { ProjectCard } from "../../server";
import { useTranslations } from "next-intl";
import { videos, OurWorkVideo } from "@/src/content/sections/our-work";
import { isVideo } from "@/src/modules/file";
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { Project } from "@/src/modules/project";
import { useCategory } from "../contexts";

// **Import estático de todos los proyectos**
import { projects as allProjects } from "@/src/content/project";

const multimediaByProject: { [key: number]: OurWorkVideo } = {};
videos.forEach((video) => {
  multimediaByProject[video.project] = video;
});

// Tamaño de página para el infinite scroll
const PAGE_SIZE = 5;

export function ProjectList() {
  const t = useTranslations();
  const { categorySelected: currentCategory } = useCategory();

  // Estados de paginación
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  // Filtrado MEMOizado para no recalcular en cada render
  const filtered = useMemo(
    () =>
      currentCategory
        ? allProjects.filter((p) => p.category.includes(currentCategory))
        : allProjects,
    [currentCategory]
  );

  const total = filtered.length;

  // Al cambiar categoría, reiniciamos todo
  useEffect(() => {
    setPage(1);
    setProjects(filtered.slice(0, PAGE_SIZE));
  }, [filtered]);

  // Cargar la “página” siguiente
  const fetchNext = useCallback(() => {
    if (isFetching || projects.length >= total) return;
    setIsFetching(true);

    // Simulamos delay si quieres mostrar spinner; aquí es inmediato
    const start = page * PAGE_SIZE;
    const nextItems = filtered.slice(start, start + PAGE_SIZE);

    setProjects((prev) => [...prev, ...nextItems]);
    setPage((p) => p + 1);
    setIsFetching(false);
  }, [filtered, isFetching, page, projects.length, total]);

  // Sentinel de IntersectionObserver
  const loaderRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!loaderRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && fetchNext());
      },
      { rootMargin: "200px" }
    );
    obs.observe(loaderRef.current);
    return () => obs.disconnect();
  }, [fetchNext]);

  return (
    <div className="flex flex-col gap-[30px] mt-8 md:mt-16">
      {projects.map((project) => {
        const multimedia = multimediaByProject[project.id];
        return (
          <ProjectCard
            href={`/project/${project.slug}`}
            key={project.id}
            title={project.publicName}
            description={t.rich(`models.project.description.${project.id}`, {
              br: () => <br />,
            })}
            badges={project.category.map((category) =>
              t(`models.category.name.${category}`)
            )}
            buttonLabel={t(`sections.ourWork.see-project`)}
            image={!isVideo(multimedia.mime) ? multimedia.url : undefined}
            video={
              isVideo(multimedia.mime)
                ? { mime: multimedia.mime, url: multimedia.url }
                : undefined
            }
          />
        );
      })}

      {/* Spinner mientras “carga” la siguiente página */}
      {(projects.length < total || isFetching) && (
        <div className="flex flex-row justify-center">
          <FaSpinner className="animate-spin text-dark text-4xl" />
        </div>
      )}

      {/* Sentinel para desencadenar scroll infinito */}
      <div ref={loaderRef} />
    </div>
  );
}
