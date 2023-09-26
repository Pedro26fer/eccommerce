import { OrangeButton } from "../OrangeButton";
import { TopFooterStyled } from "./style";

export function TopFooter(){
    return (
        <TopFooterStyled>
            <div>
                <h3>Garanta o <span>frete grátis</span></h3>
                <OrangeButton text={"consulte"}/>
                <img className="cubic" src="src/assets/Package.svg" alt="" />
            </div>

            <div>
                <h3>Seu dinheiro <span> de volta</span></h3>
                <OrangeButton text={"entenda"}/>
                <img className="dollar" src="src/assets/CurrencyCircleDollar.svg" alt="" />
            </div>
        </TopFooterStyled>
    )
}