import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Upload from './Pages/Upload'

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
