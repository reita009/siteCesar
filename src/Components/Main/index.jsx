import * as C from "../Main/style";
import  Dice  from "../../assets/dice.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faChalkboardTeacher, faCoffee, faLandmark, faRankingStar, faSchool, faShuttleSpace, faSpaceShuttle, faUsersRays } from '@fortawesome/free-solid-svg-icons'
export const Main = () =>{

    return(
        <>
            
            <C.Container>
                <div className="wrap">
                    <div className="left">
                        <div className="title">
                            <h4>Inglês do básico ao avançado</h4>
                        </div>
                        <div className="body-left">
                            <h1>Aprenda inglês e bla bla bla, + bla bla</h1>
                            <br />
                            <p>Alfrid renowned 14th fairest altogether pints mother's grandfather's 
                                affects omen reign. Legends weren't secret Ent juicy witchcraft malice unfair high
                                 break put contains! Prancing Pony plumbing 
                                bury? I was there the day the strength of Men failed.</p>
                        </div>
                        <div className="button-left">
                            <button>ASSINAR AGORA</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="card">
                            <div className="card-header">
                                <img src={ Dice } alt="" />
                            </div>
                            <div className="card-body">
                                <div className="right-body-title">
                                    Junte-se a essa aventura!
                                </div>
                                <div className="price">
                                    <h4>Assinatura por apenas</h4>
                                    <h1>R$:00,00</h1>
                                    <h4>Ou R$:00,00 à vista</h4>
                                </div>
                                <div className="card-button">
                                    <button>ASSINAR ENGLISH WITH DICE </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="wrap-footer">
                    <div className="card-footer">
                        <FontAwesomeIcon className="main-icon" icon={faChalkboardTeacher} />
                        <div className="card-footer-body">
                            Plataforma completa que une todo ecossistema
                        </div>
                    </div>

                    <div className="card-footer">
                        <FontAwesomeIcon className="main-icon" icon={faSchool} />
                        <div className="card-footer-body">
                            Método de aprendizado eficiente
                        </div>
                    </div>

                    <div className="card-footer">
                        <FontAwesomeIcon className="main-icon" icon={faRankingStar} />
                        <div className="card-footer-body">
                            Desafios práticos com aplicações reais
                        </div>
                    </div>

                    <div className="card-footer">
                        <FontAwesomeIcon className="main-icon" icon={faUsersRays} />
                        <div className="card-footer-body">
                            Comunidade exclusiva de alunos e alunas
                        </div>
                    </div>

                    <div className="card-footer">
                        <FontAwesomeIcon className="main-icon" icon={faLandmark} />
                        <div className="card-footer-body">
                            Fórum exclusivo para dúvidas técnicas
                        </div>
                    </div>
                </div>
            </C.Container>
        </>
    )
}