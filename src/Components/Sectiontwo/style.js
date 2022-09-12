import styled from "styled-components";


export const List = styled.li`
            color:#E1E1E1;
            list-style: none;
            font-size: 30px;
`;
export const Category = styled.div`
            width: 160px;
            margin-left: 20px;
            border-bottom:${(props)=> props.ativo ? "yellow 5px solid" : '#E1E1E1 5px solid'} ;
            transition:1s ease-in-out;
            padding-bottom: 30px;
            text-align: center;
            margin-left: 50px;
            margin-right: 50px;
            &:hover{
                cursor: pointer;
                
            }
`;

export const Container = styled.div`
     width: 100%;
     height: 1500px;
     background-color: #111114;
     display: flex;

     .wrap{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        padding-top: 90px;
        color: wheat;
        
        .logo{
            margin-left: auto;
            margin-right: auto;
            height: 150px;
            width: 150px;
            border-radius: 50px;
        }
        h1{
            margin-top: 30px;
            text-align: center;
            color: #E1E1E1;
            font-size: 50px;
        }
        .body{
            width: 600px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
        }
        .footer{
            display: flex;
            margin-left: auto;
            margin-right: auto;
            margin-top: 60px;
            width: 100%;
        }
        .footer ul{
            display: flex;
            margin-left: auto;
            margin-right: auto;
        }
        
        
     }
`;
//border-bottom: #ffd32a 5px solid;