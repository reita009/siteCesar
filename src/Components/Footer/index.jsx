import * as C from "./style";
import  LogoFace  from "../../assets/facebook.png";
import  LogoInsta  from "../../assets/instagram.png";
import      LogoWhats  from "../../assets/whatsapp.png";

export const Footer = () =>{
    
    return(
        <>
            <C.Container>
                <div className="wrap">
                    <div className="left">
                        <ul>
                            <li>Contato</li>
                            <li>Direitos</li>
                            <li>Quem somos</li>
                        </ul>
                    </div>

                    <div className="right">
                        <div className="social">
                            <img src={ LogoFace } />
                            <img src={ LogoInsta } />
                            <img src={ LogoWhats } />
                        </div>
                    </div>
                </div>
            </C.Container>
        </>
    )
}