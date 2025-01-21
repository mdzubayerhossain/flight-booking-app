const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

// Amadeus API credentials (replace these with your actual credentials)
const amadeusClientId = "YOUR_CLIENT_ID";
const amadeusClientSecret = "YOUR_CLIENT_SECRET";

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to search flights
app.post('/search-flights', async (req, res) => {
  const { tripType, travelers, classType, fromLocation, toLocation } = req.body;

  try {
    // Get the access token from Amadeus API
    const tokenResponse = await axios.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: amadeusClientId,
        client_secret: amadeusClientSecret,
      })
    );
    const accessToken = tokenResponse.data.access_token;

    // Make a request to Amadeus flight search API
    const flightSearchResponse = await axios.get(
      `https://test.api.amadeus.com/v2/shopping/flight-offers`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          originLocationCode: fromLocation, // Example: "NYC"
          destinationLocationCode: toLocation, // Example: "LON"
          departureDate: tripType === 'roundTrip' ? '2025-01-30' : '2025-01-20',
          adults: travelers,
          travelClass: classType === 'economy' ? 'ECONOMY' : 'BUSINESS',
        },
      }
    );

    // If no flights are found
    if (flightSearchResponse.data.data.length === 0) {
      return res.json({ success: false, message: 'No flights found' });
    }

    // Return the flight offers
    return res.json({
      success: true,
      availableFlights: flightSearchResponse.data.data.map((flight) => ({
        flightNumber: flight.itineraries[0].segments[0].carrierCode,
        departure: flight.itineraries[0].segments[0].departure.at,
        arrival: flight.itineraries[0].segments[0].arrival.at,
        price: flight.price.total, // Price in the required currency
      })),
    });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Error fetching flights' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
