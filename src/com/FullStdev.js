import React from 'react'
import Image from '../img/fullstack.jpeg';

export default function FullStdev() {
  return (
    <div className="container-fluid p-0">
      <section className="showcase" >
        <div className="row g-0">
          <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Full Stack Development</h2>
            <br />
            <p className="lead mb-0">You may have heard about full stack web development but the actual concept around it may not be quite clear.
              To understand full stack development, we much first understand how websites are built. Full stack development refers to the front end (or the actual website you see when you pull it up in a browser like Chrome), and the back end which consists of the actual server where the website files live and hosting of that website on the web. Depending on your needs and the tech stack you're operating with, this could make the difference between good and bad web design.  Fortunately there isn't always a need for full stack development and there is potential to avoid additional cost and complexities when building or managing your company site. </p>
          </div>
        </div>
      </section>
    </div>
  )
}
