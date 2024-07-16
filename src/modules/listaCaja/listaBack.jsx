import styled from "styled-components"

const ListaCajaEstilos = styled.ul`
    display: flex;
    list-style: none;
    gap: 180px;
`

const CardEstilos = styled.li`
    display: flex;
    overflow: hidden;
    border: 2px solid rgb(0, 200, 111);
    border-radius: 15px;
    box-shadow: 0 0 25px rgba(0, 200, 111, 1);
    img{
        height: 260px;
        width: 430;
    }
`


const ListaCajaBack = ()=>{
    return <>
        <ListaCajaEstilos>
            <CardEstilos>
                <img src="img/back1.jpg" alt="banner" />
            </CardEstilos>
            <CardEstilos>
                <img src="img/back2.jpg" alt="banner" /></CardEstilos>
            <CardEstilos>
                <img src="img/back3.jpg" alt="banner" /></CardEstilos>
        </ListaCajaEstilos>
    </>
}

export default ListaCajaBack