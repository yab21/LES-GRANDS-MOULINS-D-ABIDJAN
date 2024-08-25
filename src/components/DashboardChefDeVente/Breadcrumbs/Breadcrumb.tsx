import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[22px] font-bold leading-[30px] text-dark dark:text-white">
        Akwaba <span className="font-thin">Mr le Chef de vente</span>
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Tableau de bord /
            </Link>
          </li>
          <li className="font-medium text-orange-400">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
