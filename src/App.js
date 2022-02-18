import Topbar from './components/topbar/topbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/home/home';
import ProductData from './data';
import { Component } from 'react';
import Footer from './components/footer/footer';
import About from './pages/about/about';
import Contact  from './pages/contact/contact';
import Blogs from './pages/blogs/blogs';
// import Orderplaced from './pages/Orderplaced/orderplaced';


class App extends Component {
  
  state={
    productData: ProductData,
  }
  render(){
  return (
    <div className="App">
      <Router>
      <header>
        <Topbar/>
      </header>
      <div className="body">
      <Routes>
         
         <Route path="/" element={<Home/>} exact></Route>
         <Route path="/About" element={ <About/>} exact></Route>
         <Route path="/Contact" element={ <Contact/>} exact></Route>
         <Route path="/Blogs" element={ <Blogs/>} exact></Route>
         {/* <Route path="/orderplaced" element={ <Orderplaced/>} exact></Route> */}
         
       </Routes>
      </div>
      <footer className="footer">
         <Footer/>
      </footer>
        
      </Router>
        
       
       
        

    
    </div>
  );
  
}
}

export default App;