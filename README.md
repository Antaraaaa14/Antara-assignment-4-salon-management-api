# 💇‍♀️ Salon Management API

A robust RESTful API built with **Node.js**, **Express**, and **Supabase** for managing salons, services, and user authentication.

---

## 🚀 Features
- **User Authentication**: Secure user registration and login using JWT & bcrypt.
- **Salon Management**: Add, update, view, and delete salons.
- **Service Management**: Salons can have multiple services with pricing, duration, and availability tracking.
- **Database**: Fully integrated with **Supabase** (PostgreSQL) for seamless data storage.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** Supabase (PostgreSQL)
- **Authentication:** JSON Web Tokens (JWT), bcryptjs

---

## 📸 Database Previews (Supabase)

*(Below are screenshots of the Supabase tables holding our data)*

### 1. Users Table
> Add your screenshot for Users here!
<!-- ![Users Table Screenshot](./docs/users.png) -->

### 2. Salons Table
> Add your screenshot for Salons here!
<!-- ![Salons Table Screenshot](./docs/salons.png) -->

### 3. Services Table
> Add your screenshot for Services here!
<!-- ![Services Table Screenshot](./docs/services.png) -->

---

## 📝 API Endpoints

### 🔐 Authentication Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/register` | Register a new user | ❌ No |
| `POST` | `/login`    | Login to get JWT Token| ❌ No |

### 🏢 Salon Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET`  | `/salons` | Get all salons | ❌ No |
| `GET`  | `/salons/:id` | Get a salon by ID | ❌ No |
| `GET`  | `/salons/top` | Get top 5 salons by rating | ❌ No |
| `GET`  | `/salons/city/:city` | Get salons in a specific city | ❌ No |
| `POST` | `/salons` | Create a new salon | ✅ Yes (Bearer Token) |
| `PUT`  | `/salons/:id` | Update salon details | ✅ Yes (Bearer Token) |
| `DELETE`| `/salons/:id` | Delete a salon | ✅ Yes (Bearer Token) |

### ✂️ Service Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET`  | `/salons/:id/services` | Get all services for a salon | ❌ No |
| `GET`  | `/services/available` | Get all currently available services | ❌ No |
| `POST` | `/salons/:id/services` | Add a new service to a salon | ✅ Yes (Bearer Token) |
| `PUT`  | `/services/:id` | Update a service | ✅ Yes (Bearer Token) |
| `DELETE`| `/services/:id` | Delete a service | ✅ Yes (Bearer Token) |

---

## 💻 Local Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=3000
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_key
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server using `node server.js` (or `npm run dev` if you add nodemon).
5. The API will be available at `http://localhost:3000`.

---
