import React from 'react';
import blog from '../../icons/blog-card.png'
import books from '../../icons/books-card.png'
import webinar from '../../icons/webinar-card.png'
import workshop from '../../icons/workshops-card.png'
import youtube from '../../icons/youtube-card.png'
import './resources.css'
import AOS from 'aos';
import "aos/dist/aos.css"

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
             CAS-Blogs
           </h2>
           <h4>
             Blogs written by members of CAS. 
           </h4>
         </div>
         <img src={blog} alt="blogs"/>
         <a href="/">View..</a>
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
         <a href="/">View..</a>
       </div>
       <div className="card" data-aos="zoom-in"data-aos-once="true">
         <div className="title-wrapper">
           <h2>
             CAS-Webinars
           </h2>
           <h4>
             Series of webinars conducted on by members of CAS. 
           </h4>
         </div>
         <img src={webinar} alt="webinar"/>
         <a href="/">View..</a>
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
         <a href="/">View..</a>
       </div>
       <div className="card" data-aos="zoom-in"data-aos-once="true">
         <div className="title-wrapper">
           <h2>
             CAS-Playlists
           </h2>
           <h4>
             YouTube playlists suggested by members of CAS. 
           </h4>
         </div>
         <img src={youtube} alt="YouTube"/>
         <a href="/">View..</a>
       </div>
     </div>
  </div>;
}

export default Resources;
