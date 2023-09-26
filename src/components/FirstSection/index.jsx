import { OrangeButton } from "../OrangeButton";
import { FirstSectionStyled } from "./style";


export function FirstSection(){
    return(
        <FirstSectionStyled>
            <div>
                <h1>AJUDANDO VOCÊ A TER <span>MAIS PERFORMANCE</span></h1>
                <p>Descubra suplementos premium na <span>Black Skull</span>. Melhore sua saúde e desempenho. Orientação personalizada disponível. Comece agora!</p>
                <OrangeButton text={'CONFIRA'}/>
                <section>
                    <img className="group15" src="src/assets/Group 15.svg" alt="" />
                </section>
            </div>
            <img className="volteAoTopo" src="src/assets/Voltar ao topo.svg" alt="" />
            <img className="faleConosco" src="src/assets/Fale conosco.svg" alt="" />
        </FirstSectionStyled>
    )
}