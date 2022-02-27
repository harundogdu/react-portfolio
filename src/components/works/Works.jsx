import { Title } from 'components'
import React from 'react'
import './works.css'

const Works = () => {
    const works = [
        {
            id: 1,
            title: 'React Admin Dashboard',
            github: '',
            img: 'https://colorlib.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/reactjs-dashboard-templates.jpg',
            live: 'https://reactjs.org/',
        },
        {
            id: 2,
            title: 'React Admin Dashboard & CRUD',
            github: '',
            img: 'https://colorlib.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/easydev-react-dashboard-template.jpg.webp',
            live: 'https://redux.js.org/',
        },
        {
            id: 3,
            title: 'React Web App',
            github: '',
            img: 'https://www.creative-tim.com/blog/content/images/wordpress/2019/07/opt_pk_react_thumbnail.jpg',
            live: 'https://nodejs.org/en/',
        },
        {
            id: 4,
            title: 'React / React Native Apps',
            github: '',
            img: 'https://i.pinimg.com/originals/fa/cc/cd/facccd21116de70eafffd5332c141b42.jpg',
            live: 'https://expressjs.com/',
        },
        {
            id: 5,
            title: 'Next.js Full Stack Web App',
            github: '',
            img: 'https://madewithreact.com/content/images/2019/03/opt_blk_react_thumbnail.jpg',
            live: 'https://www.mongodb.com/',
        }

    ]
    return (
        <section id='works'>
            <Title title='Portfolio' text="My Recent Work" />
            <div className='works-container'>
                {
                    works.map(work => {
                        return (
                            <div className='work-item' key={work.id}>
                                <div className='work-img'>
                                    <img src={work.img} alt={work.title} />
                                </div>
                                <div className='work-info'>
                                    <h3>{work.title}</h3>
                                    <p>
                                        <a
                                            href={work.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-sm '
                                        >
                                            Github
                                        </a>
                                        <a
                                            href={work.live}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn btn-sm btn-primary'
                                        >
                                            Live
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Works