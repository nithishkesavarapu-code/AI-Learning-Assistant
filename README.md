# AI Learning Assistant 🎓🤖

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AI Learning Assistant** is a cutting-edge educational platform designed to transform static study materials into dynamic, interactive learning experiences. By leveraging the power of **Google Gemini AI**, the assistant helps users process complex documents, generate study aids, and engage with their content in entirely new ways.


---

📸 Screenshots
<table> <tr> <td width="33%" align="center">
🖥️ Dashboard
<img src="https://github.com/user-attachments/assets/2c599a7f-d22a-4d27-9c5e-930250c978cf" /> </td> <td width="33%" align="center">
💬 AI Chat
<img src="https://github.com/user-attachments/assets/27260de1-992f-447e-957a-a5b5de0d9b13" /> </td> <td width="33%" align="center">
📝 Quizzes
<img src="https://github.com/user-attachments/assets/7860be6f-bf8b-49cb-b837-4b88260ea034" /> </td> </tr> <tr> <td width="33%" align="center">
🧾 Flashcards
<img src="https://github.com/user-attachments/assets/63e90dc3-409d-4a05-9708-928028c90c66" /> </td> <td width="33%" align="center">
🧠 Summarization
<img src="https://github.com/user-attachments/assets/033bd965-86bd-41df-92e1-f46f0e7433f2" /> </td> <td width="33%" align="center">
🔐 Login
<img src="https://github.com/user-attachments/assets/ff16fc50-6ef8-4a67-821e-7e63a0c12957" /> </td> </tr> <tr> <td width="33%" align="center">
📝 Register
<img src="https://github.com/user-attachments/assets/50f89ae7-1c75-4685-83dd-c1c95c3f506d" /> </td> <td width="33%" align="center">
📂 My Documents
<img src="https://github.com/user-attachments/assets/0c5c1bf0-2131-41ec-ac60-b04fc5e93113" /> </td> <td width="33%" align="center">
👤 Profile
<img src="https://github.com/user-attachments/assets/1e498675-a013-4091-a6ca-8b18088c8713" /> </td> </tr> </table>

## 🌟 Key Features

### 📄 Intelligent Document Analysis
- **PDF Processing**: Upload your study materials in PDF format.
- **Background Extraction**: Automated text extraction and semantic chunking for efficient AI processing.
- **Status Tracking**: Real-time feedback on document processing status.

### 🃏 Smart Flashcards
- **AI Generation**: Automatically generate comprehensive flashcard decks from any document.
- **Memory Optimization**: Focus on key concepts and definitions extracted directly from your sources.
- **Progress Tracking**: Star difficult cards and track your review frequency.

### 📝 Interactive AI Quizzes
- **Dynamic Assessment**: Generate tailored quizzes with configurable question counts.
- **Immediate Feedback**: Instant scoring and answer verification to reinforce learning.
- **History Tracking**: Keep track of your performance over time across different topics.

### 💬 Document Chat (RAG)
- **Chat with Context**: Ask questions directly about your uploaded documents.
- **Citations**: Get answers backed by specific sections of your text using Retrieval Augmented Generation (RAG).
- **Concept Deep-Dives**: Ask the AI to explain complex concepts in simpler terms without leaving the page.

### 📊 Dashboard & Progress
- **Unified Overview**: Manage all your documents, quizzes, and flashcards from a single, intuitive interface.
- **Learning Analytics**: Monitor your study habits and improvement.

---

## 🚀 Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) (Vite)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API
- **Networking**: Axios
- **Markdown Rendering**: React Markdown & Remark GFM

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Google Gemini API)
- **Authentication**: JSON Web Tokens (JWT) & BcryptJS
- **Middleware**: Multer (File uploads), Express Validator

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (Local or Atlas)
- Google Gemini API Key ([Get it here](https://aistudio.google.com/))

### 1. Clone the Repository
```bash
git clone https://github.com/nithishkesavarapu-code/AI-Learning-Assistant.git
cd AI-Learning-Assistant
```

### 2. Backend Configuration
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory:
   ```env
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key
   GEMINI_API_KEY=your_google_gemini_api_key
   NODE_ENV=development
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Frontend Configuration
1. Navigate to the frontend directory:
   ```bash
   cd frontend/ai-learning-assistant
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```
AI-Learning-Assistant/
├── backend/                # Express API
│   ├── config/             # DB & Multer configs
│   ├── controllers/        # Route logic
│   ├── middleware/         # Auth & Error handlers
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API endpoints
│   ├── utils/              # AI (Gemini) & Parser logic
│   └── server.js           # Entry point
└── frontend/               # React Application
    ├── public/             # Static assets
    └── src/
        ├── components/     # Reusable UI parts
        ├── context/        # Global state
        ├── pages/          # Main views
        └── services/       # API integration
```

---

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the **MIT License**.
