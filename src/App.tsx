import { useEffect, useState } from 'react';
import './App.css';

function calculateAge(year: number, month: number, day: number) {
  const today = new Date();
  const birthDate = new Date(year, month, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function App() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (year && month && day) {
      setAge(calculateAge(+year, +month, +day).toString());
    }
  }, [year, month, day]);

  return (
    <>
      <h1>Age Calculator</h1>
      <input type="number" min="1900" value={year} onChange={e => setYear(e.target.value)} placeholder="Year" />
      <input type="number" value={month} onChange={e => setMonth(e.target.value)} placeholder="Month" />
      <input type="number" value={day} onChange={e => setDay(e.target.value)} placeholder="Day" />
      {year && month && day && age > 0 && <p>Your age is: {age}</p>}
    </>
  );
}

export default App;
