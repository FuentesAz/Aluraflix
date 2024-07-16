import styled from "styled-components"

const ListaCajaEstilos = styled.ul`
    display: flex;
    list-style: none;
    gap: 180px;
`

const CardEstilos = styled.li`
    display: flex;
    overflow: hidden;
    border: 2px solid rgb(255, 186, 5);
    border-radius: 15px;
    box-shadow: 0 0 25px rgba(255, 186, 5, 1);
    margin-bottom:50px ;
    img{
        height: 260px;
        width: 430;
    }
`


const ListaCajaIg = ()=>{
    return <>
        <ListaCajaEstilos>
            <CardEstilos>
                <img src="img/ig1.jpg" alt="banner" />
            </CardEstilos>
            <CardEstilos>
                <img src="img/ig2.jpg" alt="banner" /></CardEstilos>
            <CardEstilos>
                <img src="img/ig3.jpg" alt="banner" /></CardEstilos>
        </ListaCajaEstilos>
    </>
}

export default ListaCajaIg