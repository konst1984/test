import "./App.css"
import Main from "./app/pages/Main"
import { Route, Routes } from "react-router"
import Book from "./app/pages/Book"
import NotFoundPage from "./app/pages/NotFoundPage"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/book/:id"} element={<Book />} />
        <Route path={"/*"} element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
