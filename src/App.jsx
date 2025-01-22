import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Sobre from './Pages/Sobre/Sobre'
import Layout from './Components/Layout/Layout'
import Projetos from './Pages/Projetos/Projetos'
import Contatos from './Pages/Contatos/Contatos'

function App() {
  
  const browserRouter = createBrowserRouter(createRoutesFromElements(
    <Route path = "/"  element = { <Layout />}>
      <Route index element = {<Home />}  />
      <Route path='sobre' element = {<Sobre />} />
      <Route path='projetos' element = {<Projetos />} />
      <Route path='contatos' element = { <Contatos />} />
    </Route>
  ))

  return (
    <>
     <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
