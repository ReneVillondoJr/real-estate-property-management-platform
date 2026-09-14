'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText } from 'lucide-react';

import { AdminLogout } from '@/components/login/admin-logout';
import { adminNavigationItems } from '@/constants/navigation-items';

export function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className='fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col border-r border-border bg-sidebar px-5 py-7 text-sidebar-foreground'>
      {/* Brand */}
      <div className='shrink-0'>
        <Link
          href='/admin/dashboard'
          className='font-serif text-[22px] leading-none tracking-[-0.02em] text-foreground'
        >
          Morrow <span className='text-primary'>&</span> Co.
        </Link>

        <p className='mt-2.5 text-[11px] text-muted-foreground'>Operations</p>
      </div>

      <div className='mt-8 h-px shrink-0 bg-border' />

      {/* Navigation */}
      <nav className='mt-8 min-h-0 flex-1 overflow-y-auto'>
        <p className='mb-3 px-3 text-[11px] text-muted-foreground'>
          Management
        </p>

        <div className='space-y-0.5'>
          {adminNavigationItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-[13px]',
                  'transition-colors duration-150',
                  isActive ?
                    'bg-accent text-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                ].join(' ')}
              >
                {isActive && (
                  <span className='absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-primary' />
                )}

                <Icon
                  size={16}
                  strokeWidth={1.6}
                  className={[
                    'shrink-0 transition-colors',
                    isActive ? 'text-primary' : (
                      'text-muted-foreground group-hover:text-primary'
                    ),
                  ].join(' ')}
                />

                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className='mt-5 shrink-0 border-t border-border pt-5'>
        <Link
          href='/'
          className='flex items-center gap-3 rounded-md px-3 py-2.5 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground'
        >
          <FileText size={16} strokeWidth={1.6} />
          View website
        </Link>

        <div className='mt-3'>
          <AdminLogout className='w-full justify-center' />
        </div>
      </div>
    </aside>
  );
}
