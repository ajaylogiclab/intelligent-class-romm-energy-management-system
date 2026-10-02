# Intelligent Classroom Energy Management Dashboard - Firebase Version

## Firebase database structure

Create this structure in Realtime Database:

classroom
  occupancy: true
  temperature: 27.4
  humidity: 61
  power: 420
  energy_today: 4.82
  appliances
    light: true
    fan: true
    ac: false
  energy_history
    0: 0.35
    1: 0.62
    2: 1.05
    3: 0.82
    4: 0.95
    5: 0.71
    6: 0.32

## Setup

1. Create a Firebase project.
2. Add a Web App.
3. Create Realtime Database.
4. Copy the Web App config into `firebase-config.js`.
5. Copy the Realtime Database URL into `databaseURL`.
6. Add the sample `classroom` data above.
7. Run the dashboard using a local web server (for example VS Code Live Server).
8. The dashboard will listen to `/classroom` in real time.
9. Appliance buttons write to `/classroom/appliances/<name>`.

For the first prototype only, database rules can be opened for testing. Before deployment, add Firebase Authentication and secure the Realtime Database rules.
