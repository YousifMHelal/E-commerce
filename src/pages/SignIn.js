import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='container mx-auto max-w-[1370px] min-h-[100vh] flex justify-center items-center'>
            <div className='w-[480px] h-[500px] bg rounded-xl flex flex-col'>
                <div className='text-center mt-16'>
                    <p className='text-xl'>Welcome back!</p>
                    <h2 className='text-2xl font-bold tracking-wider'>Sign in to your account</h2>
                </div>
                <form className='mt-10 p-4 flex flex-col w-[80%] mx-auto'>
                    <label className='px-2'>Email</label>
                    <input
                        className='border-b-2 outline-none p-2'
                        type='email' />
                    <label className='mt-4 px-2'>Password</label>
                    <input
                        className='border-b-2 outline-none p-2'
                        type='password' />
                    <button className='uppercase pt-6 text-main text-2xl'>sign in</button>
                </form>
                <p className='text-center text-p'>Don't have an account ? <Link className='text-main' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default SignIn
