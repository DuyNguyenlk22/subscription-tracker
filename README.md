# Subscription Tracker API

A production-ready RESTful API built with Node.js and Express.js that allows users to manage their subscriptions, track renewal dates, and receive automated email reminders. It features secure authentication, rate-limiting, bot-protection, and background jobs.

## Features

- **User Authentication:** Sign up and log in functionality secured with JWT and password hashing (bcrypt).
- **Subscription Management:** Full CRUD operations for subscriptions, including automated renewal date and status calculations based on frequency.
- **Automated Reminders:** Trigger email notifications 7, 5, 2, and 1 days before a subscription expires, powered by Upstash Workflows.
- **Security:** Out-of-the-box integration with Arcjet for API rate-limiting and advanced bot protection.
- **Error Handling:** Centralized custom error handling middleware.

## Tech Stack

- **Framework:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Token (JWT), bcryptjs
- **Security:** Arcjet Node.js integration
- **Background Jobs:** Upstash Workflows (QStash)
- **Utilities:** Nodemailer (sending emails), Day.js (date manipulation)

## Prerequisites

- Node.js (v18.0.0 or higher recommended)
- A MongoDB cluster/instance
- Arcjet account (for rate-limiting and bot protection)
- Upstash account (for background workflow processes)
- An email provider setup for SMTP sending via Nodemailer

## Environment Variables

Create a file named `.env.development.local` (or `.env.production.local` for production) in the root directory and configure it according to the template below:

```env
PORT=3000
NODE_ENV=development
SERVER_URL=http://localhost:3000

# Database
DB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

# Arcjet Configuration
ARCJET_ENV=development
ARCJET_KEY=your_arcjet_key

# Upstash QStash Configuration
QSTASH_URL=your_qstash_url
QSTASH_TOKEN=your_qstash_token
QSTASH_CURRENT_SIGNING_KEY=your_qstash_current_signing_key
QSTASH_NEXT_SIGNING_KEY=your_qstash_next_signing_key

# Email Sending
EMAIL_PASSWORD=your_email_password
```

## Getting Started

1. **Clone the repository** (or navigate to your local copy):
   ```bash
   cd subscription-tracker
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure your environment variables** using the template above.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

The API should now be running, typically at `http://localhost:3000` (or whichever port you've specified).

## API Core Endpoints

- `/app/v1/auth` - User registration and login
- `/app/v1/users` - User management operations
- `/app/v1/subscriptions` - Subscription management 
- `/app/v1/workflows` - Upstash webhook endpoints to trigger the background email jobs

## Project Structure

```text
├── config/           # Environment loader and 3rd party config
├── controllers/      # Route handlers implementing business logic
├── database/         # MongoDB connection setup
├── middlewares/      # Custom middlewares (auth, errors, arcjet)
├── models/           # Mongoose schemas and models
├── routes/           # API router configurations
├── utils/            # Shared helper functions (email-templates, etc.)
├── app.js            # Express application entrypoint
└── package.json      # Dependencies and execution scripts
```
