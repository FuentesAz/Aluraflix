import styled from "styled-components"

const ListaCajaEstilos = styled.ul`
    display: flex;
    list-style: none;
    gap: 180px;
`

const CardEstilos = styled.li`
    display: flex;
    overflow: hidden;
    border: 2px solid #6BD1FF;
    border-radius: 15px;
    box-shadow: 0 0 25px rgba(107, 209, 255, 1);
    img{
        height: 260px;
        width: 430;
    }
`


const ListaCaja = ()=>{
    return <>
        <ListaCajaEstilos>
            <CardEstilos>
                <img src="img/fron1.jpg" alt="banner" />
            </CardEstilos>
            <CardEstilos><img src="img/front2.jpg" alt="banner" /></CardEstilos>
            <CardEstilos><img src="img/front3.jpg" alt="banner" /></CardEstilos>
        </ListaCajaEstilos>
    </>
}

export default ListaCaja