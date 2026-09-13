export type InquiryStatus =
  | 'New'
  | 'Contacted'
  | 'Qualified'
  | 'Closed'
  | 'Archived';

export type InquiryType =
  | 'Property inquiry'
  | 'Viewing request'
  | 'General inquiry'
  | 'Valuation request';

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: InquiryType;
  property: string;
  message: string;
  status: InquiryStatus;
  createdAt: string;
  lastContact: string;
};

export type InquiryStats = {
  total: number;
  new: number;
  contacted: number;
  qualified: number;
  closed: number;
};
