import styled from "styled-components"

const BotonesEstilo = styled.button`
    position: relative fixed;
    font-family: 'Roboto', sans-serif;
    border-radius: 10px;
    border: 2px solid #fff;
    background-color: #262626;
    height: 54px;
    width: 180px;
    cursor: pointer;
    color: #fff;
    margin-left: 10px;
`

const Botones = () => {
    return <>
        <BotonesEstilo>HOME</BotonesEstilo>
        <BotonesEstilo>NUEVO VIDEO</BotonesEstilo>
    </>
}

export default Botones