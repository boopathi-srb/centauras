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
import Resources from './pages/Resources/resources';
import Apply from './pages/apply/apply'
import Applied from './pages/applied/applied';
import Data from './data';
import Scroll from './components/scroll/scroll';
import Blogs from './pages/Resources/Blogs/blogs';
import Books from './pages/Resources/books/books';
import Playlist from './pages/Resources/playlists/playlist';
import Webinar from './pages/Resources/webinars/webinar';
import Workshop from './pages/Resources/workshops/workshop';


class App extends Component {
  
    state={
      teamData: Data,
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
         <Route path="/Team" element={ <Team data={this.state.teamData}/>} exact></Route>
         <Route path="/Contact" element={ <Contact/>} exact></Route>
         <Route path="/Resources" element={ <Resources/>} exact> </Route>
         <Route path="/Resources/Blogs" element={ <Blogs/>} exact="true"></Route>
         <Route path="/Resources/Books" element={ <Books/>} exact="true"></Route>
         <Route path="/Resources/Playlist" element={ <Playlist/>} exact="true"></Route>
         <Route path="/Resources/Webinars" element={ <Webinar/>} exact="true"></Route>
         <Route path="/Resources/Workshops" element={ <Workshop/>} exact="true"></Route>
         <Route path="/Apply" element={ <Apply/>} exact></Route>
         <Route path="/Applied" element={ <Applied/>} exact></Route>
         
         
       </Routes>
       <Scroll/>
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