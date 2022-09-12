import * as C from "./style";
import Dice from "../../assets/dice.png";
import Perfil from "../../assets/perfil.jpg"
import Photo from "../../assets/basico.jpg"


export const Basic = () =>{

    return(
        <>
            <C.Container>
                <div className="wrap">
                    <div className="header">

                        <div className="left">
                            <div className="left-header">
                                <div className="warning">
                                    NOVAS AULAS DISPONIVEIS
                                </div>
                            </div>

                            <div className="body">
                                <div className="dice">
                                    <img src={ Dice } alt="" />
                                        <div className="title">
                                        <h1>Trilha do <span>Inglês</span></h1>
                                        </div>
                                </div>
                                
                                    <p>
                                    Sam... I'm glad you are with me. Aiding rout unnoticed 
                                    becomes returned creep
                                     really halt Lower. Oh first-born caverns twiddle exchange thanks nearly
                                     Council maggots removed. Trumpets become clever envelope Meduseld oil.
                                     Sam... I'm glad you are with me. Aiding rout unnoticed 
                                    becomes returned creep
                                     really halt Lower. Oh first-born caverns twiddle exchange thanks nearly
                                     Council maggots removed. Trumpets become clever envelope Meduseld oil.
                                     </p>

                                     <div className="perfil">
                                        <div className="photo">
                                         <img src={ Perfil } alt="" />
                                        </div>
                                        
                                        <div className="name">
                                            <h1>César <span>Cremasco</span></h1>
                                            <p>Sam... I'm glad you are with me. Aiding rout unnoticed 
                                                becomes returned creep really halt Lower. Oh first-born caverns twiddle
                                                 exchange thanks nearly Council 
                                                maggots removed. Trumpets become clever envelope Meduseld oil.
                                            </p>
                                        </div>
                                     </div>
                                     
                            </div>

                        </div>

                        <div className="right">
                            <img src={ Photo } alt="" />
                        </div>
                    </div>
                </div>
            </C.Container>
        </>
    )
}