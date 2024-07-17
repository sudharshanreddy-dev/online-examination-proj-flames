# Project Setup

This guide will help you set up and run the project using Visual Studio Code (VS Code). It includes instructions for starting both the frontend and backend services, and setting up the MongoDB database.

## Prerequisites

Ensure you have the following installed:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)

## Setup Instructions

1. **Open the Project in VS Code**

   - Open Visual Studio Code.
   - Open your project folder by selecting `File` > `Open Folder...` and choosing the project directory.

2. **Open Two Terminals**

   - Open the terminal in VS Code by selecting `Terminal` > `New Terminal` from the top menu.
   - You will need two terminals. You can open another terminal by clicking on the `+` icon in the terminal panel or by using the keyboard shortcut ``Ctrl+Shift+` ``.

3. **Navigate to the Frontend Directory**

   - In the first terminal, navigate to the frontend directory:
     ```bash
     cd frontend
     ```

4. **Start the Frontend**

   - Run the following command to start the frontend development server:
     ```bash
     npm run dev
     ```

5. **Navigate to the Backend Directory**

   - In the second terminal, navigate to the backend directory:
     ```bash
     cd backend
     ```

6. **Start the Backend**

   - Run the following command to start the backend server:
     ```bash
     npm start
     ```

7. **Set Up MongoDB Compass**

   - Open MongoDB Compass.
   - Connect to your MongoDB instance.

8. **Create a Database and Collection**

   - Create a new database named `user-cred`.
   - Within the `user-cred` database, create a collection named `cse`.

9. **Import Data**

   - Import the `user-cread.cse.json` file into the `cse` collection:
     - Click on the `Collection` tab for `cse`.
     - Select the `Import Data` button.
     - Choose `JSON` format and upload the `user-cread.cse.json` file.

## Additional Information

- Ensure that both the frontend and backend services are running for the application to function properly.
- Check the respective terminal output for any errors or issues during the startup.

For further assistance, refer to the project's documentation or contact the development team.
