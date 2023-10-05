import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Body from "./pages/Body.js"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login.js"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
            <Header/>

            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/login" element={<Login />}/>
            </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
