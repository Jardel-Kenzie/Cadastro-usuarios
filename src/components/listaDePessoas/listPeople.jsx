import { CardPeople, Listed } from "./styled"

const ListPeople = ({dados, setDados}) => {
    return(
        <Listed>
            {dados.length > 0? dados.map(({nome, sobrenome, idade, email}, index) => {
                return <CardPeople>    
                    <h3>{nome} {sobrenome}</h3>
                    <p>Idade: {idade ? idade: "Dado não informado"}</p>
                    <p>Contato: {email ? email: "Dado não informado"}</p>
                    <button onClick={() => setDados(dados.filter((item, indice) => indice !== index))}>Remover</button>
                </CardPeople>
            }) : <h2>Nenhuma Pessoa Cadastrada</h2>}
        </Listed>
    )
}

export default ListPeople