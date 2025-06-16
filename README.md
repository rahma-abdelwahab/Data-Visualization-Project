# 📊 Interactive Data Dashboard

This project is a web-based interactive dashboard that visualizes data from a CSV file using various dynamic charts. It combines a Flask backend with an AmCharts-powered frontend for seamless data exploration and real-time chart rendering.

---

## 🚀 Project Overview

The dashboard offers an intuitive way to explore and analyze product-related metrics, payment statistics, and customer demographics. It reads data from a CSV file, stores it in an SQLite database, and serves it through a Flask RESTful API. The frontend fetches this data and updates the visualizations dynamically.

---

## 🎯 Features

* **Flask Backend API**
  Serves multiple REST endpoints to provide data for the visualizations.

* **Data Persistence**
  Loads `data_new_set.csv` into an SQLite database via SQLAlchemy for efficient querying.

* **Dynamic Frontend**

  * **HTML/CSS/JavaScript-based interface**
  * Uses **AmCharts 5** to render interactive charts.
  * Fetches data asynchronously via `fetch()` and updates visualizations in real-time.

* **Visualizations Included**:

  1. **Chart 1** – Product Line totals
  2. **Chart 2** – Payment method percentages
  3. **Chart 4** – Ratings by Product Line
  4. **Chart 5** – Product Line vs Gender analysis

---

## 🛠️ Technologies Used

### Backend

* **Python**
* **Flask**
* **Pandas**
* **SQLAlchemy**
* **SQLite**

### Frontend

* **HTML**
* **CSS** (`style.css`)
* **JavaScript** (`script.js`)
* **AmCharts 5** – JavaScript library for interactive charting

### Data Source

* `data_new_set.csv` – CSV file containing the dataset used for the dashboard

---

## ⚙️ How to Run the Project

1. **Install Python 3.x**

2. **Install Required Python Libraries**:

   ```bash
   pip install Flask pandas sqlalchemy
   ```

3. **Project Setup**:

   * Ensure `data_new_set.csv` and `server.py` are in the same directory.

4. **Start the Backend Server**:

   ```bash
   python server.py
   ```

   This will launch the Flask server (default: `http://127.0.0.1:5000/`).

5. **Open the Dashboard**:

   * Either open `index.html` directly in a web browser,
   * Or access it via the Flask server if templates are served through Flask.

---

## 📁 File Structure

```
PROJECT DSAI203/
├── __pycache__/                # Python cache files
├── static/                     # Static files (JS, CSS)
│   ├── script.js               # JavaScript for dynamic chart loading
│   └── style.css              # CSS styling for the dashboard
├── templates/                 # HTML templates (e.g., index.html)
├── data_new_set.csv           # Source dataset
├── demo.db                    # SQLite database (alternate/backup)
├── my.db                      # Primary SQLite database
└── server.py                  # Flask backend server


