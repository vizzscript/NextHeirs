import React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as firebase from '../firebase';
import '../firebase';
import { GrInherit } from 'react-icons/gr';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered:', userCredential.user);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const userCredential = await firebase.auth().signInWithPopup(provider);
      console.log('User logged in with Google:', userCredential.user);
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-t from-green-950 via-green-600 to-green-400'>
      <a href="#" className="flex items-center mb-6 text-5xl font-bold text-gray-900 dark:text-black">
        <GrInherit className="w-11 h-10 mr-2 mt-2"/>
          NextHeirs   
      </a>
      <div className="w-sm bg-white rounded-lg shadow dark:border md:mt-0 md:w-1/3 xl:p-0 backdrop-blur-sm bg-white/25">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <Form className='space-y-4 md:space-y-4'>
          <Form.Group controlId="formEmail" className='space-y-2'>
            <Form.Label className="text-xl font-semibold dark:text-black">Email</Form.Label>
            <br />
            <Form.Control type="email" className="bg-green-200 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:border-green-200 dark:text-black" placeholder="name@mail.com" onChange={(e) => setEmail(e.target.value)} required=""/>
          </Form.Group>
          
          <Form.Group controlId="formPassword" className='space-y-2'>
            <Form.Label className="text-xl font-semibold  dark:text-black">Password</Form.Label>
            <br />
            <Form.Control type="password" placeholder="••••••••" className="bg-green-200 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:border-green-200 dark:text-black" onChange={(e) => setPassword(e.target.value)} required=""/>
          </Form.Group>


          <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <Form.Group controlId='checkbox'>
                          <Form.Control type='checkbox' className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                        </Form.Group>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium 
                        dark:text-green-950
                        hover:underline " href="#">Terms and Conditions</a></label>
                      </div>
                  </div>

          <Button variant="primary" onClick={handleLogin} className="w-full text-black font-semibold rounded-lg text-xl px-5 py-2.5 text-center dark:bg-green-700">
            Login
          </Button>
          
        </Form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;