import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { GrInherit } from 'react-icons/gr';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const navigateTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !isChecked) {
      setError('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');

    axios.post('http://localhost:3001/registration', { email, password, confirmPassword })
      .then(result => {
        console.log(result);
        navigateTo('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-t from-green-950 via-green-600 to-green-400'>
      <a href="#" className="flex items-center mb-6 text-5xl font-bold text-gray-900 dark:text-black">
        <GrInherit className="w-11 h-10 mr-2 mt-2"/>
        NextHeirs   
      </a>
      <div className="w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 md:w-1/4 xl:p-0 backdrop-blur-sm bg-white/25">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <Form className='space-y-4 md:space-y-4' onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className='space-y-2'>
              <Form.Label className="text-xl font-semibold dark:text-black">Email</Form.Label>
              <br />
              <Form.Control type="email" className="bg-green-200 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:border-green-200 dark:text-black" placeholder="name@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            
            <Form.Group controlId="formPassword" className='space-y-2'>
              <Form.Label className="text-xl font-semibold  dark:text-black">Password</Form.Label>
              <br />
              <Form.Control type="password" placeholder="••••••••" className="bg-green-200 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:border-green-200 dark:text-black" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>

            <div>
              <Form.Group controlId="confirmPassword" className='space-y-2'>
                <Form.Label className="text-xl font-semibold  dark:text-black">Confirm password</Form.Label>
                <br />
                <Form.Control type="password" placeholder="••••••••" className="bg-green-200 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:border-green-200 dark:text-black" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </Form.Group>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Form.Group controlId='checkbox'>
                  <Form.Control type='checkbox' className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" checked={isChecked} onChange={() => setIsChecked(!isChecked)} required />
                </Form.Group>
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium dark:text-green-950 hover:underline " href="#">Terms and Conditions</a></label>
              </div>
            </div>

            {error && <p className="text-sm font-bold text-red-900">{error}</p>}

            <Button variant="primary" type="submit" className="w-full text-black font-semibold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-green-700">
              Register
            </Button>
            
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <a href="/login" className="font-medium text-green-950 hover:underline ">Login here</a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
