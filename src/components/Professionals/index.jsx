import { OrangeButton } from "../OrangeButton";
import { ProfessionalsSectionStyled } from "./style";


export  function Professionals({data}){

    const professionals = data.filter(item => item.section == 'Professionals')

    return(
        <ProfessionalsSectionStyled>
            <h1>CONHEÇA A TROPA <span> BLACK SKULL</span></h1>       
            <div>
                <ul>
         
                    {professionals?.map((item) => (
                        <li key={item.id}><img className="profe" width="320px" src={item.professinalImage} alt="" /></li>
                    ))}

                </ul>
            </div>

            <img className="backlogo" src="/Frame 17.svg" alt="" />

            <OrangeButton text={'VER TODOS'}/>
        </ProfessionalsSectionStyled>
    )
}
