import { OrangeButton } from "../OrangeButton";
import { BackGroundInfo } from "./style";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsCreditCard,
} from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiTiktokLogoFill } from "react-icons/pi";
import { SiMercadopago, SiPix, SiNubank, SiPicpay } from "react-icons/si";
import { FaCcVisa, FaCcMastercard, FaFileInvoiceDollar } from "react-icons/fa";

export function Info() {
  return (
    <BackGroundInfo>
      <header>
        <img className="headererInfo" src="/LogoFooter.svg" alt="" />
        <h2>Nos Siga</h2>
        <ul>
          <li>
            <BsFacebook color="white" />
          </li>
          <li>
            <BsInstagram color="white" />
          </li>
          <li>
            <BsYoutube color="white" />
          </li>
          <li>
            <AiFillTwitterCircle color="white" />
          </li>
          <li>
            <PiTiktokLogoFill color="white" />
          </li>
        </ul>
      </header>

      <main>
        <div>
          <h1>BLACKSKULL USA</h1>
          <ul>
            <li>Sobre Nós</li>
            <li>Black Skull é confiável?</li>
            <li>Atletas Black Skull</li>
            <li>Nosso Blog</li>
            <li>Entre em Contato</li>
          </ul>
        </div>
        <div>
          <h1>INSTITUCIONAL</h1>
          <ul>
            <li>Trocas e Devoluções</li>
            <li>Política de Entregas</li>
            <li>Política de Privacidade</li>
            <li>Política de Cancelamentos</li>
          </ul>
        </div>

        <div>
          <h1>AFILLIADOS</h1>
          <ul>
            <li>Programa de Afiliados</li>
            <li>Desconto para Militares</li>
            <li>Benefícios para Profissionais da Saúde</li>picpaycredit
            <li>Política de Cancelamentos</li>picpacredit
          </ul>
        </div>

        <div>
          <h1>FORMAS DE PAGAMENTO</h1>
          <ul className="paymentList">
            <li>
              <SiMercadopago color="white" size={25} />
            </li>
            <li>
              <FaCcVisa color="white" size={25} />
            </li>
            <li>
              <FaCcMastercard color="white" size={25} />
            </li>
            <li>
              <SiNubank color="white" size={25} />
            </li>
            <li>
              <SiPix color="white" size={25} />
            </li>
            <li>
              <FaFileInvoiceDollar color="white" size={25} />
            </li>
            <li>
              <SiPicpay color="white" size={25} />
            </li>
            <li>
              <BsCreditCard color="white" size={25} />
            </li>
          </ul>
        </div>

        <div className="security">
          <h1>SEGURANÇA</h1>
          <div>
            <img src="/image 8.svg" alt="" />
            <img src="/image 6.svg" alt="" />
          </div>
        </div>
      </main>

      <footer>
        <h1>
          FIQUE POR <span>DENTRO</span>
        </h1>
        <h2>
          Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e
          muito mais!
        </h2>

        <div>
            <input className="footerInput" type="text" placeholder="Digite seu nome" />
            <input className="footerInput" type="text" placeholder="Digite seu email"/>
            <OrangeButton text={'enviar'}/>
        </div>
      </footer>
    </BackGroundInfo>
  );
}
