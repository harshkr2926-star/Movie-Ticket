# 🎬 Movie Ticket Booking System

A full-stack **Movie Ticket Booking System** built with modern web technologies. The application provides a seamless platform for users to explore movies, view movie details, and book tickets through a responsive web interface.

The project follows a client-server architecture with a React-based frontend and an Express.js backend.

## 🚀 Live Demo

**Live Application:**
https://showtime-indol-beta.vercel.app/

**GitHub Repository:**
https://github.com/harshkr2926-star/Movie-Ticket

---

## ✨ Features

* 🎥 Browse and explore movies
* 🔎 View movie information and details
* 🎟️ Movie ticket booking functionality
* 🔐 User authentication and authorization
* 💳 Online payment integration
* 📧 Email-related functionality
* 🖼️ Cloud-based image/media management
* 📱 Responsive and modern user interface
* ⚡ Fast frontend powered by Vite
* 🔄 Client-server API communication
* 🗄️ MongoDB database integration

---

## 🛠️ Tech Stack

### Frontend

* **React.js** – Building the user interface
* **Vite** – Frontend build tool and development server
* **Tailwind CSS** – Styling and responsive UI
* **React Router** – Client-side routing
* **Axios** – API requests
* **Clerk** – Authentication
* **Lucide React** – Icons
* **React Hot Toast** – Notifications
* **React Player** – Video playback

The frontend dependencies and scripts are defined in the project's `client/package.json`.

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Clerk Express** – Authentication integration
* **Stripe** – Payment processing
* **Cloudinary** – Media/image management
* **Nodemailer** – Email services
* **Inngest** – Background/event-driven workflows
* **Axios**
* **CORS**
* **dotenv**

These dependencies are defined in `server/package.json`.

---

## 📁 Project Structure

```text
Movie-Ticket/
│
├── client/                 # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── server/                 # Express backend
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

The repository currently contains separate `client` and `server` applications.

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/harshkr2926-star/Movie-Ticket.git
```

Navigate into the project:

```bash
cd Movie-Ticket
```

---

### 2. Setup the Frontend

```bash
cd client
npm install
```

Create a `.env` file inside the `client` directory and add the required frontend environment variables.

Example:

```env
VITE_API_URL=your_backend_url
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Then start the development server:

```bash
npm run dev
```

The frontend uses Vite for development and production builds.

---

### 3. Setup the Backend

Open another terminal:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key

STRIPE_SECRET_KEY=your_stripe_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

SMTP_USER=your_email
SMTP_PASS=your_email_password
```

> **Note:** Use the exact environment variable names expected by your source code. Never commit `.env` files or secret API keys to GitHub.

Start the backend:

```bash
npm start
```

For development with Nodemon:

```bash
npm run server
```

The backend provides both `start` and `server` scripts in its package configuration.

---

## 🔐 Authentication

The application uses **Clerk** for authentication.

Clerk is integrated into both the frontend and backend, allowing authenticated users to securely access protected functionality.

Frontend:

```text
@clerk/react
```

Backend:

```text
@clerk/express
```

---

## 💳 Payments

The application integrates **Stripe** for payment processing.

The payment flow is handled through the backend to keep sensitive payment credentials secure.

> Never expose your Stripe secret key in frontend code.

---

## 🗄️ Database

The application uses **MongoDB** as its database with **Mongoose** for object modeling and database operations.

The backend connects to MongoDB using a connection string stored in an environment variable.

```env
MONGODB_URI=your_mongodb_connection_string
```

---

## ☁️ Cloudinary

**Cloudinary** is used for cloud-based media management.

This allows movie-related images and other media assets to be stored and served efficiently.

Required configuration includes:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📧 Email Services

The backend includes **Nodemailer**, which can be used for sending application-related emails such as booking confirmations and notifications.

Configuration should be stored securely in environment variables.

---

## 🔄 Background Workflows

The backend includes **Inngest**, which can be used for event-driven and background workflows.

This can help handle operations that should run independently from the main request-response cycle.

---

## 🧪 Running the Project Locally

You will typically need **two terminals**.

### Terminal 1 – Frontend

```bash
cd client
npm install
npm run dev
```

### Terminal 2 – Backend

```bash
cd server
npm install
npm start
```

After starting the applications, open the local frontend URL displayed by Vite in your browser.

---

## 📦 Production Build

To create a production build of the frontend:

```bash
cd client
npm run build
```

You can preview the production build locally using:

```bash
npm run preview
```

The available frontend scripts include `dev`, `build`, `lint`, and `preview`.

---

## 🌐 Deployment

The project is deployed online and can be accessed here:

**Live Demo:**
https://showtime-indol-beta.vercel.app/

The repository also references a deployed backend service:

**Backend:**
https://showtime-server-kohl.vercel.app/

The backend deployment reference is listed in the GitHub repository information.

---

## 🔒 Environment Variables

For security, environment variables should **never be committed to GitHub**.

Typical configuration includes:

| Variable                     | Purpose                       |
| ---------------------------- | ----------------------------- |
| `MONGODB_URI`                | MongoDB database connection   |
| `CLERK_SECRET_KEY`           | Clerk backend authentication  |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk frontend authentication |
| `STRIPE_SECRET_KEY`          | Stripe payment processing     |
| `CLOUDINARY_CLOUD_NAME`      | Cloudinary configuration      |
| `CLOUDINARY_API_KEY`         | Cloudinary API authentication |
| `CLOUDINARY_API_SECRET`      | Cloudinary API authentication |
| `SMTP_USER`                  | Email service account         |
| `SMTP_PASS`                  | Email service credentials     |

Use the variable names required by the application's source code when configuring your deployment.

---

## 📸 Screenshots

You can add screenshots of the application here to make the GitHub repository more attractive.

Example:

```markdown
## 📸 Screenshots

### Home Page

![Home Page](screenshots/home.png)

### Movie Details

![Movie Details](screenshots/movie-details.png)

### Booking

![Booking](screenshots/booking.png)
```

Create a `screenshots` folder in the repository and place your screenshots inside it.

---

## 🎯 Project Goals

The main goals of this project are to:

* Build a complete full-stack movie ticket booking platform
* Implement secure user authentication
* Connect a modern React frontend with a Node.js backend
* Work with MongoDB for persistent data storage
* Integrate online payments
* Handle media using cloud storage
* Provide a responsive and user-friendly booking experience

---

## 🔮 Future Improvements

Potential improvements include:

* 🎫 QR-code based digital tickets
* 📱 Improved mobile experience
* 💺 Interactive seat selection
* ⭐ Movie ratings and reviews
* 🔔 Real-time booking notifications
* 📊 Admin dashboard and analytics
* 🎞️ Movie search and advanced filtering
* 📍 Cinema/theatre location support
* 📜 Booking history
* 🧾 Downloadable ticket receipts

---

## 🤝 Contri
