import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
     height: 700px;
     background-color: #111114;
     display: flex;

     .wrap{
        height: 500px;
        display: flex;
        flex-direction: column;
        color: wheat;

        .header{
            display: flex;
            width: 100%;
            height: 550px;

            .left{
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                padding: 8px;

                .left-header{
                    width: 100%;
                    height: 80px;
                    display: flex;
                    padding: 13px;

                    .warning{
                        width: 200px;
                        height: 30px;
                        border:#ffd32a solid 1px ;
                        border-radius: 10px;
                        text-align: center;
                        font-size: 12px;
                        padding: 8px;
                    }
                }
                .body{
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    .dice{
                        display: flex;
                    }
                    .dice img{
                        height: 100px;
                        width: 100px;
                    }
                    .title{
                        margin-top: auto;
                        margin-bottom: auto;
                        margin-left: 40px;
                        font-size: 24px;
                        span{
                            color: #9F0317;
                        }
                    }
                    p{
                        margin-top: 20px;
                    }
                    .perfil{
                        margin-top: 30px;
                        display: flex;
                        width: 100%;
                    }
                    .photo{
                        height: 300px;
                        width: 200px;
                    }
                    .photo img{
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        border-radius: 10px;
                    }
                    .perfil .name{
                        margin-left: 40px;
                        margin-top: 13px;
                        font-size: 23px;

                        span{
                        color: #9F0317;
                        }
                        p{
                            font-size: 17px;
                            width: 200px;
                        }
                    }
                    
                }
            }
            .right{
                width: 50%;
                height: 100%;
                
                img{
                    height: 80%;
                    width: 80%;
                    margin-top: 150px ;
                    margin-left: 15px;
                    border-radius: 15px;
                }
            }
        }
        
     }
`;