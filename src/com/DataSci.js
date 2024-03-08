import React from 'react'
import Image from '../img/datasci.jpg'

export default function DataSci() {
  return (
    <div className="container-fluid p-0">
      <section className="showcase" >
        <div className="row g-0">
          <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="col-lg-6 my-auto showcase-text">
            <h2>Data Science</h2>
            <br />
            <p className="lead mb-0">Data science is a dynamic and multidisciplinary field that unlocks the potential of data and transforms it into actionable insights. It combines statistical analysis, machine learning, programming skills, and domain knowledge to extract knowledge, make predictions, and drive informed decision-making. As the world becomes increasingly data-driven, data science will continue to play a pivotal role in shaping industries, scientific advancements, and societal progress. Embracing data science empowers individuals and organizations to unlock the true value of data and harness its transformative potential.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
