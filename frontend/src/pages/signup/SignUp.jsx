import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
   const [inputs,setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
   });

   const {loading, signup} = useSignup()

   const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
   }

   const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
   };

  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-purple-600 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up
            <span className='text-purple-400'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-black'>Full Name</span>
                </label>
                <input type='text' placeholder='Thisarani Aloka' className='w-full input input-bordered h-10' value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName:e.target.value})}/>
            </div>
            <div>
            <label className='label p-2'>
                    <span className='text-base label-text text-black'>Username</span>
                </label>
                <input type='text' placeholder='ThisaraniAloka' className='w-full input input-bordered h-10' value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
            </div>
            <div>
                <label className='label'>
                    <span className='text-base label-text text-black mb-2'>Password</span>
                </label>
                <input
                type='password'
                placeholder='Enter Password'
                className='w-full input input-bordered h-10'
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
                />
            </div>
            <div>
                <label className='label'>
                    <span className='text-base label-text text-black mb-2'>Confirm Password</span>
                </label>
                <input
                type='password'
                placeholder='Confirm Password'
                className='w-full input input-bordered h-10 mb-3'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                />
            </div>

            <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} className='mt-4'/> 

            <Link to={"/login"} className='text-sm hover:underline hover:text-pink-950 mt-2 inline-block text-black' href='#'>
                Already have an account?
            </Link>

            <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
			</button>
            </div>
        </form>
    </div>
  </div>
}

export default SignUp;



/*import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-purple-600 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up
            <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input type='text' placeholder='Thisarani Aloka' className='w-full input input-bordered h-10' />
            </div>
            <div>
            <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type='text' placeholder='ThisaraniAloka' className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input
                type='password'
                placeholder='Enter Password'
                className='w-full input input-bordered h-10'/>
            </div>
            <div>
                <label className='label'>
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input
                type='password'
                placeholder='Confirm Password'
                className='w-full input input-bordered h-10'/>
            </div>
            <GenderCheckbox /> 

            <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
                Already have an account?
            </a>

            <div>
                <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
            </div>
        </form>
    </div>
  </div>
}

export default SignUp;*/