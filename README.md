# Daily Quiz

A fast and fun daily quiz web app built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).

## Overview

**Daily Quiz** is a quick timekiller designed for friendly competition. Each day, a new set of quizzes is generated using AI, so you and your friends can challenge each other and see who comes out on top!

-   **Fresh quizzes every day**
-   **Compete with friends**
-   **Instant, AI-generated questions**
-   **Simple, fast, and fun**

## Tech Stack

-   **Frontend:** React + Vite
-   **Backend/API:** [n8n](https://n8n.io/) (for quiz generation and orchestration)
-   **Database:** MySQL

## How It Works

1. Each day, the n8n API generates a new quiz using AI and stores it in the MySQL database.
2. Users visit the site, answer the daily quiz, and see how they rank against friends.
3. Scores and progress are tracked for friendly competition.

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/dagensev/daily-quiz.git
    cd daily-quiz
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Start the development server:**
    ```bash
    npm run dev
    ```
4. **Configure backend:**
    - Set up the n8n API and MySQL database as described in your deployment docs.
    - Update API endpoints in the frontend as needed.

## Project Structure

-   `src/` — React source code
-   `public/` — Static assets
-   `Dockerfile.dev` — Development Docker setup
-   `docker-compose.frontend.yml` — Docker Compose for frontend

## Credits

-   “sparkle” icon by Daisy from [Noun Project](https://thenounproject.com/icon/sparkle-5338431/), licensed under CC BY 3.0
