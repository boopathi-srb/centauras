import Topbar from './components/topbar/topbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/home/home';
// import ProductData from './data';
import { Component } from 'react';
import Footer from './components/footer/footer';
import Team from './pages/team/team';
import Contact  from './pages/contact/contact';
import Blogs from './pages/blogs/blogs';
import Apply from './pages/apply/apply'
import Applied from './pages/applied/applied';


class App extends Component {
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
         <Route path="/Team" element={ <Team/>} exact></Route>
         <Route path="/Contact" element={ <Contact/>} exact></Route>
         <Route path="/Blogs" element={ <Blogs/>} exact></Route>
         <Route path="/Apply" element={ <Apply/>} exact></Route>
         <Route path="/Applied" element={ <Applied/>} exact></Route>
         
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