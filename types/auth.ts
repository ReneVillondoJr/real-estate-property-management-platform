export type DemoUser = {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'USER';
};

export type LoginFormValues = {
  email: string;
  password: string;
};
