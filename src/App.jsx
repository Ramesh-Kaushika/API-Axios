import Axios from "./pages/Dashboard/Axios.jsx";
import {Route,Routes} from "react-router-dom";
import{Navigate} from "react-router-dom";
import './App.css'

function App() {


  return (

    <>
        <Axios/>
        <Routes>
          <Route path={'*'} element={<Navigate to={'/dashboard'}/>}/>
        </Routes>

    </>
  )
}

export default App




