![Arogyam Banner](./assets/images/Arogyambanner.png)
# Arogyam - AI Powered Ingredient Safety Platform

**Arogyam** is an ingredient safety scanner that enables users to avoid certain ingredients from the products they consume. These avoidances can include but is not limited to allergens, religious obligiations, and more. Users create their own personalized avoidance lists, scan product barcodes using their devices built in camera, and receive AI-powered safety analysis with confidence levels. Unsafe products are flagged and can be saved to a watchlist for future reference. 
---
## Features

### Implemented
- **Complete Authentication System**
  - User signup and signin with JWT authentication
  - Two factor account authentication with personalized email verification with token-based system
  - Password reset functionality
  - Secure logout

- **Dashboard**
  - Only authenticated users gain access to the dashboard 
  - The dashboard consists of four components: avoidance list, product scanner, safety report, and unsafe product watchlist
  - MongoDB integration for data persistence 

- **Product Scanning**
  - Barcode scanner using device camera
  - Manual barcode entry fallback
  - Mutual exclusivity logic between scan/manual methods
  - Integration with OpenFoodFacts API

- **AI Safety Analysis**
  - Google Gemini 2.5 Flash API integration
  - Ingredient safety scoring (0-100)
  - Confidence levels for analysis
  - Detailed explanations of safety concerns
  - Flagged ingredient highlighting

- **Watchlist System**
  - Users have the option to save unsafe products to a watchlist for future reference
  - Add/remove functionality
  - Product details displayed including image of product, product name, flagged ingredients, and date flagged

---
## Tech Stack

### Frontend
- **React** with **Vite**
- **Lucide** for icons
- **Tailwind CSS** for styling
- **Framer Motion** for animated sections 
- **Zustand** for state management
- **react-qr-barcode-scanner** for barcode scanning
- **React Router** for navigation
- **React Hot Toast** for notifications

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Axios** for external API calls
- **bcryptjs** for password hashing

### AI & External Services
- **Google Gemini 2.5 Flash API** for ingredient safety analysis
- **OpenFoodFacts API** for product ingredient data
- **Mailtrap** for sending emails (verification code, welcome message, password reset link)
- **Web3Forms** for feedback forms 

---
## Architecture

### State Management (Zustand Stores)

The application uses Zustand for efficient, scalable state management:

- **authStore.js**: Authentication state, user session management
- **dashboardStore.js**: Avoidance list operations (fetch, add, update, delete)
- **productStore.js**: Product API state (fetchProductInfo, clearProductInfo)
- **aiStore.js**: AI safety analysis state (analyzeSafety, clearAnalysis, safetyAnalysis, isAnalyzing)
- **watchlistStore.js**: Watchlist operations (fetch, add, remove)

### Backend Routes

- `/api/auth`: Authentication endpoints (signup, signin, verify-email, forgot-password, reset-password, logout)
- `/api/dashboard`: Dashboard/avoidance list endpoints (protected)
- `/api/products`: Product info from OpenFoodFacts (`/info/:barcode`)
- `/api/ai`: AI safety analysis (`/analyze-safety`)
- `/api/watchlist`: Watchlist management (protected)

### Protected Routes

All dashboard, watchlist, and user-specific routes require JWT authentication via the `verifyToken` middleware.

---

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd arogyam
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**

   Create `.env` in the root directory:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

   Create `.env` in the `backend` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_gemini_api_key
   PORT=3001
   NODE_ENV=development
   MAILTRAP_TOKEN=your_mailtrap_token
   MAILTRAP_ENDPOINT=your_mailtrap_endpoint
   CLIENT_URL=http://localhost:5173
   ```

5. **Run the application**

   Terminal 1 (Frontend):
   ```bash
   npm run dev
   ```

   Terminal 2 (Backend):
   ```bash
   cd backend
   npm run dev
   ```

---

## Project Structure

```
arogyam/
├── src/
│   ├── components/
│   │   ├── ProductScanner.jsx       # Barcode scanner with manual entry
│   │   ├── SafetyScore.jsx          # AI analysis results display
│   │   ├── AvoidanceList.jsx        # CRUD for avoidance list
│   │   ├── DashboardGreeting.jsx    # User greeting component
│   │   ├── Watchlist.jsx            # Watchlist display component
│   │   └── ...
│   ├── pages/
│   │   ├── Dashboard.jsx            # Main dashboard page
│   │   ├── SignUp.jsx               # User registration
│   │   ├── SignIn.jsx               # User login
│   │   └── ...
│   ├── store/
│   │   ├── authStore.js             # Authentication state
│   │   ├── dashboardStore.js        # Dashboard state
│   │   ├── productStore.js          # Product API state
│   │   ├── aiStore.js               # AI analysis state
│   │   └── watchlistStore.js        # Watchlist state
│   ├── App.jsx                      # Main app component with routing
│   └── main.jsx                     # Entry point
├── backend/
│   ├── controllers/
│   │   ├── auth.controller.js       # Authentication logic
│   │   ├── dashboard.controller.js  # Dashboard operations
│   │   ├── product.controller.js    # OpenFoodFacts integration
│   │   ├── ai.controller.js         # Gemini AI integration
│   │   └── watchlist.controller.js  # Watchlist operations
│   ├── models/
│   │   └── user.model.js            # User schema with avoidance list & watchlist
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── dashboard.route.js
│   │   ├── product.route.js
│   │   ├── ai.route.js
│   │   └── watchlist.route.js
│   ├── middleware/
│   │   └── verifyToken.js           # JWT authentication middleware
│   ├── mailtrap/
│   │   ├── mailtrap.config.js       # Email configuration
│   │   └── emails.js                # Email templates
│   └── server.js                    # Express server setup
├── .env                             # Frontend environment variables
├── backend/.env                     # Backend environment variables
└── README.md
```

---
## Workflow

### 1. Product Scanning Flow

```
User scans/enters barcode
    ↓
