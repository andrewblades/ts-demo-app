import React, { useState } from 'react';
import './Form.css';

interface FormProps {
  onSubmit: (data: { name: string; bio: string; age: number }) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [bio, setbio] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ name, bio, age });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={bio} onChange={(e) => setbio(e.target.value)} placeholder="bio" />
        <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value, 10))} placeholder="Age" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;