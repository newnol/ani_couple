import React from 'react';

function TimelineSection() {
  const timelineItems = [
    {
      date: '2020-01-15',
      title: 'First Meeting',
      description: 'We met at a coffee shop and talked for hours.',
      image: '/assets/first-meeting.jpg',
    },
    {
      date: '2020-02-14',
      title: 'First Date',
      description: 'Our first date was at a beautiful restaurant.',
      image: '/assets/first-date.jpg',
    },
    {
      date: '2021-06-03',
      title: 'First Anniversary',
      description: 'We celebrated our first year together with a romantic getaway.',
      image: '/assets/first-anniversary.jpg',
    },
    {
      date: '2022-06-03',
      title: 'Second Anniversary',
      description: 'We celebrated our second year with a special dinner.',
      image: '/assets/second-anniversary.jpg',
    },
  ];

  return (
    <section id="timeline">
      <div className="curved-divider"></div>
      <div className="container">
        <h2>Our Milestones</h2>
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
