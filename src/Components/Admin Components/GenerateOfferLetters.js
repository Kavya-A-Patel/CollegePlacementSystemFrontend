import React, { useState } from "react";

const GenerateOfferLetters = () => {
  const [offers, setOffers] = useState([
    {
      id: 1,
      studentName: "Kavya Patel",
      companyName: "Tech Innovators Inc.",
      positionTitle: "Software Engineer",
      offerLetterStatus: "Generated",
      offerLetterUrl: "http://example.com/offer-kavya",
      offerDate: "2024-08-20",
    },
    {
      id: 2,
      studentName: "Kavya Patel",
      companyName: "Eco Solutions Ltd.",
      positionTitle: "Marketing Specialist",
      offerLetterStatus: "Not Generated",
      offerLetterUrl: null,
      offerDate: "2024-08-25",
    },
  ]);

  const handleGenerate = (id) => {
    setOffers(
      offers.map((offer) =>
        offer.id === id
          ? {
              ...offer,
              offerLetterStatus: "Generated",
              offerLetterUrl: `http://example.com/offer-${offer.studentName
                .toLowerCase()
                .replace(" ", "-")}`,
            }
          : offer
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 p-8">
      <div className="max-w-6xl mx-auto bg-white p-12 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Generate Offer Letters
        </h1>

        {offers.length === 0 ? (
          <div className="text-center text-gray-700">
            <p className="text-xl font-medium">No offers available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {offer.studentName}
                </h2>
                <p className="text-gray-800 mb-2">
                  <strong className="font-medium">Company:</strong>{" "}
                  {offer.companyName}
                </p>
                <p className="text-gray-800 mb-2">
                  <strong className="font-medium">Position:</strong>{" "}
                  {offer.positionTitle}
                </p>
                <p className="text-gray-800 mb-4">
                  <strong className="font-medium">Status:</strong>{" "}
                  {offer.offerLetterStatus}
                </p>
                {offer.offerLetterStatus === "Not Generated" ? (
                  <button
                    onClick={() => handleGenerate(offer.id)}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                  >
                    Generate Offer Letter
                  </button>
                ) : (
                  <p className="mt-4">
                    <strong className="font-medium">Offer Letter:</strong>{" "}
                    <a
                      href={offer.offerLetterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
                    >
                      View Offer Letter
                    </a>
                  </p>
                )}
                <p className="text-gray-800 mt-4">
                  <strong className="font-medium">Offer Date:</strong>{" "}
                  {new Date(offer.offerDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateOfferLetters;
