# Operations Dashboard

## Overview

This project is a desktop-first Operations Dashboard designed for a senior operations manager to quickly review and act on high-priority operational tasks at the beginning of the workday.

The dashboard focuses on clarity, speed, and decision-making while remaining responsive for tablet devices.

---

## Features

- Top 5 action items requiring immediate attention
- Approve and Hold actions for each task
- Automated anomaly detection panel using mock JSON data
- Live SLA countdown timer that updates every second
- English/Hindi bilingual language toggle
- Summary KPI cards
- Responsive desktop and tablet layout
- Modern UI built with Tailwind CSS

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- React Icons
- Context API
- JSON Mock Data

---

## Design Decisions

### Dashboard Layout

A left navigation sidebar allows quick access to different operational sections while keeping navigation consistent.

### Summary Cards

The KPI cards provide an immediate overview of operational health before reviewing detailed tasks.

### Live Counter

A live SLA countdown highlights urgency and helps operators prioritize time-sensitive actions.

### Action List

The top five action items reduce information overload by presenting only the highest priority work.

### Anomaly Panel

Automated anomaly detection separates system-generated alerts from manual tasks, helping operators identify unusual patterns quickly.

### Bilingual Support

English and Hindi language support improves accessibility for a broader range of users.

### Responsive Design

The dashboard is optimized for desktop users while adapting gracefully to tablet screens.

---

## Stretch Goals

### Completed

- Responsive layout
- Summary KPI cards
- Live countdown timer
- Bilingual support

### Not Completed

Due to time constraints, the following features were planned but not implemented:

- User authentication
- Backend API integration
- Real-time database updates
- Charts with live analytics
- Notification system
- Dark mode

Given additional time, these features would improve scalability and provide real-time operational insights.

---

## AI Usage

AI tools (ChatGPT) were used extensively during development to:

- Plan the dashboard architecture
- Create mock JSON data
- Implement the bilingual language toggle

All generated code was reviewed, tested, modified, and integrated manually before submission.

---

## Installation

```bash
npm install
npm run dev
```

---

## Project Structure

src/
├── components/
├── context/
├── data/
├── pages/
├── translations/
├── App.jsx
├── main.jsx

---

## Author

Shreya Bhalerao
