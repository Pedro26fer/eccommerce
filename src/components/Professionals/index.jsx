import { OrangeButton } from "../OrangeButton";
import { ProfessionalsSectionStyled } from "./style";

export function Professionals({ data }) {
  const professionals = data.filter((item) => item.section == "Professionals");

  return (
    <ProfessionalsSectionStyled>
      <h1>
        Conheça a tropa<span> Black Skull</span>
      </h1>
      <div>
        <ul>
          <img className="leftArrow" src="/Rectangle 49.svg" alt="" />
          {professionals?.map((item) => (
            <li key={item.id}>
              <img
                className="profe"
                width="320px"
                src={item.professinalImage}
                alt=""
              />
            </li>
          ))}
          <img className="rightArrow" src="/Rectangle 50.svg" alt="" />
        </ul>
      </div>

      <img className="backlogo" src="/Frame 17.svg" alt="" />

      <OrangeButton text={"VER TODOS"} />
    </ProfessionalsSectionStyled>
  );
}
