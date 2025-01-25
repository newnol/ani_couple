import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

function CountdownSection() {
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
  });
    const [timeSinceConfession, setTimeSinceConfession] = useState({
    years: 0,
    months: 0,
    days: 0,
  });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const startDate = new Date('2022-06-03T00:00:00');
    const confessionDate = new Date('2023-02-14T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const diffTogether = now.getTime() - startDate.getTime();
      const diffConfession = now.getTime() - confessionDate.getTime();

      if (diffTogether <= 0) {
        setShowConfetti(true);
        setTimeTogether({ years: 0, months: 0, days: 0 });
        return;
      }
        if (diffConfession <= 0) {
        setTimeSinceConfession({ years: 0, months: 0, days: 0 });
        return;
      }

      const yearsTogether = differenceInYears(now, startDate);
      const monthsTogether = differenceInMonths(now, startDate) % 12;
      const daysTogether = differenceInDays(now, startDate) % 30;

        const yearsConfession = differenceInYears(now, confessionDate);
        const monthsConfession = differenceInMonths(now, confessionDate) % 12;
        const daysConfession = differenceInDays(now, confessionDate) % 30;

      setTimeTogether({ years: yearsTogether, months: monthsTogether, days: daysTogether });
        setTimeSinceConfession({ years: yearsConfession, months: monthsConfession, days: daysConfession });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="countdown">
      <div className="curved-divider"></div>
      <div className="container countdown">
        <h2>Time Since We Met</h2>
        <div className="countdown-timer">
          {timeTogether.years} years, {timeTogether.months} months, {timeTogether.days} days
        </div>
          <h2>Time Since Our Confession</h2>
        <div className="countdown-timer">
          {timeSinceConfession.years} years, {timeSinceConfession.months} months, {timeSinceConfession.days} days
        </div>
        {showConfetti && <Confetti />}
      </div>
    </section>
  );
}

export default CountdownSection;
