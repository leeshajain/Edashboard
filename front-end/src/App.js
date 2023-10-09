
import './App.css';
import Nav from './component/Nav';
import Footer from './component/Footer';
import SignUp from './component/SignUp';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
       <Routes>
        <Route path='/' element={<h1>Product Listing Component</h1>} />
        <Route path='/add' element={<h1>Product Adding Component</h1>} />
        <Route path='/update' element={<h1>Product Updating Component</h1>} />
        <Route path='/logout' element={<h1>Logout Page</h1>} />
        <Route path='/profile' element={<h1>Profile Page</h1>} />
        <Route path='/signup'element={<SignUp/>}/>
       </Routes>
      </BrowserRouter>
      <Footer/>
        
    
    </div>
  );
}

export default App;
