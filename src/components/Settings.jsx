import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const [memories, setMemories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedMemories = localStorage.getItem('memories');
    if (storedMemories) {
      setMemories(JSON.parse(storedMemories));
    }
  }, []);

  const handleEdit = (index) => {
    navigate(`/edit/${index}`);
  };

  const handleDelete = (index) => {
    const updatedMemories = memories.filter((_, i) => i !== index);
    setMemories(updatedMemories);
    localStorage.setItem('memories', JSON.stringify(updatedMemories));
  };

  return (
    <div>
      <h1>Settings</h1>
      {memories.map((memory, index) => (
        <div key={index} className="memory-card">
          <h3>{memory.title}</h3>
          <p>{memory.description}</p>
          {memory.imageUrl && <img src={memory.imageUrl} alt={memory.title} />}
          {memory.date && <p>Date: {memory.date}</p>}
          <div className="edit-buttons">
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Settings;
