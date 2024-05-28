import React from 'react'
import Books from '../assets/Books.jpg'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold '>Hello,welcome here to learn something <span className='text-blue-500'>new everyday</span></h1>
                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo tempora atque id, accusamus dolorem laborum repellat, consectetur magni aliquam natus quae eligendi velit vitae, modi vel accusantium. Ipsum, reiciendis?
                        </p>
                        
                    </div>

                </div>

                <div className=' order-1 w-full md:w-1/2  md:mt-32 mt-10 '>
                   <img src={Books} className='w-85 h-85' alt="" />
                </div>
            </div>

        </>
    )
}

export default Banner