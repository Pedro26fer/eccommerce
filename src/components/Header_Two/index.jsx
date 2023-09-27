import {
  HeaderTwoStyled,
  StyleCartIcon,
  StyledStarIcon,
  StyledUserIcon,
} from "./style";

export function HeaderTwo() {
  return (
    <HeaderTwoStyled>
      <img src="/Logo.svg" alt="Logo" />

      <ul>
        <li>Categoria</li>
        <li>Vestuário</li>
        <li>Objetivos</li>
        <li>Promoções</li>
        <li>Atletas</li>
        <li>Assinatura</li>
      </ul>

      <section>
        <div>
          <input type="text" placeholder="Buscar" />
          <img src="/MagnifyingGlass.svg" alt="lupa" />
        </div>

        <ul className="menu">
          <li>
            <StyledUserIcon />
          </li>
          <li>
            <StyledStarIcon />
          </li>
          <li>
            <StyleCartIcon />
          </li>
        </ul>
      </section>
    </HeaderTwoStyled>
  );
}
