import {
  CampaignShowcaseTemplate,
  Container,
} from "@/src/components/server/templates/CampaignShowcase";
import { projectCampaignShowcase } from "@/src/content/project/project-campain-showcase";
import { projectMedia } from "@/src/content/project/project-media";
import { projectNextPrev } from "@/src/content/project/project-next";
import { Link, LOCALES_SUPPORTED } from "@/src/i18n";
import { getAllProjectSlugs } from "@/src/utils/getAllProjectSlugs";
import { getProjectById } from "@/src/utils/getProjectById";
import { getProjectBySlug } from "@/src/utils/getProjectBySlug";
import clsx from "clsx";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

/**
 * PASOS PARA DEFINIR UN PROYECTO
 * 1. Completar titulo y subtitlo en es.json, en.json
 * 2. Completar projectCampaignShowcase
 * 3. Completar projectMedia
 */
const IconButton = ({ children }) => {
  return (
    <div className="flex w-16 h-16 bg-white rounded-full text-black items-center justify-center">
      {children}
    </div>
  );
};

const Button = ({
  className,
  children,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...props}
      className={clsx(
        "flex justify-center md:justify-start",
        "bg-dark disabled:bg-[#808080] disabled:cursor-default cursor-pointer text-[20px] leading-[24px] font-medium text-white h-[85px] rounded-full flex items-center px-[13.5px]",
        "w-full md:w-auto",
        className
      )}
    >
      {children}
    </button>
  );
};

export async function generateStaticParams() {
  const staticParams: { locale: string; slug: string }[] = [];

  getAllProjectSlugs().forEach((slug) => {
    LOCALES_SUPPORTED.forEach((locale) => {
      staticParams.push({ locale, slug });
    });
  });

  return staticParams;
}

export default async function ProjectView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug({ slug });
  if (!project) {
    return notFound();
  }

  const messages = await getMessages();
  const sectionKeys = Object.keys(messages.projects[project.slug].sections);
  const { prev, next } = projectNextPrev[project.id];
  const nextProject = getProjectById({ id: next });
  const prevProject = getProjectById({ id: prev });

  const projectsTranslations = await getTranslations(`projects.${slug}`);
  const categoryTranslations = await getTranslations(`models.category.name`);
  const commonTranslations = await getTranslations("common");

  return (
    <div className="flex flex-col">
      <CampaignShowcaseTemplate
        title={projectsTranslations.rich("title", { br: () => <br /> } )}
        subtitle={projectsTranslations("subtitle")}
        sections={sectionKeys.map((key) => ({
          title: projectsTranslations(`sections.${key}.title`),
          content: projectsTranslations.rich(`sections.${key}.content`, {
            br: () => <br />,
            b: (text) => <b className="font-semibold">{text}</b>,
						ul: (text) => <ul className="list-disc ml-6">{text}</ul>,
						li: (text) => <li>{text}</li>
          }),
        }))}
        mainMedia={projectCampaignShowcase[project.id]}
        media={projectMedia[project.id]}
        category={categoryTranslations("" + project.category[0])}
      />
      <Container>
        <div className="flex flex-col md:flex-row justify-between mt-[56px] gap-6 md:gap-0">
          {prevProject?.slug && (
            <Link href={`/project/${prevProject?.slug}`}>
              <Button>
                <IconButton>
                  <BsArrowLeft className="w-8 h-8" />
                </IconButton>
                <span className="ml-4">{commonTranslations("previous")}</span>
              </Button>
            </Link>
          )}

          <Button className="md:px-[70px]" disabled>
            {project.publicName}
          </Button>

          {nextProject?.slug && (
            <Link href={`/project/${nextProject?.slug}`}>
              <Button>
                <span className="mr-4">{commonTranslations("next")}</span>
                <IconButton>
                  <BsArrowRight className="w-8 h-8" />
                </IconButton>
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}
