// controllers/userController.js

const bcrypt = require('bcrypt'); // for password hashing
const User = require('../models/user'); // User model

const UserController = {
  async register(req, res) {
    try {
      // Extract user input from request body
      const { username, email, password } = req.body;

      // Check if the email is already registered
      let existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user instance
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error in user registration:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  async login(req, res) {
    try {
      // Extract user input from request body
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Compare the password with the hashed password stored in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // If the password is valid, generate and return a JWT token
      // You can use libraries like jsonwebtoken for token generation

      return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Error in user login:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = UserController;
