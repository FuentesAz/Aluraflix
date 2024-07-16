import styled from "styled-components"

const CuerpoEstilo = styled.section`
    position: relative;
    height: 100px;
    margin-top:100px;
`

const CajaTitulo = styled.div`
    font-family: 'Roboto', sans-serif;
    position: absolute;
    text-align: center;
    top: 15px;
    left: 40px;
    height: 70px;
    width: 432px;
    background-color: #FFBA05;
    color: white;
    border-radius: 15px;
`

const EquipoTituloIg = ()=>{
    return <>
            <CuerpoEstilo>
            <CajaTitulo>
                <h1>INOVACIÓN Y GESTIÓN</h1>
            </CajaTitulo>
        </CuerpoEstilo>
    </>
}

export default EquipoTituloIg