import {Routes, Route} from 'react-router-dom';
import Main from "./Pages/Main.jsx";
import Cart from "./Pages/Cart.jsx";
import Navbar from "./Components/Navbar.jsx";
const App = () => {
  return(
      <div>
          <Navbar />
          <Routes>
              <Route index element={<Main />}/>
              <Route path='/Cart' element={<Cart />}/>
          </Routes>

      </div>
  );
};

export default App
