import styled from "styled-components"

const FooterEstilo = styled.footer`
    text-align: center;
    background-color:rgb(0, 0, 0, 0.9) ;
    border-top: 5px solid #2271D1 ;

    img{
        padding: 30px;
        width: 200px;
        height: 40px;
    }
`

const Footer =()=>{
    return <>
        <FooterEstilo>
            <img src="img/Logo.svg" alt="footer" />
        </FooterEstilo>
    </>
}

export default Footer