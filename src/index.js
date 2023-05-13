import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./assets/css/font.css"
import "./assets/css/tailwind.css"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Queue from "./pages/Queue"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="queue/:id" element={<Queue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
// ReactDOM.render(<App />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
