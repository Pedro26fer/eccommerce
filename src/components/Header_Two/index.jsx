import { CounterContext } from "../../Providers";
import {
  HeaderTwoStyled,
  StyleCartIcon,
  StyledStarIcon,
  StyledUserIcon,
} from "./style";
import { useContext } from "react"

export function HeaderTwo() {

  const { counter, subProduct } = useContext(CounterContext)
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
            {counter > 0 ? (
              <span className="counterProducts">0{counter}</span>
            )
            :
            null
          }
            <StyleCartIcon onClick={subProduct} />
          </li>
        </ul>
      </section>
    </HeaderTwoStyled>
  );
}
