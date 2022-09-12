import * as C from "./style";
import Logo from "../../assets/logo.jpeg";
import { Basic } from "../Basic";
import { Intermediary } from "../intermediary";

import {useState} from "react";

export const SectionTwo = () =>{

const [one, setOne] = useState(true);
const [two, setTwo] = useState(false);
const [three, setThree] = useState(false);
const [four, setFour] = useState(false);


    const changeYellow = (e) =>{
        switch (e) {
            case 1:
                setOne(true);
                setTwo(false);
                setThree(false);
                setFour(false);
              break;
            case 2:
                setOne(false);
                setTwo(true);
                setThree(false);
                setFour(false);
              break;
            case 3:
                setOne(false);
                setTwo(false);
                setThree(true);
                setFour(false);
              break;
            case 4:
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(true);
              break;  
        }
    }



    return(
        <>
         <C.Container>
            <div className="wrap">

                <img className="logo" src={ Logo } alt="" />
                <h1>Oque você vai aprender</h1>
                <div className="body">
                    <p>Cloud consistency canceled hold Isildur's gut betrayed deserve handkerchiefs verse.
                        Least Éomund dines tramps hopeless screams king's ever-watchful halt risking. You cannot hide.
                        I see you. 
                        There is no life in the void. 
                        Only death. Throne stove Luin any beacons same seek clever morning hardly?</p>
                </div>

                <div className="footer">
                    <ul>

                        <C.Category ativo={one} onClick={ one => changeYellow(1) }><C.List >Básico</C.List></C.Category>
                        <C.Category ativo={two} onClick={ one => changeYellow(2) }><C.List >Intermediário</C.List></C.Category>
                        <C.Category ativo={three} onClick={ one => changeYellow(3) }><C.List >Avançado</C.List></C.Category>
                        <C.Category ativo={four} onClick={ one => changeYellow(4) }><C.List >Fluente</C.List></C.Category>

                    </ul>
                </div>
                
                {one && <Basic/>}
                {two && <Intermediary/>}

                

            </div>
         </C.Container>
        </>
    )
}