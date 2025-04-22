import React from 'react'
import './styling/Aboutus.css'

const Aboutus = () => {
  return (
    <div class="mycontainer2">
      <div class="aboutUsContainer
      card shadow">
        <section class="heroSection">
          <div class="heroContent">
            <h1 class="heading">Delivering Deliciousness, Right to Your Door</h1>
            < p class="para">We're passionate about connecting you with the best local restaurants and delivering your favorite meals quickly and conveniently.</p>
          </div>
          <div class="heroImage">
            {/* Replace with your actual image */}
            <img src="/images/company .png" alt="Delicious Food Delivery" />
          </div>
        </section>
  
        <section class="ourStorySection">
          <h2 class="heading">Our Story</h2>
          <p class="para">
            Founded in [2025], [Leeiyorn's Quick Meals] was born out of a simple idea: to make enjoying great food easier than ever. We saw a need for a reliable and efficient food delivery service that not only offered a wide variety of cuisines but also prioritized speed and customer satisfaction.
          </p>
          <p class="para">
            What started as a small local operation has grown into a thriving platform connecting hungry customers with their favorite restaurants across [Your City/Region]. Our commitment to quality, seamless ordering, and timely delivery remains at the heart of everything we do.
          </p>
          {/* You can add more paragraphs about your company's journey, values, etc. */}
        </section>
  
        <section class="ourMissionSection">
          < h2 class="heading">Our Mission</h2>
          <p>
            Our mission is to be the leading food delivery platform that empowers local restaurants and provides customers with a delightful and hassle-free dining experience at home, in the office, or wherever they may be. We strive to:
          </p>
          <ul>
            <li>Offer a diverse selection of high-quality food options.</li>
            <li>Provide a user-friendly and intuitive ordering process.</li>
            <li>Ensure fast and reliable delivery services.</li>
            <li>Support local restaurants and their growth.</li>
            <li>Prioritize customer satisfaction above all else.</li>
          </ul>
        </section>
  
        <section class="ourTeamSection">
          <h2 class="heading">Meet the Team</h2>
          <p class=" text-black">
            Behind [leeiyorn's Quick Meals] is a dedicated team of food enthusiasts, tech innovators, and logistics experts who are passionate about making your food delivery experience exceptional.
          </p>
          <div class="teamMembers">
            {/* Example team member cards - replace with your actual team data */}
            <div class="teamMember">
              <img src="/images/lee.jpeg" alt="Team Member 1" />
              <h3>[Mark Leeiyorn]</h3>
              <p>Co-founder & CEO</p>
              {/* Add social media links or a short bio if desired */}
            </div>
            <div class="teamMember">
              <img src="/images/ksi.jpeg" alt="Team Member 2" />
              <h3>[ Samuel Kuria]</h3>
              <p>Head of Operations</p>
            </div >
            <div class="teamMember">
            <img src="/images/ns.jpeg" alt="Team Member 2" />
              <h3>[ Nesh Munene]</h3>
              <p>Head of Sells</p>
            
            {/* Add more team members as needed */}
            </div>
          </div>
        </section>

        <section class="contactUsSection">
          <h2>Get in Touch</h2>
          <p>
            Have questions or feedback? We'd love to hear from you!
          </p>
          <p>
            Email: <a href="leornemuchui@gmail.com">support@[leornemuchui@gmail.com].com</a>
          </p>
          <p>
            Phone: [+254 726512212]
          </p>
          {/* You can add a contact form here if needed */}
        </section>
      </div>

    </div>
  )
}

export default Aboutus
