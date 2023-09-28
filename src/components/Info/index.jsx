import { OrangeButton } from "../OrangeButton";
import { BackGroundInfo } from "./style";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsCreditCard,
} from "react-icons/bs";
import { PiTiktokLogoFill } from "react-icons/pi";
import { SiMercadopago, SiPix, SiNubank, SiPicpay } from "react-icons/si";
import { FaCcVisa, FaCcMastercard, FaFileInvoiceDollar, FaTwitter } from "react-icons/fa";
import { LiaFacebookF } from  "react-icons/lia"

export function Info() {
  return (
    <BackGroundInfo>
      <header>
        <img className="Logo" src="/LogoFooter.svg" alt="" />
        <h2>Nos Siga</h2>
        <ul>
          <li>
            <div>
              <LiaFacebookF color="black" />
            </div>
          </li>
          <li>
            <div>
              <BsInstagram color="black" />
            </div>
          </li>
          <li>
            <div>
              <BsYoutube color="black" />
            </div>
          </li>
          <li>
            <div>
              <FaTwitter color="black" />
            </div>
          </li>
          <li>
            <div>
              <PiTiktokLogoFill color="black" />
            </div>
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

        <div className="paymentDiv">
          <h1>FORMAS DE PAGAMENTO</h1>
          <ul className="paymentList">
            <li>
              <div>
                <img src="/Group 171.svg" alt="" width={''} />
              </div>
            </li>
            <li>
              <div>
                <img src="/visa.svg" alt="" />
              </div>
            </li>
            <li>
              <div>
                <img src="/Mastercard.svg" alt="" />
              </div>
            </li>
            <li>
              <div>
                <img src="/Group.svg" alt="" />
              </div>
            </li>
            <li>
              <div>
                <img src="/Group 146.svg" alt="" />
              </div>
            </li>
            <li>
              <div className="amex">
                <img src="/Group 147.svg" alt="" />
              </div>
            </li>
            <li>
              <div>
                <img src="/DinersClub.svg" alt="" />
              </div>
            </li>
            <li>
              <div>
                <img src="/Elo.svg" alt="" />
              </div>
            </li>
            <li>
              <div>
                <img src="/Boleto.svg" alt="" />
              </div>
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
          <input
            className="footerInput"
            type="text"
            placeholder="Digite seu nome"
          />
          <input
            className="footerInput"
            type="text"
            placeholder="Digite seu email"
          />
          <OrangeButton text={"enviar"} />
        </div>
      </footer>
    </BackGroundInfo>
  );
}
