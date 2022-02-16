import styled from "styled-components";


export const Listed = styled.section`
    background-color: white;
    border-radius: 20px;
    height: 500px;
    width: 350px;
    padding: 30px;
    border: solid 1px;
    display: flex;
    margin-top: 80px;
    flex-direction: column;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    overflow: scroll;
`

export const CardPeople = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    border: solid 1px;
    border-radius: 10px;
    margin-top: 30px;

    h3,p{
        margin: 0;
    }   
    button{
        
        margin-top: 5px;
        padding: 5px;
        cursor: pointer;
        border: solid 1px red;
        background-color: white;
        border-radius:20px;
    }
`