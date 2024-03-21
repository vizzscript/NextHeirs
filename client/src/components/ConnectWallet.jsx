import React, { useState } from 'react';

function ConnectWallet() {
    const [walletAddress, setWalletAddress] = useState(null);

    // Function to handle wallet connection
    async function connectWallet() {
        // Check if MetaMask is installed
        if (window.ethereum) {
            try {
                // Request access to the user's MetaMask accounts
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                // Set the connected wallet address to state
                setWalletAddress(accounts[0]);
                // You can now use 'accounts[0]' to interact with the connected wallet
            } catch (error) {
                // Handle error if user denies permission or MetaMask is not available
                console.error('Error connecting wallet:', error);
            }
        } else {
            // If MetaMask is not installed, prompt the user to install it
            alert('Please install MetaMask to connect your wallet.');
        }
    }

    return (
        <div className='flex space-x-2 justify-center'>
            <button
                type='button'
                onClick={connectWallet}
                className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700'
            >
                {walletAddress ? `Connected: ${walletAddress}` : 'Connect Wallet'}
            </button>
        </div>
    );
}

export default ConnectWallet;
