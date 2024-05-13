const fs = require("fs");
const { google } = require("googleapis");
const path = require("path");

const credentialsPath = path.resolve(__dirname, "IMPORTANTINCC.json");

function loadCredentials() {
  try {
    const credentials = JSON.parse(fs.readFileSync(credentialsPath));
    return credentials;
  } catch (error) {
    console.error("Error loading credentials:", error);
    return null;
  }
}

function initializeApiClient(credentials) {
  const { client_email, private_key } = credentials;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email,
      private_key,
    },
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  return google.calendar({ version: "v3", auth });
}

module.exports = {
  loadCredentials,
  initializeApiClient,
};
