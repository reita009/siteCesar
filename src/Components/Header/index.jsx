import * as C from "../Header/Style";
import Logo from "../../assets/logo.jpeg"

export const Header = () =>{
    
    return(
        <>
            <C.Container>
                
                <div className="logo">
                    <img src={ Logo } alt="" />
                </div>
                <nav>
                    <ul>
                        <li>Sobre English With Dice</li>
                        <li>Trilhas</li>
                        <li>Projetos</li>
                        <li>Depoimentos</li>
                        <li>Dúvidas</li>
                    </ul>
                </nav>
                <div className="button-wrap">
                    <button>ASSINAR</button>
                </div>
            </C.Container>
        </>
    )
}