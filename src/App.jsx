import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Sobre from './Pages/Sobre/Sobre'

function App() {
  
  const browserRouter = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" >
      <Route index element = {<Home />}  />
      <Route path='sobre' element = {<Sobre />} />

    </Route>
  ))

  return (
    <>
     <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
