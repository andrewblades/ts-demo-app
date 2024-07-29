import React from 'react';
import './Dashboard.css';
import { DashboardItem } from '../types';

interface DashboardProps {
  items: DashboardItem[];
}

const Dashboard: React.FC<DashboardProps> = ({ items }) => {
  return (
    <div className="dashboard">
      {items.map((item, index) => (
        <div key={index} className="dashboard-item">
          {item.type === 'profile' && (
            <div>
              <h3>{item.content.name}</h3>
              <p>Age: {item.content.age}</p>
              <p>Bio: {item.content.bio}</p>
            </div>
          )}
          {item.type === 'settings' && (
            <div>
              <p>Theme: {item.content.theme}</p>
              <p>Notifications: {item.content.notificationsEnabled ? 'Enabled' : 'Disabled'}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;