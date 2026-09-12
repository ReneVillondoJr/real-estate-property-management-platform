import type { ReactNode } from 'react';

export type AdminHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};
