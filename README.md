# Student Submission Form

A web-based application that allows students to submit their details seamlessly. This project is built using **Node.js**, **Express**, **MongoDB**, **HTML**, and **CSS**.

## Features

- **Student Data Submission**: Students can submit their personal information through a user-friendly form.
- **Form Validation**: Ensures that all required fields are filled out correctly before submission.
- **Database Integration**: Stores submitted data securely in a MongoDB database.
- **Responsive Design**: Accessible on various devices with a responsive UI.

## Tech Stack

- **Backend**: Node.js with Express framework
- **Database**: MongoDB
- **Frontend**: HTML and CSS

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Akhileswar6/Student-Project.git
   cd Student-Project
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     ```
   - Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

4. **Start the MongoDB Server**:
   Ensure your MongoDB server is running. If installed locally, you can start it with:
   ```bash
   mongod
   ```

5. **Start the Application**:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

## Project Structure

```
Student-Project/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── scripts.js
├── views/
│   └── index.html
├── routes/
│   └── index.js
├── models/
│   └── Student.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

- `public/`: Contains static assets like CSS and JavaScript files.
- `views/`: Contains HTML templates.
- `routes/`: Defines application routes.
- `models/`: Contains Mongoose models for MongoDB.
- `.env`: Environment variables.
- `.gitignore`: Specifies files to be ignored by Git.
- `package.json`: Project metadata and dependencies.
- `server.js`: Main server file.

## Usage

1. Navigate to `http://localhost:3000` in your browser.
2. Fill out the student submission form.
3. Submit the form to have your data stored in the MongoDB database.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Commit your changes: `git commit -m 'Add feature'`.
5. Push to the branch: `git push origin feature-name`.
6. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

