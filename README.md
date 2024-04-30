# Tech Blog CMS

Tech Blog CMS is a content management system (CMS) built using the Model-View-Controller (MVC) paradigm. It allows developers to publish articles, blog posts, and their thoughts and opinions on various tech topics.

## Features

- User authentication: Sign up, log in, and log out functionality.
- Create, read, update, and delete (CRUD) operations for blog posts.
- Commenting system for users to interact with blog posts.
- Dashboard for managing user's own blog posts.
- Session management to handle user authentication and authorization.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- Handlebars.js
- Express Session
- Connect Session Sequelize
- Bcrypt

## Getting Started

1. Clone the repository:

```
git clone <repository-url>
```

2. Install dependencies:

```
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=3000
SESSION_SECRET=your_session_secret
DATABASE_URL=your_database_url
```

4. Run the application:

```
npm start
```

5. Visit `http://localhost:3000` in your web browser to access the Tech Blog CMS.

## Folder Structure

The project follows the MVC (Model-View-Controller) architectural pattern:

- `models/`: Contains Sequelize models for database schema.
- `views/`: Contains Handlebars.js templates for views.
- `controllers/`: Contains controller functions for handling routes and logic.
- `routes/`: Contains Express routes for API and HTML endpoints.
- `public/`: Contains static files such as CSS and client-side JavaScript.
- `db/`: Optionally contains database schema files (e.g., schema.sql, init.sql).

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
