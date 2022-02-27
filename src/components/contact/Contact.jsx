import { Button, Title } from 'components'
import React from 'react'
import './contact.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'

const Contact = () => {
    const contact = [
        {
            icon: <AiOutlineMail />,
            title: 'Email',
            text: 'info@harundogdu.com',
            link: "mailto:info@harundogdu.com"
        },
        {
            icon: <AiOutlineWhatsApp />,
            title: 'WhatsApp',
            text: '+90 555 666 77 88',
            link: "https://wa.me/905556667788"
        },
        {
            icon: <RiMessengerLine />,
            title: 'Facebook',
            text: 'Harun Dogdu',
            link: "https://www.facebook.com/harundogdu"
        }
    ]
    return (
        <section id='contact'>
            <Title title='Contact Me' text="Get in Touch" />
            <div className="contact-container">
                <div className="contact-box-container">
                    {contact.map((item, index) => (
                        <div className="contact-box" key={index}>
                            {item.icon}
                            <div className="contact-box-title">{item.title}</div>
                            <div className="contact-box-text">{item.text}</div>
                            <a className='contact-box-link' href={item.link} target="_blank" rel="noopener noreferrer"> Send a message </a>
                        </div>
                    ))}
                </div>
                <div className="contact-form">
                    <form action="">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder='Your Full Name'
                                name="name"
                                id='name'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder='Your Email'
                                name="email"
                                id='email'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                placeholder='Your Message'
                                required
                            >
                            </textarea>
                        </div>
                        <Button text='Send Message' />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact