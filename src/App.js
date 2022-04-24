import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Sidebar from './components/SideBar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Customers from './components/Customers/customers';
import Services from './components/Services/Services';
import Products from './components/Products/Products';

function App() {


  return (

    <div className="App">
      <div className="AppGlass">
        
        
        <BrowserRouter>
        <Sidebar />
          <Routes>
            <Route exact path="/" element={<MainDash />}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/customers" element={<Customers/>}> </Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/analytics" element={<MainDash />}></Route>
          </Routes>
          <RightSide />
        </BrowserRouter>

        
      </div>
    </div>
  );
}

export default App;
