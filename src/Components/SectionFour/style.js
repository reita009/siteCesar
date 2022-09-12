import styled from "styled-components";
import Photo from "../../assets/div.jpeg";

export const Container = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${Photo});
    background-size: contain;
    display: flex;
    
        .wrap{
            display: flex;
            margin: auto;
            width: 60%;
            height: 100%;

            .left{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            margin-right: 25px;
                h1{
                    font-size: 60px;
                }
            }
            .right{
                width: 50%;
                height: 100%;
                display: flex;
                .wrap-rigth{
                    display: flex;
                    flex-direction: column;
                    margin:auto;
                }

                .button-wrap button{
                    padding: 8px;
                    height: 40px;
                    width: 200px;
                    background-color: #B50415;
                    color: #E1E1E1;
                    font-size: 15px;
                    border: none;
                    border-radius: 5px;
                    margin-top: 20px;
                    &:hover{
                        background-color:#C40B1B;
                        cursor: pointer;
                        transition: 0.6s ease-in;
                    }
                }
            }
    }
    
`;