"use client";
import { categories } from "@/src/content/category";
import { projects } from "@/src/content/project";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useCategory } from "../contexts";

const projectsByCategory = {};

projects.forEach((project) => {
  project.category.forEach((category) => {
    if (Boolean(projectsByCategory[category])) {
      projectsByCategory[category] = projectsByCategory[category] + 1;
    } else {
      projectsByCategory[category] = 1;
    }
  });
});

function CategoryLink({
  isActive,
  label,
  onClick,
  superIndex,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
  superIndex: string;
}) {
  return (
    <div
      className={clsx(
        "relative md:text-2xl leading-[24px] pr-2 uppercase cursor-pointer select-none shrink-0",
        {
          "font-semibold border-b-[1px] border-b-dark": isActive,
        }
      )}
      onClick={onClick}
    >
      {label}

      <span className="absolute -right-[6px] -top-[0px] text-[8px] leading-[8px] font-semibold">
        {superIndex}
      </span>
    </div>
  );
}

export function CategoriesSelector() {
  const t = useTranslations();
  const { categorySelected: currentCategory, setCategorySelected } =
    useCategory();

  const toggleCategory = (categoryId: number) => {
    setCategorySelected(categoryId);
  };

  const removeCategory = () => {
    setCategorySelected(0);
  };

  return (
    <>
      <CategoryLink
        isActive={!Boolean(currentCategory)}
        label={t("models.category.all-work")}
        onClick={removeCategory}
        superIndex={"" + projects.length}
      />
      {categories.map((category) => (
        <CategoryLink
          key={category.id}
          isActive={currentCategory === category.id}
          label={t(`models.category.name.${category.id}`)}
          onClick={() => toggleCategory(category.id)}
          superIndex={projectsByCategory[category.id]}
        />
      ))}
    </>
  );
}
