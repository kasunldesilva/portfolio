import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard
                    iconUrl="./assets/images/gmail.png"
                    text={
                        <a href="mailto:kasunlakmal9821@gmail.com" target="_blank" rel="noopener noreferrer">
                            kasunlakmal9821@gmail.com
                        </a>
                    }
                />

                <ContactInfoCard
                    iconUrl="./assets/images/github.png"
                    text={
                        <a href="https://www.linkedin.com/in/kasun-lakmal-de-silva" target="_blank" rel="noopener noreferrer">
                            www.linkedin.com/in/kasun-lakmal-de-silva
                        </a>
                    }
                />
                <div>
                <h2>Phone number : <p>0776654177</p></h2>
               
            </div>
            </div>
            
            <div style={{flex: 1}}>
                <ContactForm/>
            </div>
        </div>

    </section>
  )
}

export default ContactMe
