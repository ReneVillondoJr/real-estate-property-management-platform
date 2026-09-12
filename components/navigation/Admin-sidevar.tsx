'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText } from 'lucide-react';

import { adminNavigationItems } from '@/constants/navigation-items';

export function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className='sans flex h-screen w-64 shrink-0 flex-col border-r border-white/10 bg-[var(--ink)] px-5 py-7 text-white'>
      {/* Brand */}
      <div>
        <Link
          href='/admin/dashboard'
          className='display text-2xl leading-none tracking-[-0.05em]'
        >
          Morrow
          <span className='text-[#b6c6b5]'>&</span>
          Co.
        </Link>

        <p className='mt-3 text-[9px] uppercase tracking-[0.2em] text-[#9eab9d]'>
          Operations
        </p>
      </div>

      {/* Navigation */}
      <nav className='mt-12 flex-1'>
        <p className='mb-4 px-3 text-[9px] uppercase tracking-[0.2em] text-white/40'>
          Management
        </p>

        <div className='space-y-1'>
          {adminNavigationItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'group flex items-center gap-3 px-3 py-2.5',
                  'text-[10px] uppercase tracking-[0.13em]',
                  'transition-all duration-200',
                  isActive ?
                    'bg-white/10 text-white'
                  : 'text-[#b8c5b5] hover:bg-white/5 hover:text-white',
                ].join(' ')}
              >
                <Icon
                  size={15}
                  strokeWidth={1.6}
                  className={[
                    'shrink-0 transition-colors',
                    isActive ? 'text-[#b6c6b5]' : (
                      'text-[#7f8c7f] group-hover:text-[#b6c6b5]'
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
      <div className='border-t border-white/10 pt-5'>
        <Link
          href='/'
          className='flex items-center gap-3 px-3 py-2.5 text-[10px] uppercase tracking-[0.13em] text-[#8f9b8f] transition-colors hover:text-white'
        >
          <FileText size={15} strokeWidth={1.6} />
          View Website
        </Link>
      </div>
    </aside>
  );
}
