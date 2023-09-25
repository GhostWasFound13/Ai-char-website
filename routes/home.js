// routes/home.js
module.exports = function (app) {
  // Define a route for the home page
  app.get('/', (req, res) => {
    const userMessage = req.query.message; // Assuming user messages are sent via query parameter

    if (userMessage) {
      // Handle user message and AI response here if needed

      // Render the 'home.ejs' template with data
      res.render('home', { userMessage, aiResponse });
    } else {
      // If there's no user message, simply render the 'home.ejs' template
      res.render('home');
    }
  });

  // Define other routes for the home section if needed
};
