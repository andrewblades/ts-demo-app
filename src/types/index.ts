export interface User {
  id: number;
  name: string;
  age: number;
  bio: string;
}

export type ModalSize = 'small' | 'medium' | 'large';

export interface ProfileItem {
  type: 'profile';
  content: User;
}

export interface SettingsItem {
  type: 'settings';
  content: {
    theme: string;
    notificationsEnabled: boolean;
  };
}

export type DashboardItem = ProfileItem | SettingsItem;

export type Theme = 'light' | 'dark';

export interface Item {
  id: number;
  name: string;
  age: number;
  bio: string;
}