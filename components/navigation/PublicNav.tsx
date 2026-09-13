'use client';

import Link from 'next/link';

import { ArrowUpRight, Menu, X } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { publicNavigationItems } from '@/constants/navigation-items';

export function PublicNav() {
  return (
    <header className='sans border-b border-[var(--line)] bg-[var(--background)]'>
      <div className='mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12'>
        {/* Logo */}
        <Link
          href='/'
          className='display text-[1.65rem] leading-none tracking-[-0.06em]'
        >
          Morrow
          <span className='text-[var(--rust)]'>&</span>
          Co.
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden items-center gap-9 text-[13.5px] text-[var(--muted)] md:flex'>
          {publicNavigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='group relative py-1 transition-colors duration-300 hover:text-[var(--ink)]'
            >
              {item.label}
              <span className='absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[var(--ink)] transition-transform duration-300 group-hover:scale-x-100' />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href='/schedule-viewing'
          className='group hidden items-center gap-2 rounded-full border border-[var(--ink)] px-5 py-2 text-[13px] text-[var(--ink)] transition-colors duration-300 hover:border-[var(--rust)] hover:text-[var(--rust)] sm:flex'
        >
          <span>Book a viewing</span>

          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
          />
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger
            aria-label='Open navigation'
            className='flex h-10 w-10 items-center justify-center rounded-none transition-colors hover:bg-transparent md:hidden'
          >
            <Menu size={21} strokeWidth={1.5} />
          </SheetTrigger>

          <SheetContent
            side='right'
            className='w-full max-w-[420px] rounded-none border-l border-[var(--line)] bg-[var(--background)] p-0'
          >
            <div className='flex h-full flex-col'>
              {/* Mobile Header */}
              <div className='flex items-center justify-between border-b border-[var(--line)] px-6 py-5'>
                <Link
                  href='/'
                  className='display text-[1.45rem] leading-none tracking-[-0.06em]'
                >
                  Morrow
                  <span className='text-[var(--rust)]'>&</span>
                  Co.
                </Link>

                <SheetClose
                  aria-label='Close navigation'
                  className='flex h-10 w-10 items-center justify-center rounded-none transition-colors hover:bg-transparent'
                >
                  <X size={20} strokeWidth={1.5} />
                </SheetClose>
              </div>

              {/* Navigation */}
              <nav className='flex flex-1 flex-col px-6 py-10'>
                <p className='mb-6 text-[12px] text-[var(--muted)]'>Explore</p>

                <div className='flex flex-col'>
                  {publicNavigationItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className='group flex items-center gap-5 border-b border-[var(--line)] py-5 transition-colors duration-300 first:border-t hover:text-[var(--rust)]'
                      >
                        <span className='w-5 text-[10px] text-[var(--muted)]/60'>
                          {item.number}
                        </span>

                        <span className='display text-[1.9rem] leading-none tracking-[-0.03em]'>
                          {item.label}
                        </span>

                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                          className='ml-auto opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100'
                        />
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </nav>

              {/* Mobile CTA */}
              <div className='border-t border-[var(--line)] px-6 py-6'>
                <SheetClose asChild>
                  <Link
                    href='/schedule-viewing'
                    className='group flex items-center justify-center gap-2 rounded-full border border-[var(--ink)] py-3 text-[13px] text-[var(--ink)] transition-colors duration-300 hover:border-[var(--rust)] hover:text-[var(--rust)]'
                  >
                    <span>Book a private viewing</span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    />
                  </Link>
                </SheetClose>

                <p className='mt-5 text-[11px] leading-relaxed text-[var(--muted)]'>
                  Morrow & Co.
                  <br />
                  Property advisory & representation
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
