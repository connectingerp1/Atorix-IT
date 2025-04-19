import React from "react";

const OurClient = [
  {
      name: "John Doe",
      feedback: "This service is amazing! It has greatly improved our workflow and efficiency."
  },
  {
      name: "Jane Smith",
      feedback: "A game-changer for our business. Highly recommend to others."
  },
  {
      name: "Alice Johnson",
      feedback: "Exceptional quality and support. Couldn't be happier with the results."
  }
];

function FeedbackCard({ name, position, feedback }) {
  return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-600">{position}</p>
          </div>
          <p className="text-gray-700">{feedback}</p>
      </div>
  );
}




export default OurClient;