ProductScanner.jsx updates scannedData
    ↓
useEffect triggers fetchProductInfo(barcode)
    ↓
productStore sends request to /api/products/info/:barcode
    ↓
Backend calls OpenFoodFacts API
    ↓
Returns product data (name, ingredients, brand, imageUrl)
    ↓
productStore updates productInfo state
    ↓
Dashboard detects change, passes to SafetyScore component
```

### 2. AI Analysis Flow

```
Product successfully fetched
    ↓
ProductScanner calls analyzeSafety(ingredients, avoidanceList, productName)
    ↓
aiStore sets isAnalyzing = true
    ↓
SafetyScore shows loading spinner
    ↓
Backend sends ingredients + avoidanceList to Gemini AI
    ↓
AI analyzes and returns:
  { safetyScore, isSafe, explanation, matchedIngredients, confidence }
    ↓
aiStore updates safetyAnalysis, sets isAnalyzing = false
    ↓
SafetyScore displays results:
  - Safety score (0-100)
  - Flagged ingredients
  - Detailed explanation
  - "Save to Watchlist" button (if unsafe)
```

### 3. Watchlist Flow

```
User clicks "Save to Watchlist" (on unsafe products)
    ↓
watchlistStore.addToWatchlist(productData, safetyAnalysis)
    ↓
Backend saves to user.watchlist array
    ↓
Product added with: name, barcode, brand, imageUrl, safetyScore,
                    matchedIngredients, timestamp
    ↓
Watchlist component refreshes
    ↓
Toast notification confirms save
```

### 4. Clear Flow

```
User clicks "Clear Barcode"
    ↓
ProductScanner calls clearProductInfo() + clearAnalysis()
    ↓
Both productStore and aiStore reset to null
    ↓
SafetyScore returns to empty state
```

---

## API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Register new user | No |
| POST | `/api/auth/signin` | User login | No |
| POST | `/api/auth/verify-email` | Verify email with token | No |
| POST | `/api/auth/forgot-password` | Request password reset | No |
| POST | `/api/auth/reset-password/:token` | Reset password | No |
| POST | `/api/auth/logout` | User logout | Yes |
| GET | `/api/auth/check-auth` | Check authentication status | Yes |

### Dashboard Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/dashboard/avoidance-list` | Get user's avoidance list | Yes |
| POST | `/api/dashboard/avoidance-list` | Add ingredient to list | Yes |
| DELETE | `/api/dashboard/avoidance-list/:id` | Remove ingredient | Yes |
| PUT | `/api/dashboard/avoidance-list/:id` | Update ingredient | Yes |

### Product Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/products/info/:barcode` | Get product info from OpenFoodFacts | No |

### AI Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/ai/analyze-safety` | Analyze ingredient safety | Yes |

**Request Body:**
```json
{
  "ingredients": ["water", "sugar", "red 40"],
  "avoidanceList": ["red 40"],
  "productName": "Example Product"
}
```

**Response:**
```json
{
  "safetyScore": 45,
  "isSafe": false,
  "explanation": "This product contains Red 40...",
  "matchedIngredients": ["red 40"],
  "confidence": "high"
}
```

### Watchlist Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/watchlist` | Get user's watchlist | Yes |
| POST | `/api/watchlist` | Add product to watchlist | Yes |
| DELETE | `/api/watchlist/:id` | Remove from watchlist | Yes |

---
## Current Status

### User Model Fields

```javascript
{
  email: String (unique, required),
  password: String (required, hashed),
  name: String (required),
  avoidanceList: [String],
  watchlist: [{
    productName: String,
    barcode: String,
    brand: String,
    imageUrl: String,
    safetyScore: Number,
    matchedIngredients: [String],
    addedAt: Date
  }],
  resetPasswordToken: String,
  resetPasswordExpiresAt: Date,
  verificationToken: String,
  verificationTokenExpiresAt: Date,
  isVerified: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```
---
## Developer Notes

**Developer**: [Alfred Siby Cyriac](https://www.linkedin.com/in/alfredsiby-cyriac/)
This was very much a passion project for me. I am extremely drawn to the intersection between software and healthcare and saw this project as a tool that can truly help individuals. Currently, as of October 14th, 2025 the projects core functionalities are complete but the project is not yet deployed. I hope to deploy this project in the near future after fine tunning somethings and hope to grow a real user base for Arogyam. I started this project on July 30th, 2025 and saw it as a learning opportunity for me to understand how large scalable software is built. I am very proud of the current outcome and hope to keep improving upon it in my free time. 
---

## Contributing

This is a personal learning project. Feedback and suggestions are welcome!

---

## License

This project is for educational purposes.

---

