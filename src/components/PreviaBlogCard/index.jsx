import { StyledPreviaBlogCard } from "./style";
import { OrangeButton } from "../OrangeButton/index";

export function PreviaBlogCard({ img, date, previa }) {
  return (
    <StyledPreviaBlogCard>
      <figure>
        <img src={img} alt="" />
        <figcaption>{date}</figcaption>
      </figure>
      <p>{previa}</p>
      <OrangeButton text={"ler mais"} />
    </StyledPreviaBlogCard>
  );
}
