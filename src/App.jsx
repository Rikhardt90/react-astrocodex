import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import  Navbar  from "./core/Navbar";
import  Home  from "./pages/Home/Home";
import  Search  from "./pages/Search/Search";
import  Forecast  from "./pages/Forecast/Forecast";
import  About  from "./pages/About/About";

function App() {
  return (
    <div className="App">

    
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search/>}/>
            <Route path="/forecast" element={<Forecast/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </main>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
