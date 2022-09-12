import styled from "styled-components";


export const Container = styled.main`
    height: 900px;
    width: 100%;
    background: rgb(235,220,181);
    background: linear-gradient(0deg, rgba(235,220,181,1) 0%, rgba(17,17,20,1) 72%);
    padding-top: 150px;

    .wrap{
        width: 68%;
        height: 500px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        
    }

    .wrap .left{
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 15px;
    }
    .wrap .left .title{
        margin: 30px;
        color: #ffda79;
        font-size: 30px;
    }
    .wrap .left .body-left {
        color: #C6E1DA;
    }
    .wrap .left .body-left h1{
        font-size:50px;
    }
    .wrap .left .body-left p{
        font-size: 19px;
    }
    .wrap .left .button-left{
        margin-top: 20px;
    }
    .wrap .left .button-left button{
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


    .wrap .right{
        height: 100%;
        width: 50%;
        padding: 3;
    }
    .wrap .right .card{
        height: 450px;
        width: 380px;
        background-color: #1D1C1D;
        margin-left: auto;
        -webkit-box-shadow: 5px 5px 15px 5px #000000; 
        box-shadow: 5px 5px 15px 5px #000000;
        border-radius: 5px;
        display: flex;
        flex-direction: column;

        .card-header{
            height: 100px;
            width: 100px;
            margin-right: auto;
            margin-left: auto;
            margin-top: 17px;
            margin-bottom: 13px;
        }
        img{
            height: 100%;
            width: 100%;
        }
        .card-body{
            display: flex;
            flex-direction: column;
        }
        .card-body .right-body-title{
            text-align: center;
            color: #E1E1E1;
            font-size: 28px;
        }
        .price h4{
            margin-top: 20px;
            text-align: center;
            color: #E1E1E1;
            font-size: 19px;
        }
        .price h1{
            margin-top: 20px;
            text-align: center;
            color: #E1E1E1;
        }
        .card-button{
            display: flex;
        }
        .card-button button{
            margin-left: auto;
            margin-right: auto;
            margin-top: 28px;
            border: none;
            border-radius: 7px;
            height: 40px;
            width: 90%;
            background-color: #B50415;
            color: #E1E1E1;
            font-size: 18px;
            &:hover{
                cursor: pointer;
                background-color: #9F0317;
                transition: 0.6s ease-in;
            }
        }
        
    }
        .wrap-footer{
                width: 68%;
                margin-left: auto;
                margin-right: auto;
                display: flex;
                margin-top: 20px;
                justify-content: space-between;

                .card-footer{
                    height: 120px;
                    width: 200px;
                    display: flex;
                    flex-direction: column;

                    .main-icon{
                        height: 35px;
                        width: 35px;
                        color: #1D1C1D;
                        margin-left: auto;
                        margin-right: auto;
                        margin-top: 5px;
                    }
                    .card-footer-body{
                        margin-top: auto;
                        margin-bottom: auto;
                        margin-left: 15px;
                        margin-right: 15px;
                        color: #312E2B;
                        text-align: center;
                    }
                }

        }

        @media (max-width: 1390px){
           .wrap{
            flex-direction: column;
            height: 1000px;
            margin-left: auto;
            margin-right:auto;
           }
           .left{
            margin-bottom: 20px;
           }
           .right{
            margin-top: 30px;
            margin-bottom: 30px;
           }
           .wrap .left{
            width: 90%;
           }



           height: 1500px;
           
        }
        @media (max-width:942px){
            .wrap-footer{
                width: 100%;
                margin-top: 200px;
            }
            .card-footer{
                height: 90px;
            }
        }
        @media (max-width:525px){
            .wrap-footer{
                width: 100%;
                margin-top: 200px;
                flex-direction: column;
            }
            .card-footer{
                margin: auto;
            }
            

            height: 2000px;
        }
        @media (max-width:500px){
            
            .wrap .left .body-left h1{
                font-size:30px;
            }
            .wrap .right .card{
                width: 300px;
            }
            .wrap .left{
                width: 110%;
            }
            .wrap-footer{
                margin-top: 100px;
            }
        }
`;