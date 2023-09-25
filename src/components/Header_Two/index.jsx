import { HeaderTwoStyled, StyleCartIcon, StyledStarIcon, StyledUserIcon } from "./style";


export function HeaderTwo(){
    return(
        <HeaderTwoStyled>
            <img src="src/assets/Logo.svg" alt="Logo" />

            <ul>
                <li>CATEGORIA</li>
                <li>VESTUÁRIO</li>
                <li>OBJETIVOS</li>
                <li>PROMOÇÕES</li>
                <li>ATLETAS</li>
                <li>ASSINATURA</li>
            </ul>

            <section>
                <div>
                    <input type="text" placeholder="Buscar" />
                    <img src="src/assets/MagnifyingGlass.svg" alt="lupa" />
                </div>

                <ul className="menu">
                    <li>
                        <StyledUserIcon/>
                    </li>
                    <li>
                        <StyledStarIcon/>
                    </li>
                    <li>
                        <StyleCartIcon/>
                    </li>
                </ul>                
            </section>
        </HeaderTwoStyled>
    )
}