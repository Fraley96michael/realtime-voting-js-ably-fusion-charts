# Realtime voting app with Ably and Fusion Charts

This repository contains project files for a realtime voting app built with VanillaJS using [Ably as the realtime messaging infrastructure](https://www.ably.io/) and [Fusion Charts as the responsive chat provider](https://www.fusioncharts.com/)

![Voting app preview](https://user-images.githubusercontent.com/5900152/97431131-c11d6680-1911-11eb-82e7-15a2b52854bf.png)


You can [check out the live demo](https://voting-js-ably-fusion-charts.glitch.me/) for this app to understand it's working

## How to run this project locally

1. Clone this repository

   ```sh
   git clone https://github.com/Fraley96michael/realtime-voting-js-ably-fusion-charts.git
   ```

2. Change directory into the project folder

   ```sh
   cd realtime-voting-js-ably-fusion-charts
   ```

3. Create a free account with [Ably Realtime](https://www.ably.io/) to get your Ably API KEY. Replace the placeholder `<YOUR-ABLY-API-KEY>` in both the `main.js` files with your own API Key.

4. Open the voting interface and the graph UI in two browser windows. Best if they are placed side by side. Click on the various voting option buttons to see the graph update in realtime. You can open up any number of instances of the voting interface to simulate multiple people casting their votes.

Voila! Your live voting app is up and running. Customize this app and make it your own.