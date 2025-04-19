import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const mapContainerStyle = {
  width: "50vw", // Adjusted for layout
  height: "80vh",
};

const center = {
  lat: 21.1466, // Centralized location in India
  lng: 79.0882,
}; 

const locations = [
  { id: 1, name: "Pune Office", lat: 18.5204, lng: 73.8567 },
  { id: 2, name: "Mumbai Office", lat: 19.076, lng: 72.8777 },
  { id: 3, name: "Raipur Office", lat: 21.2514, lng: 81.6296 },
];

const additionalLocations = [
  "Pune" ,
  "Mumbai" ,
  "Raipur",
];

const OurPresence = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900">Our Presence</h2>
        <p className="text-lg text-gray-600 mt-2">We have a global footprint.</p>
      </div>

      {/* Flex container for layout */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start justify-between mt-10">
        {/* Google Map on the left */}
        <div className="w-full lg:w-1/2">
          <LoadScript googleMapsApiKey="AIzaSyDBGFl3pJw6rBm6R0eX5vPZNLVkZgfcvh8" onLoad={() => setMapLoaded(true)}>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={5} center={center}>
              {mapLoaded &&
                locations.map((location) => (
                  <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} title={location.name} />
                ))}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Office locations on the right */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-3 lg:pl-12">
          {additionalLocations.map((location, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-400 py-3 text-gray-800">
              <span className="text-lg font-medium">{location}</span>
              <button className="text-yellow-600 text-2xl font-bold">+</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
