import styled from "styled-components";

export const CardForm = styled.form`
    background-color: white;
    border-radius: 20px;
    height: 500px;
    width: 350px;
    padding: 30px;
    border: solid 1px;
    display: flex;
    margin-top: 80px;
    flex-direction: column;
    justify-content: space-around;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`

export const TitleForm = styled.h2`
    text-align: center;
`

export const ButtonSubmit = styled.button`
    padding: 5px;
    border-radius: 10px;
    font-size: large;
    cursor: pointer;
    background-color: white;
    border: solid 2px #2685DA;

`