import { Trapezio } from "../Trapézio";
import { StyledObjectivesCard } from "./style";

export function ObjectivesCard({ img, obj }) {
  return (
    <StyledObjectivesCard>
      <img src={img} alt="" />
      <Trapezio obj={obj} />
    </StyledObjectivesCard>
  );
}
