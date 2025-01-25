import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

function Memories() {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const storedMemories = localStorage.getItem('memories');
    if (storedMemories) {
      setMemories(JSON.parse(storedMemories));
    }
  }, []);

  const calculateDateDiff = (memoryDate) => {
    const today = new Date();
    const date = new Date(memoryDate);
    const years = differenceInYears(today, date);
    const months = differenceInMonths(today, date) % 12;
    const days = differenceInDays(today, date) % 30;
    return `${years} years, ${months} months, ${days} days ago`;
  };

  return (
    <div>
      <h1>Our Memories</h1>
      {memories.map((memory, index) => (
        <div key={index} className="memory-card">
          <h3>{memory.title}</h3>
          <p>{memory.description}</p>
          {memory.imageUrl && <img src={memory.imageUrl} alt={memory.title} />}
          {memory.date && (
            <p className="date-diff">
              {calculateDateDiff(memory.date)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Memories;
