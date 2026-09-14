export type UserRole = 'ADMIN' | 'AGENT' | 'CUSTOMER';

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export async function getCurrentUser(): Promise<SessionUser | null> {
  if (typeof window === 'undefined') {
    return null;
  }

  const rawUser = window.localStorage.getItem('real-estate-demo-user');

  if (!rawUser) {
    return null;
  }

  try {
    const user = JSON.parse(rawUser) as Partial<SessionUser>;

    if (!user.email || !user.name || !user.role) {
      return null;
    }

    return {
      id: user.id ?? 'demo-user',
      name: user.name,
      email: user.email,
      role: user.role,
    };
  } catch {
    return null;
  }
}
