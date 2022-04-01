import {useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import UserContext from "../../contexts/UserContext"

import GlobalStyle from "../../assets/styles/globalStyles"

import HomePage from "../HomePage"
import Habits from "../Habits"
import Today from "../Today"
import History from "../History"

export default function App() {
  const [token, setToken] = useState("")
  const [userImage, setUserImage] = useState("")

  console.log("token: ", token)
  console.log("userImage: ", userImage)

  const contextValue = {token, setToken, userImage, setUserImage}

  return (
    <UserContext.Provider value={contextValue} >
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<HomePage />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}