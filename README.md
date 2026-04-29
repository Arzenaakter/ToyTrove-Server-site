# 🧸 ToyTrove Server

<p align="center">
  🚀 Backend API for ToyTrove Marketplace Platform  
  <br/>
  Fast • Scalable • Search Optimized System
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/REST_API-FF6F00?style=for-the-badge"/>
</p>

---

## ✨ Overview

This is the **backend server** for **ToyTrove**, a MERN-based toy marketplace platform.  
It handles toy data management, search functionality, and efficient data retrieval.

---

## 🚀 Core Features

### 📦 Toy Management
- Add new toys 🧸
- Update toy information ✏️
- Delete toys ❌
- Retrieve toy details by ID

---

### 🌍 Public Toy Listing
- Fetch all toys (limited for performance)
- Global toy browsing system
- Efficient MongoDB queries

---

### 👤 User-Specific Data
- Get toys by user email
- Personalized toy collection (My Toys)
- Sorting system:
  - Price Low → High ⬆️
  - Price High → Low ⬇️

---

### 🔍 Search Optimization
- Search toys by name (case-insensitive)
- MongoDB indexing for faster queries ⚡
- Regex-based flexible search

---

### ⭐ Featured Data
- Best Selling Toys collection
- Separate endpoint for featured items

---

### ⚡ Performance Optimization
- Data limiting (for faster response)
- Indexed fields for search efficiency
- Optimized MongoDB queries

---

## 🧠 API Highlights

### 🧸 Toys
- `GET /allToys` → Get all toys (limited)
- `GET /allToys/:id` → Get toy details
- `POST /allToys` → Add new toy
- `PUT /allToys/:id` → Update toy
- `DELETE /allToys/:id` → Delete toy

---

### 🔍 Search
- `GET /toyNameSearch/:text` → Search toys by name

---

### 👤 User Toys
- `GET /myToys/:email?sortBy=asc|desc` → Get user toys with sorting

---

### ⭐ Featured
- `GET /bestSelling` → Get best selling toys

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb" /><br/>
  <img src="https://skillicons.dev/icons?i=js" />
</p>

---

## 🔧 Environment Variables

Create a `.env` file in root:

```env
PORT=5000
DB_USER=your_db_user
DB_PASS=your_db_password


---

## 🌐 Live Links

- 🎨 Frontend: https://toytrove.web.app/