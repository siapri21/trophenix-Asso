import React, { useState } from 'react';

const SectionDon = () => {
  const [selectedAmount, setSelectedAmount] = useState(130);

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('/asserts/img/2.png')`, width:'100vw' }}>
      {/* Overlay pour rendre le texte lisible */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu centré */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nous avons besoin de vous </h1>

        {/* Donation form */}
        <div className="bg-white text-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Mobilisons-nous ensemble !</h2>

          {/* Donation frequency */}
          <div className="flex mb-4 justify-center">
            <label className="flex items-center mr-4">
              <input
                type="radio"
                name="frequency"
                className="form-radio text-red-500"
                defaultChecked
              />
              <span className="ml-2">Je donne une fois</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="frequency"
                className="form-radio text-red-500"
              />
              <span className="ml-2">Je donne tous les mois</span>
            </label>
          </div>

          {/* Donation amounts */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[90, 130, 150, 200].map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountChange(amount)}
                className={`py-2 px-4 border rounded-lg text-center ${
                  selectedAmount === amount
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {amount} €
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <input
            type="number"
            placeholder="Montant libre"
            className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={(e) => handleAmountChange(Number(e.target.value))}
          />

          {/* Fiscal deduction */}
          <p className="text-sm text-gray-600 mb-4 text-center">
            Soit{' '}
            <span className="font-bold text-red-500">
              {Math.round(selectedAmount * 0.25)} €
            </span>{' '}
            après déduction fiscale
          </p>

          {/* Donate button */}
          <a
            href="https://donorbox.org/donations-trophenix"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-red-500 text-white py-2 px-4 rounded-lg text-center hover:bg-red-600 transition"
          >
            Je donne
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionDon;
