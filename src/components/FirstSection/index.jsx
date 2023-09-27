import { BackToTop } from "../BackToTop";
import { OrangeButton } from "../OrangeButton";
import { FirstSectionStyled } from "./style";

export function FirstSection() {
  return (
    <FirstSectionStyled>
      <div>
        <h1>
          Ajudando você a ter <span>mais performance</span>
        </h1>
        <p>
          Descubra suplementos premium na <span>Black Skull</span>. Melhore sua
          saúde e desempenho. Orientação personalizada disponível. Comece agora!
        </p>
        <OrangeButton text={"confira"} />
        <section>
          <img className="group15" src="/Group 15.svg" alt="" />
        </section>
      </div>
      <BackToTop/>
      <img className="faleConosco" src="/Fale conosco.svg" alt="" />
    </FirstSectionStyled>
  );
}
