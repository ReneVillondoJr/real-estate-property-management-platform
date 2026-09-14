'use client';

import { useState } from 'react';

import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ScheduleViewingPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className='bg-[var(--background)]'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28'>
        {/* Header */}
        <div className='grid gap-8 border-b border-[var(--line)] pb-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:pb-16'>
          <div>
            <p className='sans text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--rust)]'>
              Private viewing
            </p>

            <div className='mt-6 flex items-center gap-4'>
              <span className='h-px w-10 bg-[var(--rust)]' />

              <span className='sans text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]'>
                By appointment
              </span>
            </div>
          </div>

          <div>
            <h1 className='display max-w-4xl text-5xl leading-[0.9] tracking-[-0.03em] sm:text-7xl lg:text-[7rem]'>
              Let&apos;s find
              <br />
              <i className='text-[var(--sage)]'>a time.</i>
            </h1>

            <p className='sans mt-7 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-[15px]'>
              Tell us what you&apos;d like to see and when you&apos;d prefer to
              visit. We&apos;ll take care of the details and follow up with a
              confirmed viewing time.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className='grid gap-14 pt-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:pt-16'>
          {/* Left information */}
          <aside className='lg:self-start'>
            <p className='sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]'>
              The experience
            </p>

            <div className='mt-7 space-y-7'>
              <div className='flex gap-4'>
                <div className='flex size-10 shrink-0 items-center justify-center border border-[var(--line)] bg-[var(--cream)]'>
                  <CalendarDays
                    size={16}
                    strokeWidth={1.5}
                    className='text-[var(--rust)]'
                  />
                </div>

                <div>
                  <p className='sans text-sm font-medium text-[var(--ink)]'>
                    Choose your preferred date
                  </p>

                  <p className='sans mt-1.5 max-w-xs text-xs leading-5 text-[var(--muted)]'>
                    Let us know when you&apos;d like to experience the property
                    in person.
                  </p>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex size-10 shrink-0 items-center justify-center border border-[var(--line)] bg-[var(--cream)]'>
                  <Clock3
                    size={16}
                    strokeWidth={1.5}
                    className='text-[var(--rust)]'
                  />
                </div>

                <div>
                  <p className='sans text-sm font-medium text-[var(--ink)]'>
                    We&apos;ll coordinate the details
                  </p>

                  <p className='sans mt-1.5 max-w-xs text-xs leading-5 text-[var(--muted)]'>
                    Your preferred time is a request. Our team will confirm
                    availability with you.
                  </p>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex size-10 shrink-0 items-center justify-center border border-[var(--line)] bg-[var(--cream)]'>
                  <MapPin
                    size={16}
                    strokeWidth={1.5}
                    className='text-[var(--rust)]'
                  />
                </div>

                <div>
                  <p className='sans text-sm font-medium text-[var(--ink)]'>
                    Experience the property
                  </p>

                  <p className='sans mt-1.5 max-w-xs text-xs leading-5 text-[var(--muted)]'>
                    We&apos;ll provide the confirmed location and viewing
                    details before your appointment.
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-10 border-t border-[var(--line)] pt-6'>
              <p className='sans text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]'>
                Need assistance?
              </p>

              <p className='sans mt-2.5 max-w-xs text-xs leading-5 text-[var(--muted)]'>
                Our team is available to help you with property details, timing,
                or any questions before your viewing.
              </p>

              <a
                href='tel:+15551234567'
                className='sans mt-4 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 text-xs font-medium uppercase tracking-[0.14em] text-[var(--ink)] transition-opacity hover:opacity-60'
              >
                Speak with the team
                <ArrowRight size={12} strokeWidth={1.5} />
              </a>
            </div>
          </aside>

          {/* Booking form */}
          <div>
            {sent ?
              <div className='relative overflow-hidden border border-[var(--line)] bg-[var(--cream)] p-8 sm:p-10 lg:p-14'>
                <div className='absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full border border-[var(--line)]' />

                <div className='relative'>
                  <div className='flex size-12 items-center justify-center rounded-full bg-[var(--ink)] text-white'>
                    <Check size={19} strokeWidth={1.6} />
                  </div>

                  <p className='sans mt-9 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--rust)]'>
                    Request received
                  </p>

                  <h2 className='display mt-3 max-w-xl text-5xl leading-[0.95] sm:text-6xl'>
                    We&apos;ll be
                    <br />
                    <i className='text-[var(--sage)]'>in touch.</i>
                  </h2>

                  <p className='sans mt-5 max-w-lg text-sm leading-7 text-[var(--muted)]'>
                    Thank you for reaching out. We&apos;ve received your viewing
                    request and a member of our team will contact you shortly to
                    confirm the appointment.
                  </p>

                  <button
                    type='button'
                    onClick={() => setSent(false)}
                    className='sans mt-8 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 text-xs font-medium uppercase tracking-[0.15em] text-[var(--ink)] transition-opacity hover:opacity-60'
                  >
                    Request another viewing
                    <ArrowRight size={12} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            : <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                {/* Section 01 */}
                <div>
                  <div className='flex items-end justify-between gap-6 border-b border-[var(--line)] pb-4'>
                    <div>
                      <p className='sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--rust)]'>
                        01
                      </p>

                      <h2 className='display mt-1.5 text-3xl leading-tight sm:text-4xl'>
                        About you.
                      </h2>
                    </div>

                    <p className='sans hidden text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:block'>
                      Your details
                    </p>
                  </div>

                  <div className='mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2'>
                    <div>
                      <Label
                        htmlFor='name'
                        className='sans text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]'
                      >
                        Full name
                      </Label>

                      <Input
                        id='name'
                        name='name'
                        required
                        placeholder='Your name'
                        className='sans mt-2.5 h-11 rounded-none border-0 border-b border-[var(--line)] bg-transparent px-0 text-sm shadow-none placeholder:text-[var(--muted)] focus-visible:border-[var(--ink)] focus-visible:ring-0'
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor='phone'
                        className='sans text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]'
                      >
                        Phone number
                      </Label>

                      <div className='relative'>
                        <Phone
                          size={14}
                          strokeWidth={1.5}
                          className='absolute bottom-2.5 left-0 text-[var(--muted)]'
                        />

                        <Input
                          id='phone'
                          name='phone'
                          required
                          type='tel'
                          placeholder='Your phone number'
                          className='sans mt-2.5 h-11 rounded-none border-0 border-b border-[var(--line)] bg-transparent pl-6 pr-0 text-sm shadow-none placeholder:text-[var(--muted)] focus-visible:border-[var(--ink)] focus-visible:ring-0'
                        />
                      </div>
                    </div>

                    <div className='sm:col-span-2'>
                      <Label
                        htmlFor='email'
                        className='sans text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]'
                      >
                        Email address
                      </Label>

                      <div className='relative'>
                        <Mail
                          size={14}
                          strokeWidth={1.5}
                          className='absolute bottom-2.5 left-0 text-[var(--muted)]'
                        />

                        <Input
                          id='email'
                          name='email'
                          required
                          type='email'
                          placeholder='you@example.com'
                          className='sans mt-2.5 h-11 rounded-none border-0 border-b border-[var(--line)] bg-transparent pl-6 pr-0 text-sm shadow-none placeholder:text-[var(--muted)] focus-visible:border-[var(--ink)] focus-visible:ring-0'
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 02 */}
                <div className='mt-14 border-t border-[var(--line)] pt-9'>
                  <div className='flex items-end justify-between gap-6 border-b border-[var(--line)] pb-4'>
                    <div>
                      <p className='sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--rust)]'>
                        02
                      </p>

                      <h2 className='display mt-1.5 text-3xl leading-tight sm:text-4xl'>
                        Plan your visit.
                      </h2>
                    </div>

                    <p className='sans hidden text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:block'>
                      Viewing details
                    </p>
                  </div>

                  <div className='mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2'>
                    <div className='sm:col-span-2'>
                      <Label
                        htmlFor='property'
                        className='sans text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]'
                      >
                        Property
                      </Label>

                      <Input
                        id='property'
                        name='property'
                        required
                        placeholder='Property name or address'
                        className='sans mt-2.5 h-11 rounded-none border-0 border-b border-[var(--line)] bg-transparent px-0 text-sm shadow-none placeholder:text-[var(--muted)] focus-visible:border-[var(--ink)] focus-visible:ring-0'
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor='date'
                        className='sans text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]'
                      >
                        Preferred date
                      </Label>

                      <Input
                        id='date'
                        name='date'
                        required
                        type='date'
                        className='sans mt-2.5 h-11 rounded-none border-0 border-b border-[var(--line)] bg-transparent px-0 text-sm shadow-none focus-visible:border-[var(--ink)] focus-visible:ring-0'
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor='time'
                        className='sans text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]'
                      >
                        Preferred time
                      </Label>

                      <Input
                        id='time'
                        name='time'
                        required
                        type='time'
                        className='sans mt-2.5 h-11 rounded-none border-0 border-b border-[var(--line)] bg-transparent px-0 text-sm shadow-none focus-visible:border-[var(--ink)] focus-visible:ring-0'
                      />
                    </div>

                    <div className='sm:col-span-2'>
                      <Label
                        htmlFor='message'
                        className='sans text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]'
                      >
                        Notes
                      </Label>

                      <Textarea
                        id='message'
                        name='message'
                        placeholder='Anything you would like us to know?'
                        className='sans mt-2.5 min-h-28 resize-none rounded-none border-0 border-b border-[var(--line)] bg-transparent px-0 text-sm shadow-none placeholder:text-[var(--muted)] focus-visible:border-[var(--ink)] focus-visible:ring-0'
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className='mt-10 flex flex-col items-stretch gap-5 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-end sm:justify-between'>
                  <div className='max-w-md'>
                    <p className='sans text-xs leading-5 text-[var(--muted)]'>
                      Your preferred date and time are subject to availability.
                      We&apos;ll contact you directly to confirm the
                      appointment.
                    </p>
                  </div>

                  <Button
                    type='submit'
                    className='group h-auto shrink-0 rounded-full bg-[var(--ink)] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-200  sm:px-7'
                  >
                    <span className='flex items-center gap-2'>
                      Request a viewing
                      <ArrowRight
                        size={13}
                        strokeWidth={1.5}
                        className='transition-transform duration-200 group-hover:translate-x-0.5'
                      />
                    </span>
                  </Button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
