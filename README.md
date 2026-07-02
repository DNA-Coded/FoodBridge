# FoodBridge AI

An AI-powered surplus food coordination platform that reduces food waste by intelligently connecting food donors with verified recipient organizations using Google Gemma 4.

## Project Structure

```
SecondServe/
├── foodbridge-frontend/   # React + TypeScript + Vite + Tailwind CSS
└── foodbridge-backend/    # Node.js + Express + TypeScript + MongoDB
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account

### Backend Setup
```bash
cd foodbridge-backend
npm install
cp .env.example .env        # Fill in your credentials
npm run dev
```

### Frontend Setup
```bash
cd foodbridge-frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

Create `foodbridge-backend/.env` with:
```
PORT=3000
NODE_ENV=development
MONGODB_URI=your_mongodb_atlas_connection_string
```

## Tech Stack

**Frontend:** React, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router

**Backend:** Node.js, Express, TypeScript, Mongoose, Zod

**Database:** MongoDB Atlas

**AI:** Google Gemma 4 (Phase 4)
