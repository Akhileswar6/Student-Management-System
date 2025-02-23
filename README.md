# Student Management System

This is a **Student Management System** built using **Html**, **Css**, **Node.js**, **Express.js**, and **MongoDB**. It allows users to submit student details through a form, which are then stored in a MongoDB database.

---

## Features

- **Form Submission**: Users can submit Student details, Including personal details, Past Academic details, and Family information.
- **Database Storage**: Data is stored in a MongoDB database in Cluster.
- **Image Support**: Users can provide image URLs for student photos.

---

## Screenshots

### Submission Form
![Submission Form](https://github.com/Akhileswar6/Student-Project/blob/bc53a96a8c93f9b1a009d0cafb82c90460ec36cd/images/Screenshot%202025-02-23%20120047.png)
![](https://github.com/Akhileswar6/Student-Project/blob/53418b286d317c01897c45a81413bb3d2e95e5fd/images/Screenshot%202025-02-23%20120203.png)
![](https://github.com/Akhileswar6/Student-Project/blob/5865e320af3375f070ff4e1713b9b1742a297db5/images/Screenshot%202025-02-23%20120236.png)
![](https://github.com/Akhileswar6/Student-Project/blob/be3e7cedd150f1dd20d8797e3af052b0024c2487/images/Screenshot%202025-02-23%20120352.png)

### Database-Stored Data
![Database Data](https://github.com/Akhileswar6/Student-Project/blob/6320c2d01a39af0f48751fb307d33c0a21d3bfee/images/Screenshot%202025-02-23%20120710.png)
![](https://github.com/Akhileswar6/Student-Project/blob/695f7eb8bf9a222cb9998bea204e1c4fa246a50b/images/Screenshot%202025-02-23%20120856.png)

---

## Technologies Used

- **Frontend**: HTML,CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB (or use MongoDB Atlas for cloud storage)



### 1. Clone the Repository

```bash
git clone https://github.com/Akhileswar6/Student-Management-System.git
cd Student-Management-System
```
### 2. Install Dependencies
Install the required dependencies using npm:

```bash
npm install
```

### 3.Set Up Environment Variables
Create a .env file in the root directory and add the following variables:

```bash
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```
Replace **username**, **password**, and **dbname** with your MongoDB Atlas credentials.

### 4.Start the Server
Run the server using the following command:

```bash
node server.js
```
The server will start on http://localhost:5000.

### Usage
- Open your browser and navigate to http://localhost:5000.
- Fill out the form with student details.
- Submit the form.
- The data will be saved to the MongoDB database.

### Contributing

- Fork the repository.
- Create a new branch (git checkout -b feature/YourFeatureName).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/YourFeatureName).
- Open a pull request.

### License
- This project is licensed under the MIT License.


### Contact

- For any queries, reach out to [your email or GitHub profile].









