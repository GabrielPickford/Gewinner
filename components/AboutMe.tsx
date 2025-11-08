import React from 'react'
import Brandcard from './Brandcard'

const AboutMe = () => {
    return (
        <section className='w-full h-auto grid grid-cols-2 pb-4'>
            <Brandcard
                image="/assets/logoVulcan.jpg"
                color="bg-secondary"
            />
            <Brandcard
                image="/assets/logoHyundai.jpg"
                color="bg-tertiary"
            />
        </section>
    )
}

export default AboutMe