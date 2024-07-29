import React from 'react';
import './UserProfile.css';
import { User } from '../types';

const UserProfile: React.FC<User> = ({ id, name, age, bio }) => {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;