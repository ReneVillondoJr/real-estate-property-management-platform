export type ActivityAction =
  | 'Created'
  | 'Updated'
  | 'Deleted'
  | 'Logged in'
  | 'Logged out'
  | 'Status changed'
  | 'Viewed';

export type ActivityEntity =
  | 'Property'
  | 'Customer'
  | 'Inquiry'
  | 'Appointment'
  | 'User'
  | 'Agent'
  | 'System';

export type ActivityLog = {
  id: string;
  user: string;
  userRole: string;
  action: ActivityAction;
  entity: ActivityEntity;
  entityName: string;
  description: string;
  timestamp: string;
  ipAddress: string;
};

export type ActivityLogStats = {
  total: number;
  today: number;
  created: number;
  updated: number;
  deleted: number;
};
