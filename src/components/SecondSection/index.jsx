import { FirstListCard } from "../FirstListCard";
import { SecondSectionStyled } from "./style";

export function SecondSection(){
    return(
        <SecondSectionStyled>
            <img className="arrow" src="src/assets/Rectangle 49.svg" alt="" />
            <ul>
                <li ><FirstListCard pathImage={"src/assets/image 2.svg"} category={'PROTEÍNAS'}/> </li>
                <li><FirstListCard pathImage={"src/assets/image 2.svg"} category={'HIPERCALÓRICOS'}/></li>
                <li><FirstListCard pathImage={"src/assets/image 2.svg"} category={'CREATINA'}/></li>
                <li><FirstListCard pathImage={"src/assets/image 2.svg"} category={'PACKS'}/></li>
                <li><FirstListCard pathImage={"src/assets/image 2.svg"} category={'AMINOÁCIDOS'}/></li>
                <li><FirstListCard pathImage={"src/assets/image 2.svg"} category={'SAÚDE'}/></li>
            </ul>
            <img className="arrow_two" src="src/assets/Rectangle 50.svg" alt="" />
        </SecondSectionStyled>
    )
}