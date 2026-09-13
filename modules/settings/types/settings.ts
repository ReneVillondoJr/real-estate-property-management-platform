import type { LucideIcon } from 'lucide-react';

export type SettingsSectionId =
  | 'general'
  | 'profile'
  | 'notifications'
  | 'security'
  | 'team'
  | 'danger';

export interface SettingsNavItem {
  id: SettingsSectionId;
  label: string;
  description: string;
  icon: LucideIcon;
}

export type SaveState = 'idle' | 'dirty' | 'saving' | 'saved' | 'error';

export interface GeneralSettings {
  businessName: string;
  supportEmail: string;
  phone: string;
  timezone: string;
  currency: string;
}

export interface ProfileSettings {
  name: string;
  title: string;
  email: string;
  avatarUrl: string | null;
}

export type NotificationChannel = 'email' | 'sms' | 'push';

export interface NotificationPreference {
  id: string;
  label: string;
  description: string;
  channels: Record<NotificationChannel, boolean>;
}

export interface Session {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  current: boolean;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  lastPasswordChange: string;
  sessions: Session[];
}

export type TeamRole = 'admin' | 'editor' | 'viewer';
export type TeamStatus = 'active' | 'invited';

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: TeamRole;
  status: TeamStatus;
  avatarUrl: string | null;
}
export interface FieldRowProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

export interface SaveBarProps {
  state: SaveState;
  onSave: () => void;
  onDiscard?: () => void;
}

export interface SectionCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export interface ToggleFieldProps {
  label: string;
  description?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}
