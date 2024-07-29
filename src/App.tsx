import React, { useState } from 'react';
import './index.css'
import Button from './components/Button';
import Card from './components/Card';
import List from './components/List';
import UserProfile from './components/UserProfile';
import Modal from './components/Modal';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import ThemedComponent from './components/ThemedComponent';
import EnhancedList from './components/EnhancedList';
import useLocalStorage from './hooks/useLocalStorage';
import withLogging from './hocs/withLogging';
import { User, DashboardItem, Theme } from './types';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', age: 30, bio: 'A software developer.' },
    { id: 2, name: 'Jane Smith', age: 25, bio: 'A graphic designer.' },
  ]);
  const [storedData, setStoredData] = useLocalStorage('formData', { name: '', bio: '', age: 0 });
  const [theme, setTheme] = useState<Theme>('light'); // Default theme

  const handleSubmit = (data: { name: string; bio: string; age: number }) => {
    const newUser: User = { id: users.length + 1, name: data.name, age: data.age, bio: data.bio };
    setUsers([...users, newUser]);
    setStoredData(data);
  };

  const items: DashboardItem[] = [
    { type: 'profile', content: { id: 3, name: 'Andrei', age: 26, bio: 'Web Developer' } },
  ];

  const EnhancedButton = withLogging(Button);

  return (
    <div>
      <h1>TypeScript React App</h1>

      <EnhancedButton label="Open Modal" onClick={() => setModalOpen(true)} />
      <Modal title="User List" isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <List items={users} renderItem={(user) => <UserProfile {...user} />} />
      </Modal>

      <Card title="Welcome" content="This is a simple card component." />
      <Form onSubmit={handleSubmit} />
      <Dashboard items={items} />
      <ThemedComponent theme={theme} />
      <EnhancedList items={users} renderItem={(user) => <UserProfile {...user} />} className="user-list" />

      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;