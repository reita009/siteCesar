import styled from "styled-components";

export const Container = styled.div`
    height: 900px;
    width: 100%;
    background: rgb(235,220,181);
    background: linear-gradient(0deg, rgba(235,220,181,1) 0%, rgba(17,17,20,1) 72%);
    padding-top: 50px;
    display: flex;

    .left{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        
    }
    .left .wrap{
            height: 90%;
            width: 80%;
            margin: auto;
            display: flex;
            flex-direction: column;

    }
    .left .wrap .title{
        color: #E1E1E1;
        margin-top: 30px;
    }
    .left .wrap .title h1{
        font-size: 50px;
    }
    .left .wrap .image {
        height: 600px;
        width: 600px;
        margin: auto;
    }
    .left .wrap .image img{
        height: 100%;
        width: 100%;
    }
    .right{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .right form{
        width: 450px;
        height: 600px;
        background-color: #1D1C1D;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 200px;
        border-radius: 5px;
        display: flex;
        color: #E1E1E1;

        .wrap-form{
            height: 90%;
            width: 80%;
            margin: auto;
            display: flex;
            flex-direction: column;
            
            .text{
                margin-bottom: 20px;
                margin-top: 5px;
                height: 50px;
                padding:0px 6px;
                font-size: 18px;
                border-radius: 5px;
                border: none;
            }
            .hidden{
                visibility: hidden;
            }
            button{
                margin-left: auto;
                margin-right: auto;
                margin-top: 28px;
                border: none;
                border-radius: 7px;
                height: 60px;
                width: 90%;
                background-color: #B50415;
                color: #E1E1E1;
                font-size: 22px;
                &:hover{
                    cursor: pointer;
                    background-color: #9F0317;
                    transition: 0.6s ease-in;
                }
            }
        }

    }
`;