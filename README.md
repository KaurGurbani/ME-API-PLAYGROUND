# ME API Playground 🚀

A simple personal API built with **Node.js, Express, TypeScript, Prisma, and PostgreSQL**.  
This project powers endpoints for profile, skills, projects, work experience, and search.  

---

## 📦 Tech Stack
- **Backend**: Node.js + Express + TypeScript  
- **Database**: PostgreSQL + Prisma ORM  
- **Dev Tools**: ts-node-dev, Docker (optional), pino (logging)  
- **API Testing**: curl, Postman, browser  

---

## ⚙️ Setup Instructions

### 1. Clone the repository
bash
git clone https://github.com/YOUR_USERNAME/me-api-playground.git
cd me-api-playground/backend

 # 2. Install dependencies
npm install

# 3. Set up PostgreSQL
Make sure PostgreSQL is running locally.
Create a database:
createdb meapi

# 4. Environment variables
Create a .env file in backend/:
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/meapi"
PORT=4000

# 5. Run migrations
npm run prisma:dev

# 6. Seed the database
npm run seed

# 7. Start the server
npm run dev
Server runs at:
👉 http://localhost:4000

# 🔗 API Endpoints
GET /health
✅ Returns 200 OK

## Profile
GET /profile
Returns profile details (from DB)

## Skills
GET /skills
GET /skills/top
Returns all skills with levels or top skills list

## Projects
GET /projects
Returns list of projects

## Work Experience
GET /work
Returns work history


## Search
GET /search?q=python
🔍 Searches projects, skills, and work by keyword


# Development Notes
Run with npm run dev for live reload
Use Postman or browser to test endpoints
Database models are defined in prisma/schema.prisma

























