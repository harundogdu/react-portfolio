import React from 'react'
import './about.css'
import { Button, Title } from 'components'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineProject } from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <Title text="Get To Know" title="About Me" />
            <div className='about-content'>
                <div className='about-image'>
                    <img src={require('../../assets/me.png')} alt="Harun Doğdu" />
                </div>
                <div className='about-container'>

                    <div className="content-container">

                        <div className="content-box">
                            <FaAward />
                            <h3>Experience</h3>
                            <p>
                               3+ years of experience in web development.
                            </p>
                        </div>

                        <div className="content-box">
                            <FiUsers />
                            <h3>Clients</h3>
                            <p>
                                300+ clients.
                            </p>
                        </div>

                        <div className="content-box">
                            <AiOutlineProject />
                            <h3>Projects</h3>
                            <p>
                                100+ projects.
                            </p>
                        </div>

                    </div>

                    <p className='text'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dignissimos reiciendis similique inventore, eaque at praesentium molestias nihil modi, quam delectus corrupti laudantium. Reprehenderit fugiat ex maiores, nulla natus cumque voluptates non sit impedit minima quasi, architecto iure amet quas expedita. Dolores expedita necessitatibus labore earum ex voluptates facilis nostrum?
                    </p>

                    <Button text="Let's Talk" position="left" />
                </div>
            </div>
        </section>
    )
}

export default About