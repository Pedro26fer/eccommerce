import { CategoryList } from "../FirstListCard";
import { CategoryMenuStyled } from "./style";

export function CategoryMenu({ data }) {
  const categorys = [
    "Proteínas",
    "Hipercalóricos",
    "Creatina",
    "Packs",
    "Aminoácidos",
    "Saúde",
  ];
  const pathImage = "/image 2.svg";

  return (
    <CategoryMenuStyled>
      <ul>
        <img className="arrowLeft" src="/Rectangle 49.svg" alt="" />
        {categorys.map((category, index) => (
          <li key={index}>
            <CategoryList
              pathImage={pathImage}
              category={category.toUpperCase()}
            />
          </li>
        ))}
        <img className="arrowRight" src="/Rectangle 50.svg" alt="" />
      </ul>
    </CategoryMenuStyled>
  );
}
