import * as C from "./style";
import Photo from "../../assets/children.svg";

export const Register = () =>{

    const url = "https://gmail.us8.list-manage.com/subscribe/post?u=b130c236306c474e33bbc51a3&amp;id=5866d3e60f&amp;f_id=00d65de0f0";

 

       return(
        <>
            
           <C.Container>

            <div className="left">
                <div className="wrap">
                    <div className="title">
                        <h1>Aprenda quando quiser e onde quiser!!</h1>
                    </div>
                    <div className="image">
                        <img src={ Photo }/>
                    </div>
                </div>
                  
            </div>

            <div className="right">

                    <form action={ url } method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div className="wrap-form">
                            <span>NOME*</span>
                            
                            <input className="text" type="text" name="FNAME" placeholder="Qual sue nome?"/>
                            <span>SOBRENOME*</span>
                            
                            <input className="text"  type="text" name="LNAME" placeholder="Qual seu Sobrenome?"/>
                            <span>E-MAIL*</span>
                            
                            <input className="text"  type="email" name="EMAIL" placeholder="Qual seu email?"/>
                            <span>TELEFONE*</span>
                            
                            <input className="text"  type="text" name="PHONE"  id="mce-PHONE" placeholder="Qual seu Telefone?"/>


                            <div className="hidden" taria-hidden="true"><input type="text" name="b_b130c236306c474e33bbc51a3_5866d3e60f" tabindex="-1" value=""/></div>
                            <button type="submit">ENVIAR</button>
                        </div>
                        
                    </form>
            </div>
                    
           </C.Container>
        </>
    )
}











