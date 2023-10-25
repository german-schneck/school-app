# School Management App
This is a mobile application built using React Native that serves as a school management tool. It provides features for classroom management and student handling. The application is written in TypeScript and utilizes Redux and Redux-Sagas for state management and asynchronous actions.

## Features

### Classroom Management
- **Classroom List:** View a list of all available classrooms.
- **Classroom Details:** Get detailed information for each classroom, including its name, capacity, and enrolled students.
- **Create Classroom:** Add new classrooms by providing a name and capacity.
- **Delete Classroom:** Remove classrooms from the system to manage classroom resources.
- **Add/Remove Students:** Manage student enrollment by adding or removing students from each classroom.

### Student Management
- **Student List:** See a comprehensive list of all registered students.
- **Add New Student:** Add new students to the school's database.
- **Delete Student:** Delete individual student records for accurate student management.

## Getting Started
To get started with this project, follow these steps:

#### 1. Clone the repository to your local machine:

``git clone git@github.com:german-schneck/school-app.git``

#### 2. Install the necessary dependencies:

``yarn``

#### 3. Run the app
##### Android
   ``yarn android``

##### iOS
   ``yarn ios``

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the application source code.
- `navigator/`: Contains the navigation components and logic for the application.
- `screens/`: Defines the screens for classroom management and student management.
- `shared/`: Contains shared components or utilities used throughout the application.
- `store/`: Manages the application state with Redux and Redux-Sagas, including actions, reducers, selectors, types and sagas.

## Multimedia
https://github.com/german-schneck/school-app/assets/15254932/1064364f-ecd8-4546-8ec7-b05e2b382eb1

https://github.com/german-schneck/school-app/assets/15254932/2068e8d1-4344-456b-b1b3-214b0f36b991

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure the code passes linting and testing.
4. Submit a pull request for review.

## Feedback and Support
If you have any questions, feedback, or encounter issues, please open a GitHub issue in this repository, and we will address them as soon as possible.
