import styled from "styled-components"

const CardEstilos = styled.section`
    overflow: hidden;
    position: absolute;
    border: 2px solid #6BD1FF;
    height: 333px;
    width: 647px;
    top: 343px;
    right: 50px ;
    border-radius: 15px;
    box-shadow: 0 0 25px rgba(107, 209, 255, 1);
`
const InfoBannerEstilos = styled.div`
    width: 30%;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    left: 50px;
    top: 343px;
    color: #FFF;
    
    h1{
        padding: 20px 28px;
        font-size: 50px;
        background-color: rgb(107, 209, 255);
        border-radius: 15px;
        display: inline-block;

    }

    h2{
        font-size: 46px;
        font-weight: 400;
        margin: 10px;
    }
`

const Card = ()=>{
    return <>
        <CardEstilos>
            <img src="img/cardimagen.jpg" alt="banner" />
        </CardEstilos>
        <InfoBannerEstilos>
            <h1>FRONT END</h1>
            <h2>Challenge React</h2>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </InfoBannerEstilos>
    </>
}

export default Card