# Guamahammer Army Builder v4.4.2

A web-based army builder application with an integrated admin interface for managing army data. This version uses an Express.js server for handling army data and management.

## Features

- 🎮 Interactive army building interface
- 📊 Real-time validation and point calculation
- 🎯 Support for Chaos Host armies with allied contingents
- 🛠 Admin interface for army data management
- 💾 Local storage for army lists
- 🖨 Print-ready army list output

## Project Structure

```
├── server.js           # Express server for army data management
├── admin.html/js/css   # Admin interface for managing army data
├── index.html         # Main army builder interface
├── main.js           # Core army builder logic
├── armies/           # Individual army data files
├── comun.js         # Common magic items database
├── ejercitos.js     # Army registry and data loading
├── rulesEngine.js   # Army validation rules engine
├── validation.js    # Army list validation logic
├── storage.js       # Local storage management
└── print.js         # Print formatting logic
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Access the application:
- Main Builder: http://localhost:3000
- Admin Interface: http://localhost:3000/admin.html

## Development

### Prerequisites
- Node.js >= 14.0.0
- npm >= 6.0.0

### Local Development
1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`

## API Endpoints

### GET `/api/get-army`
- Query Parameters:
  - `faction`: Army faction ID (e.g., "imp", "gcaos", "comun")
- Returns: Complete army data including units, magic items, and rules

### POST `/api/save-army`
- Body: Army data object
- Returns: Success confirmation

## Army Data Structure

Armies are structured with the following components:
- Units Database (`unitsDB`)
- Magic Items Database (`magicItemsDB`)
- Army Skills Database (`armySkillsDB`)
- Mounts Database (`mountsDB`)
- Validation Rules
- FOC slot configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Version History

- 4.4.2: Migration to Express server architecture
- Previous versions: Netlify functions-based architecture

## License

This project is proprietary software. All rights reserved.