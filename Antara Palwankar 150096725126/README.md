# 💇‍♀️ Salon Management API

live Deploy link: https://antara-assignment-4-salon-management-api-2gga.onrender.com

A RESTful backend API developed using **Node.js, Express.js, and Supabase** to manage salon information, salon services, and user authentication.

---

## 🚀 Features

- **User Authentication:** Allows users to register and log in securely using JWT authentication and bcrypt.
- **Salon Management:** Provides APIs to create, view, update, and delete salon information.
- **Service Management:** Supports adding and managing different salon services along with their price, duration, and availability.
- **Database Integration:** Uses **Supabase PostgreSQL** to store and manage users, salons, and services.

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** Supabase (PostgreSQL)
- **Authentication:** JWT, bcryptjs

---

## 📸 Database Previews

The project uses Supabase to store the application data in different tables.

### 1. Users Table

Add the screenshot of the **Users** table here.

### 2. Salons Table

Add the screenshot of the **Salons** table here.

### 3. Services Table

Add the screenshot of the **Services** table here.

---

## 📝 API Endpoints

### 🔐 Authentication APIs

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| `POST` | `/register` | Creates a new user account | ❌ No |
| `POST` | `/login` | Logs in the user and returns a JWT token | ❌ No |

### 🏢 Salon APIs

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| `GET` | `/salons` | Displays all salons | ❌ No |
| `GET` | `/salons/:id` | Displays a particular salon | ❌ No |
| `GET` | `/salons/top` | Displays the top 5 salons according to rating | ❌ No |
| `GET` | `/salons/city/:city` | Finds salons available in a particular city | ❌ No |
| `POST` | `/salons` | Adds a new salon | ✅ Bearer Token |
| `PUT` | `/salons/:id` | Updates existing salon information | ✅ Bearer Token |
| `DELETE` | `/salons/:id` | Removes a salon | ✅ Bearer Token |

### ✂️ Service APIs

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| `GET` | `/salons/:id/services` | Shows all services of a salon | ❌ No |
| `GET` | `/services/available` | Shows currently available services | ❌ No |
| `POST` | `/salons/:id/services` | Adds a service to a salon | ✅ Bearer Token |
| `PUT` | `/services/:id` | Modifies service information | ✅ Bearer Token |
| `DELETE` | `/services/:id` | Deletes a service | ✅ Bearer Token |

---

## 💻 Running the Project Locally

1. Clone the repository.

2. Open the project folder in the terminal.

3. Install all required packages:

```bash
npm install
