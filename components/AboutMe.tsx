import React from 'react'
import Brandcard from './Brandcard'

const AboutMe = () => {
    return (
        <section className='w-full h-auto pb-10 grid grid-cols-1 md:grid-cols-2 '>
            <Brandcard
                image="/assets/vulcanLogo.jpg"
                color="bg-secondary"
            />
            <Brandcard
                image="/assets/hyundaiLogo.jpg"
                color="bg-tertiary"
            />
        </section>
    )
}

export default AboutMe