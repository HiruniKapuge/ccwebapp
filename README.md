# ccwebapp

A simple web application built with Node.js and Express.

## Features

- Express.js backend server
- RESTful API endpoints
- Static file serving
- Responsive frontend design
- Modern UI with gradient backgrounds

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/HiruniKapuge/ccwebapp.git
cd ccwebapp
```

2. Install dependencies:
```bash
npm install
```

## Usage

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

- `GET /` - Serves the main web application
- `GET /api/status` - Returns server status
- `GET /api/info` - Returns application information

## Project Structure

```
ccwebapp/
├── public/          # Static files (HTML, CSS, JS)
│   ├── index.html   # Main HTML file
│   ├── styles.css   # Styling
│   └── app.js       # Client-side JavaScript
├── server.js        # Express server
├── package.json     # Node.js dependencies and scripts
└── README.md        # Project documentation
```

## License

ISC
