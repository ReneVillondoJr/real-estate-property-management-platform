export type CustomerStatus =
  | 'New'
  | 'Contacted'
  | 'Qualified'
  | 'Client'
  | 'Inactive';

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  status: CustomerStatus;
  propertyInterest: string;
  lastContact: string;
  createdAt: string;
};
