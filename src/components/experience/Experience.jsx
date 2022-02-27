import { Feature, Title } from 'components'
import React from 'react'
import './experience.css'

const Experience = () => {
    const experience = [
        {
            title: 'Front-End Developer',
            items: [
                {
                    id: 1,
                    title: 'HTML',
                    level: 'Advanced',
                },
                {
                    id: 2,
                    title: 'CSS',
                    level: 'Advanced',
                },
                {
                    id: 3,
                    title: 'JavaScript',
                    level: 'Advanced',
                },
                {
                    id: 4,
                    title: 'React',
                    level: 'Advanced',
                },
                {
                    id: 5,
                    title: 'Bootstrap',
                    level: 'Experienced',
                },
                {
                    id: 6,
                    title: 'Tailwind',
                    level: 'Experienced',
                },
                {
                    id: 7,
                    title: 'Git',
                    level: 'Experienced',
                },
                {
                    id: 8,
                    title: 'GitHub',
                    level: 'Experienced',
                }
            ]
        },
        {
            title: 'Back-End Developer',
            items: [
                {
                    id: 1,
                    title: 'Node.js',
                    level: 'Advanced',
                },
                {
                    id: 2,
                    title: 'Express',
                    level: 'Advanced',
                },
                {
                    id: 3,
                    title: 'MongoDB',
                    level: 'Advanced',
                },
                {
                    id: 4,
                    title: 'PHP',
                    level: 'Experienced',
                },
                {
                    id: 5,
                    title: 'MySQL',
                    level: 'Experienced',
                },
                {
                    id: 6,
                    title: 'Laravel',
                    level: 'Experienced',
                },
                {
                    id: 7,
                    title: 'WordPress',
                    level: 'Beginner',
                }
            ]
        }
    ];
    return (
        <section id='experience'>
            <Title title='My Experience' text="What Skills I Have" />
            <div className='experience-container'>
                {
                    experience.map(({ title, items }) => (
                        <div key={title} className='experience-item'>
                            <h2 className='experience-title'>{title}</h2>
                            <div className='experience-item-container'>
                                {
                                    items.map(({ id, title, level }) => (
                                        <Feature key={id} title={title} level={level} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Experience