import { ButtonSubmit, CardForm, TitleForm } from "./styledForm"
import TextField from '@mui/material/TextField'

const Form = ({dados,setDados}) => {
    let state = {
        nome:"",
        sobrenome:"",
        idade:"",
        email:"",
    }

    const mudeState = (e) => {
        state[e.target.id] = e.target.value;
    }

    const submitDados = (e) => {
        setDados([...dados, state])
        e.preventDefault();
    }
    return ( 
        <CardForm onSubmit={submitDados}>
            <TitleForm>Formulario de Cadastro</TitleForm>

            <TextField id="nome" onChange={mudeState} label="Nome" variant="outlined"/>
            <TextField id="sobrenome" onChange={mudeState} label="Sobrenome" variant="outlined"/>
            <TextField id="idade" onChange={mudeState} label="Idade" variant="outlined"/>
            <TextField id="email" onChange={mudeState} label="Email" variant="outlined"/>

            <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
        </CardForm>
    )
}

export default Form