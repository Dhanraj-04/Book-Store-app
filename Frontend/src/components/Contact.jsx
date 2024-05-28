import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';

const Contact = () => {
      
   
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <>
          <div>
            <Navbar/>
          </div>
            <div className='flex h-screen items-center justify-center  dark:bg-slate-800 dark:text-white'>
                <div  className='w-[600px] '>
                    <div className="modal-box  dark:bg-slate-800 dark:text-white">
                        <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                       
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <div className='mt-3 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input type="text" placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-800 dark:text-white'
                            {...register("name", { required: true })} />
                             <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-800 dark:text-white' 
                            {...register("email", { required: true })}/>
                             <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Message</span>
                            <br />
                            <input type="message" placeholder='Type your message' className='w-80 h-40 px-3 border rounded-md outline-none text-start  dark:bg-slate-800 dark:text-white' 
                            {...register("message", { required: true })}/>
                             <br />
                            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-3'>
                            <button type='submit' className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Submit</button>
                    
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Contact