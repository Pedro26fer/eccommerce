import { CategoryList } from "../FirstListCard";
import { CategoryMenuStyled } from "./style";

export function CategoryMenu() {
  return (
    <CategoryMenuStyled>

      <ul>
        <li>
          <CategoryList
            pathImage={"/image 2.svg"}
            category={"PROTEÍNAS"}
          />{" "}
        </li>
        <li>
          <CategoryList
            pathImage={"/image 2.svg"}
            category={"HIPERCALÓRICOS"}
          />
        </li>
        <li>
          <CategoryList
            pathImage={"/image 2.svg"}
            category={"CREATINA"}
          />
        </li>
        <li>
          <CategoryList
            pathImage={"/image 2.svg"}
            category={"PACKS"}
          />
        </li>
        <li>
          <CategoryList
            pathImage={"/image 2.svg"}
            category={"AMINOÁCIDOS"}
          />
        </li>
        <li>
          <CategoryList
            pathImage={"/image 2.svg"}
            category={"SAÚDE"}
          />
        </li>
      </ul>
    
    </CategoryMenuStyled>
  );
}
