import React, { useState } from 'react'
import './App.css'

function App() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dateOfBirth) {
      alert('Please enter your date of birth.');
      return;
    }

    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    setAge(ageInYears);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="bg-white rounded-lg p-8 shadow-md text-center w-96">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-4">Age Calculator</h1>
        <p className="text-lg text-gray-600 mb-4">Enter your date of birth</p>
        <div className="mb-4">
          <input
            type="date"
            name="data"
            id="data"
            className="w-full border rounded-lg py-2 px-3"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={calculateAge}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:ring focus:ring-blue-400 focus:outline-none"
        >
          Calculate Age
        </button>
        {age !== null && (
          <div className="text-xl text-blue-700 mt-4">
            You are {age} years old.
          </div>
        )}
      </div>
    </div>
  )
}

export default App
