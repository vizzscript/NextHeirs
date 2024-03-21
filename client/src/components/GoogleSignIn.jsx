import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const responseGoogle = (response) => {
  console.log(response);
  const responseGoogle = (response) => {
    console.log(response);
    if (response.error) {
      // Handle error, e.g., display an error message to the user
      console.error('Google Sign-In failed:', response.error);
    } else {
      // Send the response data to your server for authentication
      fetch('/your-authentication-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokenId: response.tokenId,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Handle authentication response from your server
          console.log('Authentication response from server:', data);
          if (data.success) {
            // Authentication successful, perform necessary actions (e.g., redirect)
            // window.location.href = '/dashboard';
          } else {
            // Authentication failed, handle accordingly (e.g., display error message)
          }
        })
        .catch((error) => {
          // Handle fetch error, e.g., display an error message to the user
          console.error('Error sending data to server:', error);
        });
    }
  };
  
  // Handle response data, e.g., send it to your server for authentication
};

const GoogleSignInButton = () => {
  return (
    <GoogleOAuthProvider clientId='401397989588-f4k89pqufub0af2m3l3cmnuqbbddka37.apps.googleusercontent.com'>
      <GoogleLogin
      buttonText="Sign in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    </GoogleOAuthProvider>
    
  );
};

export default GoogleSignInButton;
