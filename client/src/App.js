// App.js

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [years, setYears] = useState(null);
  const [decimalValues, setDecimalValues] = useState(null);

  useEffect(() => {
    const calculateAge = () => {
      const birthdate = new Date('2000-09-13T07:00:00Z');
      const currentDate = new Date();

      const ageInMilliseconds = currentDate - birthdate;
      const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);

      const integerPart = Math.floor(ageInYears);
      const decimalPart = (ageInYears - integerPart).toFixed(10).replace(/^0\./, '');

      setYears(integerPart);
      setDecimalValues(decimalPart);
    };

    calculateAge();

    const intervalId = setInterval(calculateAge, 150);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div id="age-box">
        <h3>{years}</h3>
        <p>.{decimalValues}</p>
      </div>
    </div>
  );
}

export default App;
