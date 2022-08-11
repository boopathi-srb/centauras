import React from 'react';
import blog from '../../icons/blog-card.png'
import books from '../../icons/books-card.png'
import Seminar from '../../icons/Seminar-card.png'
import workshop from '../../icons/workshops-card.png'
import youtube from '../../icons/youtube-card.png'
import './resources.css'
import AOS from 'aos';
import "aos/dist/aos.css"
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function Resources() {
  AOS.init({
    duration: 1000,
    offset:100,
    delay:200
  });
  return <div>
     <div className="resources">
        <h1 className="resource-heading" data-aos="zoom-in" data-aos-once="true">CAS' Resources</h1>
     </div>
     <div className="card-wrapper">
     <div className="card" data-aos="zoom-in"data-aos-once="true">
         <div className="title-wrapper">
           <h2>
             CAS-Seminars
           </h2>
           <h4>
             Series of Seminars conducted by members of CAS. 
           </h4>
         </div>
         <img src={Seminar} alt="Seminar"/>
         <Link to="/Resources/Seminars">View..</Link>
       </div>
     <div className="card" data-aos="zoom-in"data-aos-once="true">
         <div className="title-wrapper">
           <h2>
             CAS-Events
           </h2>
           <h4>
             Events conducted by members of CAS. 
           </h4>
         </div>
         <img src={youtube} alt="YouTube"/>
         <Link to="/Resources/Events">View..</Link>
       </div>

       <div className="card" data-aos="zoom-in"data-aos-once="true">
         <div className="title-wrapper">
           <h2>
             CAS-Blogs
           </h2>
           <h4>
             Blogs written by members of CAS. 
           </h4>
         </div>
         <img src={blog} alt="blogs"/>
         <Link to="/Resources/Blogs">View..</Link>
       </div>
       <div className="card" data-aos="zoom-in"data-aos-once="true">
         <div className="title-wrapper">
           <h2>
             CAS-Books
           </h2>
           <h4>
             Books suggestion by members of CAS. 
           </h4>
         </div>
         <img src={books} alt="books"/>
         <Link to="/Resources/Books">View..</Link>
       </div>
      
       <div className="card" data-aos="zoom-in"data-aos-once="true">
         <div className="title-wrapper">
           <h2>
             CAS-Workshops
           </h2>
           <h4>
             Workshops conducted by CAS. 
           </h4>
         </div>
         <img src={workshop} alt="workshop"/>
         <Link to="/Resources/Workshops">View..</Link>
       </div>
       
     </div>
     <Outlet/>
  </div>;
}

export default Resources;
