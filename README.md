# MERN Authentication Backend 🚀

## Project Overview
This project showcases a robust authentication system built with **MongoDB**, **Express.js**, and **Node.js** (MERN Stack). It includes features for **user registration**, **login**, **JWT-based authentication**, and **cookie handling**, ensuring a scalable and secure authentication solution. The backend is designed to be easily extendable and adaptable for various applications requiring secure user management.

Created with by [ItzNero](https://github.com/neroIJN).

---

## Features

- **User Registration**: Users can sign up with their email and password.
- **JWT Authentication**: Secure user login and session management using **JSON Web Tokens**.
- **Cookie Handling**: Cookies are used to maintain session after successful login.
- **Password Hashing**: Passwords are hashed using **bcryptjs** for enhanced security.
- **Token Expiry**: JWT tokens have an expiration time to improve security.
- **Error Handling**: Custom error messages for registration and login failure.
- **Scalability**: Easily extendable for adding more routes or integrating with a frontend.

---

## Technologies Used

- **MongoDB**: NoSQL database for storing user data securely.
- **Express.js**: Backend framework for building the REST API.
- **Node.js**: JavaScript runtime for building the server.
- **JWT (JSON Web Tokens)**: Used for user authentication.
- **bcryptjs**: Used to hash passwords for secure storage.
- **dotenv**: For environment variable management (e.g., database URL, JWT secret).
- **cors**: To handle cross-origin requests, making the API accessible to frontend applications.

---

## Setup Instructions

### Prerequisites

1. **Node.js** - [Install Node.js](https://nodejs.org/en/download/)
2. **MongoDB** - [Install MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud database like MongoDB Atlas).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/neroIJN/MERN-Authentication.git
    ```

2. Navigate to the project folder:

    ```bash
    cd MERN-Authentication
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    MONGO_URI=your_mongo_database_uri
    JWT_SECRET=your_jwt_secret_key
    JWT_EXPIRES_IN=1h  # Customize as needed
    ```

    Replace `your_mongo_database_uri` and `your_jwt_secret_key` with your actual database URI and JWT secret key.

5. Start the server:

    ```bash
    npm start
    ```

    The server will be running at `http://localhost:5000` (or the port you have configured).

---

## API Endpoints

### 1. **POST /register**
   - **Description**: Register a new user.
   - **Body**: 
     ```json
     {
       "name": "User Name",
       "email": "user@example.com",
       "password": "password123"
     }
     ```
   - **Success Response**:
     - Status: `201 Created`
     - Body: 
       ```json
       {
         "message": "User registered successfully"
       }
       ```

### 2. **POST /login**
   - **Description**: Login an existing user.
   - **Body**:
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```
   - **Success Response**:
     - Status: `200 OK`
     - Body: 
       ```json
       {
         "token": "JWT_TOKEN",
         "user": {
           "id": "userId",
           "name": "User Name",
           "email": "user@example.com"
         }
       }
       ```

### 3. **GET /me**
   - **Description**: Get the logged-in user's profile information (requires token).
   - **Headers**:
     - `Authorization`: `Bearer JWT_TOKEN`
   - **Success Response**:
     - Status: `200 OK`
     - Body: 
       ```json
       {
         "id": "userId",
         "name": "User Name",
         "email": "user@example.com"
       }
       ```

---

## Contributing

We welcome contributions from the open-source community. If you'd like to contribute, please fork the repository and create a pull request. All contributions must be discussed first through an issue.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **MERN Stack**: MongoDB, Express.js, React, and Node.js.
- **JWT**: For handling secure authentication tokens.
- **bcryptjs**: For securing passwords.

---

## Contact

For any questions or feedback, feel free to reach out to the project creator:

- GitHub: [ItzNero](https://github.com/neroIJN)
- Email: [itznero@example.com](mailto:itznero@example.com)

---
