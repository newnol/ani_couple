import React, { useState } from 'react';

function PhotoAlbumSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const photos = [
    '/assets/photo1.jpg',
    '/assets/photo2.jpg',
    '/assets/photo3.jpg',
    '/assets/photo4.jpg',
    '/assets/photo5.jpg',
    '/assets/photo6.jpg',
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section id="photo-album">
      <div className="curved-divider"></div>
      <div className="container">
        <h2>Our Photo Album</h2>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div key={index} className="photo-item" onClick={() => openLightbox(photo)}>
              <img src={photo} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </div>
        {lightboxOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content">
              <img src={selectedImage} alt="Enlarged" />
            </div>
            <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default PhotoAlbumSection;
