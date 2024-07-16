import styled from "styled-components"
import Card from "../cards"

const BannerEstilos = styled.div`
    height: 832px;
    
    img{
        width: 100%;
        height: 100%;
    }
`

const Banner = ()=>{
    return <>
        <BannerEstilos>
            <img src="img/Banner.png" alt="Logo" />
            <Card/>
        </BannerEstilos>
    </>
}

export default Banner