import {useState, useEffect} from "react"
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
  const [weekdays, setWeekdays] = useState()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setWeekdays([
      {dayKey: "D", value: 0},
      {dayKey: "S", value: 1},
      {dayKey: "T", value: 2},
      {dayKey: "Q", value: 3},
      {dayKey: "Q", value: 4},
      {dayKey: "S", value: 5},
      {dayKey: "S", value: 6}
    ])
  }, [])

  const contextValue = {token, setToken, userImage, setUserImage, weekdays, setProgress, progress}

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