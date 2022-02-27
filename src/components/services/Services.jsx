import React from 'react'
import './services.css'
import { AiOutlineCheck } from 'react-icons/ai'
import { Title } from 'components'

const Services = () => {
    const services = [
        {
            title: "UI/UX Design",
            items: [
                {
                    id: 1,
                    title: "Wireframing",

                },
                {
                    id: 2,
                    title: "Prototyping",
                },
                {
                    id: 3,
                    title: "User Testing",
                },
                {
                    id: 4,
                    title: "Usability Testing",
                },
                {
                    id: 5,
                    title: "User Research",
                },
            ]
        },
        {
            title: 'Web Development',
            items: [
                {
                    id: 2,
                    title: "Web Design",
                },
                {
                    id: 3,
                    title: "Web Hosting",
                },
                {
                    id: 4,
                    title: "Web Maintenance",
                },
                {
                    id: 5,
                    title: "Web Security",
                },
                {
                    id: 6,
                    title: "Web Analytics",
                },
                {
                    id: 8,
                    title: "Web Applications",
                }
            ]
        },
        {
            title: 'Mobile Development',
            items: [
                {
                    id: 2,
                    title: "Mobile Design",
                },
                {
                    id: 3,
                    title: "Mobile Hosting",
                },
                {
                    id: 4,
                    title: "Mobile Maintenance",
                },
                {
                    id: 5,
                    title: "Mobile Security",
                }
            ]
        },
        {
            title: 'Digital Marketing',
            items: [
                {
                    id: 2,
                    title: "SEO",
                },
                {
                    id: 3,
                    title: "Social Media",
                },
                {
                    id: 4,
                    title: "Email Marketing",
                },
                {
                    id: 5,
                    title: "Content Marketing",
                },
                {
                    id: 6,
                    title: "Analytics",
                }
            ]

        }
    ]
    return (
        <section id='services'>
            <Title title='Services' text="What I Offer" />
            <div className='container'>
                {
                    services.map(service => {
                        return (
                            <div className='service-item' key={service.title}>
                                <h2 className='service-title'>{service.title}</h2>
                                <div className='service-items'>
                                    {
                                        service.items.map(item => {
                                            return (
                                                <div className='service-item-item' key={item.id}>
                                                    <AiOutlineCheck />
                                                    <h3 className='service-item-title'>{item.title}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services