import styled from "styled-components";
import Figure from "../../assets/english.svg"

export const Image = styled.div`
    height: 500px;
    width: 500px;
    background-image: url(${Figure});
    background-repeat: no-repeat;
    background-size: cover;
 
`;

export const Container = styled.div`
     width: 100%;
     height: 600px;
     background-color: #111114;
     display: flex;

     .wrap{
        width: 68%;
        height: 500px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        padding-top: 90px;


        .left{
            display: flex;
            flex-direction: column;
            width: 50%;
            height: 90%;
            margin-top: 50px;
            margin-right: 20px;
            .left-header{
                display: flex;
                color: #ffd32a;
                font-size: 19px;
                padding: 10px;
            }
            h1{
                color: #E1E1E1;
                font-size: 47px;
            }
            p{
                color: #E1E1E1;
                margin-top: 30px;
            }
            .left-footer{
                display: flex;
                padding: 8px;
            }
            .left-footer button{
                margin-top: 13px;
                padding: 8px;
                height: 40px;
                width: 200px;
                background-color: #f6e58d;
                color: #111114;
                font-size: 15px;
                border: none;
                border-radius: 5px;
                &:hover{
                    background-color: #f9ca24;
                    cursor: pointer;
                    transition: 0.6s ease-in;
                }
            }
        }
        .right{
            display:flex;
        }
    }
    
     ` 