import styled from "styled-components"
import Botones from "../../components/botones"
import Banner from "../banner"

const HeaderEstilos = styled.header`
    padding: 25px 0;
    display: flex;
    align-items: center;
    


    img{
        padding: 0 60% 0 2%;
        width: 200px;
        height: 40px;
    }
`

const Cabecera = ()=>{
    return <>
        <HeaderEstilos>
            <img src="img/Logo.svg" alt="Logo"></img>
            <Botones></Botones>
        </HeaderEstilos>
        <Banner/>
    </>
}

export default Cabecera