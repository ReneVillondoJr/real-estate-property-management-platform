export type UserRole = 'ADMIN' | 'AGENT' | 'CUSTOMER';
export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};
export async function getCurrentUser(): Promise<SessionUser | null> {
  return null;
}
