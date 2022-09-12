import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 400px;
    background-color: #111114;

    .wrap{
        width: 68%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;

        .left{
            height: 100%;
            width: 50%;
            display: flex;

            ul{
                margin: auto;
                display: flex;
            }
            ul li{
                color: #E1E1E1;
                list-style: none;
                margin-left: 55px;
                margin-left: 55px;
                font-size: 30px;
            }
        }

        .right{
            height: 100%;
            width: 50%;
            display: flex;
            
            .social{
                margin: auto;
            }
            .social img{
                height: 50px;
                width: 50px;
                margin-right: 30px;
                cursor: pointer;
            }            
        }
    }
`;