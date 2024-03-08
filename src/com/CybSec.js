import React from 'react'
import Image from '../img/cyb.jpg'

export default function CybSec() {
  return (
    <div className="container-fluid p-0">
      <section className="showcase" >
        <div className="row g-0">
          <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Cyber Security</h2>
            <br />
            <p className="lead mb-0">
              Cybersecurity refers to the practice of safeguarding systems, computers and data from digital attacks. These attacks often involve attempts to breach, modify, or damage the target’s computer system, resulting in interruption or downtime for services, theft of confidential or proprietary data and exposure of personal information.
              The field of cybersecurity is ever growing and changing. In the past, cybersecurity primarily focused on preventing access from the outside, by forming a perimeter of defense measures such as firewalls or antivirus software to prevent cyber crimes. These crimes date back to the 1970s when early computerized phone systems were targeted in order to steal long-distance telephone time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
