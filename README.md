# Vehicle Accident Tracker

This project is an accident tracker built on an esp32 board with the dashboard created using React. An MPU-6050 module connected to an esp32 is used to record gyroscope, acceleration and temperature readings. Acceleration readings are used to determine whether an accident has occurred based on the amount of force experienced. The data is then sent to a ThingSpeak channel and consumed via a React JS frontend client.

Important Resources
- [Schematic diagram for ESP32 and MPU6050](https://i1.wp.com/randomnerdtutorials.com/wp-content/uploads/2020/12/MPU6050_ESP32_Wiring-Schematic-Diagram.png?w=726&quality=100&strip=all&ssl=1)
- [ThingSpeak website](https://thingspeak.com/)


## Front-End :sunglasses:
The front-end client for this project is built using the React Js Framework. Here is a summary of techniques and technologies used:
- State handling using useState hook
- Component lifecycle handling using useEffect hook
- Page routing using react-router-dom and the useHistory hook
- Admin LTE template
- Bootstrap, Fontawesome, CSS for styling
- Dynamic components rendering different data sets based on values provided
- Api consumption using axios, await/async function calls and promises

## Back-End :monocle:
The project backend was built using express APIs, node js and a MySQL database. Here is a summary of techniques and technologies used:
- Sequelize operations to build, alter and manage database models
- Server side routing and API calls using express
- Configuring MySQL database for use with node js application

## IoT/ESP32 :mechanical_arm:
The ESP32 microcontoller board is used tool in tandem with several sensors is used to gather environment readings and inform operations. All ESP32 code was written in arduino on the arduino ide. Data is pushed to a thingspeak channel enabling remote access through an API.

## Planned Features 
- [x] Add ability to reset parameters from the dashboard
- [x] Role based or permission based operations
- [ ] Convert HTTP data transfer into MQTT
- [ ] Integrate GSM module (SIM800L)
- [ ] Integrate GPS module
- [x] Geomapping to see where vehicles are
- [ ] 3D print prototype case for purposes of presentation
- [x] Design PCB
- [x] Configure forgot password functionality  
# next-accident-tracker
