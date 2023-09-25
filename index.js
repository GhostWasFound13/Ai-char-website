const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Specify the directory where your EJS templates are located (optional)
app.set('views', path.join(__dirname, 'views')); // Replace 'views' with your actual directory name

// Middleware for serving static files (like CSS, images, etc.)
app.use(express.static(__dirname + '/public')); // Replace 'public' with your actual directory name

// Routes
const homeRoutes = require('./routes/home');
// Import other route files as needed

// Use the route files
homeRoutes(app);
// Use other route files as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
