import styled from "styled-components"



export const Container = styled.header`
    width: 100%;
    height: 100px;
    background-color: #111114;
    color: #E1E1E1;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, inset -50px -50px 0px -30px rgba(253,255,247,0); 
    box-shadow: 0px 10px 13px -7px #000000, inset -50px -50px 0px -30px rgba(253,255,247,0);

    .logo img{
        height: 76px;
        width: 76px;
        border-radius: 50px;
    }
    nav ul{
        display: flex;
    }
    nav ul li{
        margin-left: 40px;
        list-style: none;
        font-size: 20px;
    }
    .button-wrap button{
        padding: 8px;
        height: 40px;
        width: 100px;
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
`;