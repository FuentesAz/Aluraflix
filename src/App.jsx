import styled from "styled-components"
import EstilosGlobales from "./components/estilosGlobales"
import Cabecera from "./modules/header"
import Banner from "./modules/banner"
import EquipoTitulo from "./modules/videosCartas"
import ListaCaja from "./modules/listaCaja"
import ListaCajaBack from "./modules/listaCaja/listaBack"
import EquipoTituloBack from "./modules/videosCartas/EquipoTituloBack"
import EquipoTituloIg from "./modules/videosCartas/EquipoTituloIg"
import ListaCajaIg from "./modules/listaCaja/listaIg"
import Footer from "./modules/footer"


const Fondo = styled.body`
  background-color: #262626;
  width: 100%;
  height: 100%;
`

function App() {

  return (
    <>
      <Fondo>
        <EstilosGlobales />
        <Cabecera>
          <Banner />
        </Cabecera>
        <EquipoTitulo/>
        <ListaCaja/>
        <EquipoTituloBack/>
        <ListaCajaBack/>
        <EquipoTituloIg/>
        <ListaCajaIg/>     
        <Footer/>
      </Fondo>
    </>
  )
}

export default App
