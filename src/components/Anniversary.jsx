import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

function Anniversary() {
  const [startDate, setStartDate] = useState(new Date('2022-06-03'));
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const today = new Date();
    setYears(differenceInYears(today, startDate));
    setMonths(differenceInMonths(today, startDate) % 12);
    setDays(differenceInDays(today, startDate) % 30);
  }, [startDate]);

  return (
    <div className="anniversary">
      <p>
        We've been together for: {years} years, {months} months, and {days} days!
      </p>
    </div>
  );
}

export default Anniversary;
