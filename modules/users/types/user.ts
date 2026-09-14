export type UserRole = 'Super Admin' | 'Admin' | 'Agent' | 'Staff';

export type UserStatus = 'Active' | 'Inactive' | 'Pending';

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  status: UserStatus;
  lastActive: string;
  createdAt: string;
};

export type UserStats = {
  total: number;
  active: number;
  pending: number;
  inactive: number;
};
