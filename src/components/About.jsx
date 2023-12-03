import React from 'react';

const About = () => {
    return (
        <div
            name='about'
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>

                <p className='text-xl mt-20'>
                    Welcome to my digital space! I am a passionate and
                    innovative software developer with expertise in MERN stack
                    web development and data science. Over the course of my
                    academic journey, I have cultivated a robust skill set in
                    MongoDB, Express.js, React.js, and Node.js, forming the
                    backbone of my proficiency in creating dynamic and scalable
                    web applications.
                </p>

                <br />

                <p className='text-xl'>
                    My fascination with data science has equipped me with the
                    ability to extract valuable insights from complex datasets,
                    adding a layer of depth to my technical capabilities. I am
                    particularly drawn to the ever-evolving landscape of
                    technology and have a keen interest in utilizing
                    cutting-edge tools such as React, Tailwind, Next.js, and
                    GraphQL to build responsive and aesthetically pleasing web
                    applications.
                </p>
                <p className='text-xl mt-5'>
                    What sets me apart is not just my technical acumen, but also
                    my dedication to crafting solutions that seamlessly blend
                    functionality with a stellar user experience. I thrive in
                    collaborative environments, bringing a proactive and
                    adaptable approach to problem-solving.
                </p>
            </div>
        </div>
    );
};

export default About;
