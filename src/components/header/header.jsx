import { ButtonHeader, HeaderBase } from "./styledHeader"


const Header = ({setVisible}) => {
    return (
        <HeaderBase>
            <ButtonHeader onClick={() => setVisible(true)}>Cadastrar</ButtonHeader>
            <ButtonHeader onClick={() => setVisible(false)}>Pessoas</ButtonHeader>
        </HeaderBase>
    )
}

export default Header