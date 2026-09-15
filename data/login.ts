import type { DemoUser } from '../types/auth';

export const defaultLoginValues = {
  email: 'admin@morrowco.com',
  password: 'admin123',
};

export const demoUser: Omit<DemoUser, 'email'> = {
  id: 'demo-admin',
  name: 'Alex Morgan',
  role: 'ADMIN',
};

export const authStorageKey = 'real-estate-demo-user';

export const authChangeEvent = 'real-estate-auth-change';
