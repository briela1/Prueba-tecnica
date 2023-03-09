import React from 'react'
import './App.css'
import Home from './components/Home'
import Detail from './components/Detail'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyOrder from './components/MyOrder'

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  // const [response, setResponse] = useState('')

  // // call server to see if its running
  // useEffect(() => {
  //   const getApiResponse = () => {
  //     fetch('http://localhost:5000/')
  //       .then((res) => res.text())
  //       .then((res) => setResponse(res))
  //   }
  //   getApiResponse()
  // }, [])
  // -------------------------------------------------

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/api/products/:id">
        <Detail />
      </Route>
      <Route exact path="/cart">
        <MyOrder />
      </Route>


    </div>
  )
}

export default App
