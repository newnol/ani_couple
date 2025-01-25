import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditMemory() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const storedMemories = localStorage.getItem('memories');
    if (storedMemories) {
      const memories = JSON.parse(storedMemories);
      const memory = memories[index];
      setTitle(memory.title);
      setDescription(memory.description);
      setImageUrl(memory.imageUrl);
      setDate(memory.date);
    }
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMemory = { title, description, imageUrl, date };
    const storedMemories = localStorage.getItem('memories');
    const memories = storedMemories ? JSON.parse(storedMemories) : [];
    memories[index] = updatedMemory;
    localStorage.setItem('memories', JSON.stringify(memories));
    navigate('/settings');
  };

  return (
    <div>
      <h2>Edit Memory</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditMemory;
