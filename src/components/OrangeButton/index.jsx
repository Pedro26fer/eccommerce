import { OrangeButtonStyled } from "./style";

export function OrangeButton({ text }) {
  return <OrangeButtonStyled>{text.toUpperCase()}</OrangeButtonStyled>;
}
