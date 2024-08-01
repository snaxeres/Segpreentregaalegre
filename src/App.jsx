import { NavBar } from "./components/NavBar"

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { useCardList } from "./hooks/useCardList"
import { Home} from "./components/Home"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer"




function App() {

  const { loading, seeds } = useCardList()


  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer seeds={seeds} loading={loading} />} />
        <Route path="/category/:categoryId" element={<Home/>} />
        <Route path="/item/:id" element={<ItemDetailsContainer/>} />
        <Route path="*" element={<div><h1>404</h1></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
