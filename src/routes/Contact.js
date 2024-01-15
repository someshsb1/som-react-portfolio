import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadImg1 from '../components/HeadImg1';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
    <Navbar />
    <HeadImg1 heading="Get in Touch" text="Connecting for creativity. Let's cook some ideas!"/>
    <ContactForm />
    <Footer />
  </div>
  )
}

export default Contact