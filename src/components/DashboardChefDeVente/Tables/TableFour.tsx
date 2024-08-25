import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/product/farinepatissiere.jpeg",
    name: "Farine pâtissière",
    revenues: "4,635",
  },
  {
    logo: "/images/product/Farine_speciale.jpeg",
    name: "Farine spéciale",
    revenues: "4,290",
  },
  {
    logo: "/images/product/farineboulangere.jpeg",
    name: "Farine boulangère",
    revenues: "3,580",
  },
  {
    logo: "/images/product/fboulangereextrafine.jpeg",
    name: "Farine boulangère super-fine",
    revenues: "2,740",
  },
];

const TableFour = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        Statistique des produits les plus vendus
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 pt-3">
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-xs font-medium xsm:text-base">
              Nom du produit
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-xs font-medium xsm:text-base">
              % de vente par jour
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-2 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <div className="flex-shrink-0">
                <Image
                  src={brand.logo}
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
              <p className="font-medium text-green-light-1">{brand.revenues}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableFour;
