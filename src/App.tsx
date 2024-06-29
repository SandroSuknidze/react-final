import './styles/App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Hotels} from "./pages/Hotels.tsx";
import {Contact} from "./pages/Contact.tsx";
import {ToastContainer} from "react-toastify";
import {Navbar} from "./components/Navbar.tsx";
import './styles/Navbar.scss';

function App() {

  return (
    <>
        <ToastContainer />
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
