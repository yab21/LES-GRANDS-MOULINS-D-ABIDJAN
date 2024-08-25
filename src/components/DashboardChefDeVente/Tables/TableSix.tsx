import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/product/farinepatissiere.jpeg",
    name: "Arnaud",
    visitors: 1343,
    revenues: "Faible",
  },
  {
    logo: "/images/product/Farine_speciale.jpeg",
    name: "Archille",
    visitors: 2020,
    revenues: "Moyenne",
  },
  {
    logo: "/images/product/farineboulangere.jpeg",
    name: "Stephane",
    visitors: 4004,
    revenues: "Bonne",
  },
  {
    logo: "/images/product/fboulangereextrafine.jpeg",
    name: "Edvige",
    visitors: 1100,
    revenues: "Faible",
  },
];

const TableSix = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        Statistique des commerciaux
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 pt-3">
          <div className="px-2 pb-3.5">
            <h5 className="text-xs font-medium xsm:text-base">
              Nom du commercial
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-xs font-medium xsm:text-base">
              Produit vendu / jour
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-xs font-medium xsm:text-base">Performance</h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/user/user-15.png "
                  className="rounded-3xl"
                  alt="Brand"
                  width={48}
                  height={48}
                />
              </div>
              <p className="hidden font-medium text-dark dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium">{brand.visitors}</p>
            </div>
            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium">{brand.revenues}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSix;
