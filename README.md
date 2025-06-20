# SmartGreen - IoT Weather Station Monitoring System

A real-time IoT monitoring application that collects, processes, and displays environmental data from IoT weather stations using the MQTT protocol.

## Description

SmartGreen is a comprehensive IoT monitoring system that demonstrates the implementation of MQTT protocol for collecting environmental data from IoT weather stations. The system receives sensor data (temperature, luminosity, operational status, connectivity, and location) through MQTT messages, stores them in a SQLite database, and displays the information through a modern web interface in real-time.

### Key Features
- Real-time MQTT message subscription and processing
- Automatic data storage in SQLite database
- Web-based dashboard for monitoring station data
- Support for multiple IoT weather stations
- Real-time updates every 2 seconds
- Responsive and modern UI design

### System Architecture
The system consists of three main components:
1. **MQTT Subscriber** (Python) - Connects to MQTT broker and receives sensor data
2. **Message Processor** (Node.js) - Processes JSON messages and stores data in SQLite database
3. **Web Server** (Node.js/Express) - Serves the web interface and provides API endpoints

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v12 or higher)
- **NPM** (usually installed with Node.js)
- **Python** (v3.12)
- **PIP** (usually installed with Python)

## Installation

1. Clone this repository to your local machine
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Install Python MQTT library:
   ```bash
   pip install paho-mqtt
   ```

## Usage

The application requires three separate terminal sessions to run all components:

### Step 1: Start MQTT Subscriber
Open a terminal in the project directory and run the Python script to connect to the MQTT server:
```bash
python mqtt_subscriber.py
```
Keep this terminal running. This script will receive messages from the MQTT server and automatically generate a file called `messagemqtt.json` with real-time JSON formatted messages.

### Step 2: Start Message Processor
Open a **NEW** terminal and run the message processor to store data in the database:
```bash
node processMessage.js
```
Keep this terminal running. This script will:
- Create a SQLite database called `estacao.db`
- Read, process, and store messages from `messagemqtt.json` every second
- Prevent duplicate message processing

### Step 3: Start Web Server
Open another **NEW** terminal and start the application server:
```bash
node mqtt_server.js
```
Keep this terminal running. This will start the server on the default port 3000.

### Step 4: Access the Application
Open your web browser and navigate to:
```
http://localhost:3000
```

## Data Format

The system expects MQTT messages with the following payload format:
```
"placa [ID], [OPERATIONAL], [LOCATION], [CONNECTIVITY], [TEMPERATURE], [LUMINOSITY]"
```

Example:
```
"placa 1, TRUE, rua 5, TRUE, 29, 257"
```

Where:
- **placa [ID]**: Station identifier
- **OPERATIONAL**: TRUE/FALSE - Station operational status
- **LOCATION**: Station location (e.g., "rua 5")
- **CONNECTIVITY**: TRUE/FALSE - Connectivity status
- **TEMPERATURE**: Temperature reading in Celsius
- **LUMINOSITY**: Light intensity reading

## Testing

The `PubAndSub` directory contains simple MQTT publisher and subscriber examples for testing and understanding the MQTT protocol implementation.

## Database Schema

The SQLite database (`estacao.db`) contains a table called `Estacao` with the following structure:
- **Id**: Primary key (auto-increment)
- **Placa**: Station identifier
- **Operacional**: Operational status (boolean)
- **Localizacao**: Location string
- **Conectividade**: Connectivity status (boolean)
- **Temperatura**: Temperature reading (real)
- **Luminosidade**: Luminosity reading (real)
- **DataDeInclusao**: Timestamp (unique)
