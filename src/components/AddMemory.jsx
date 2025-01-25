import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddMemory() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMemory = { title, description, imageUrl, date };
    const storedMemories = localStorage.getItem('memories');
    const memories = storedMemories ? JSON.parse(storedMemories) : [];
    memories.push(newMemory);
    localStorage.setItem('memories', JSON.stringify(memories));
    navigate('/');
  };

  return (
    <div>
      <h2>Add a New Memory</h2>
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
        <button type="submit">Add Memory</button>
      </form>
    </div>
  );
}

export default AddMemory;
