import type { UserRole } from './auth';
export const rolePermissions: Record<UserRole, string[]> = {
  ADMIN: ['manage:all'],
  AGENT: ['manage:properties', 'manage:appointments', 'read:customers'],
  CUSTOMER: ['read:properties', 'create:inquiries'],
};
export function can(role: UserRole, permission: string) {
  return (
    rolePermissions[role]?.includes('manage:all') ||
    rolePermissions[role]?.includes(permission) ||
    false
  );
}
