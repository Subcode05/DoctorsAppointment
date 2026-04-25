# 🏥 MedConnect - Doctor Appointment Booking System

MedConnect is a comprehensive, full-stack health technology solution designed to bridge the gap between patients and healthcare providers. It provides a seamless platform for users to find doctors, book appointments, and manage their health schedules, while allowing doctors and administrators to efficiently manage their practices.

---

## 🚀 Features

### For Patients (Users)
- **Secure Authentication**: Register and login with encrypted password protection.
- **Doctor Discovery**: Browse a curated list of verified medical professionals.
- **Instant Booking**: Check real-time availability and book appointments instantly.
- **Notification System**: Stay updated with real-time alerts for appointment approvals and status changes.
- **Appointment Tracking**: View and manage all past and upcoming medical consultations.
- **Apply as Doctor**: Simplified workflow for medical professionals to join the platform.

### For Doctors
- **Professional Profiles**: Manage clinical information, specialization, experience, and consultation fees.
- **Schedule Management**: Set and update daily availability and consultation hours.
- **Appointment Control**: Review, approve, or reject appointment requests from patients.
- **Patient Overview**: Access a dashboard of all scheduled consultations.

### For Administrators
- **User Management**: Overview and control of all registered patients on the platform.
- **Doctor Verification**: Review and approve doctor applications to ensure platform quality.
- **System Dashboard**: Monitor platform activity and manage professional listings.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**: Modern UI development with a component-based architecture.
- **Redux Toolkit**: Centralized state management for a smooth user experience.
- **Ant Design (antd)**: A premium UI library for high-quality, responsive design.
- **React Router**: Seamless client-side navigation.
- **Axios**: Efficient API communication with the backend.
- **React Hot Toast**: Real-time interactive notifications.

### Backend
- **Node.js & Express**: High-performance, scalable server-side environment.
- **MongoDB & Mongoose**: Flexible NoSQL database for efficient data modeling.
- **JSON Web Token (JWT)**: Secure, stateless authentication system.
- **Bcrypt.js**: Industry-standard password hashing and security.

---

## ⚙️ Architecture & Workflow

1.  **Authentication Layer**: Uses JWT stored in local storage to secure routes. `ProtectedRoute` and `PublicRoute` components ensure only authorized users access specific features.
2.  **State Management**: Redux Toolkit manages global states like user data and loading indicators, ensuring data consistency across the app.
3.  **API Gateway**: A clean Express-based REST API structure with separated routes for Users, Doctors, and Admins.
4.  **Database Design**:
    *   **User Model**: Stores basic credentials and role-based permissions (isDoctor, isAdmin).
    *   **Doctor Model**: Extends user data with professional details and status.
    *   **Appointment Model**: Links patients and doctors with time-slots and status tracking.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account or local MongoDB instance

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Backend Setup**
   - Navigate to the root directory
   - Install dependencies: `npm install`
   - Create a `.env` file and add:
     ```env
     MONGO_URL = your_mongodb_connection_string
     JWT_SECRET = your_jwt_secret
     ```
   - Start the server: `npm start` (uses nodemon)

3. **Frontend Setup**
   - Navigate to the `client` directory
   - Install dependencies: `npm install`
   - Start the React app: `npm start`

---

## 👨‍💻 Development

The project is structured for scalability:
- `/models`: Database schemas.
- `/routes`: API endpoints.
- `/middlewares`: Authentication and validation logic.
- `/client/src/Pages`: Individual page components.
- `/client/src/components`: Reusable UI elements and Layouts.

---

## 📜 License

This project is licensed under the ISC License.
