import React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as firebase from '../firebase';
import '../firebase';

const Registration = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = async () => {
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
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='backdrop-blur-sm bg-white/30 text-black p-8 rounded-lg shadow-lg'>
        <h1 className='font-bold uppercase text-2xl mb-4'>Register Here</h1>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <br />
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <br />
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" onClick={handleRegister} className='w-full mt-4'>
            Register
          </Button>
        </Form>

        <Button variant="secondary" onClick={handleGoogleLogin} className='w-full mt-4'>
          Register with Google
        </Button>
      </div>
    </div>
  );
};

export default Registration;