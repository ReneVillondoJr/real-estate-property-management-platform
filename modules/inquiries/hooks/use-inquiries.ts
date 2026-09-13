'use client';

import { useMemo, useState } from 'react';

import { inquiries } from '../data/inquiries';

import type { InquiryStatus } from '../types/inquiry';

export function useInquiries() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<InquiryStatus | 'All'>('All');

  const filteredInquiries = useMemo(() => {
    const query = search.trim().toLowerCase();

    return inquiries.filter((inquiry) => {
      const matchesSearch =
        !query ||
        inquiry.name.toLowerCase().includes(query) ||
        inquiry.email.toLowerCase().includes(query) ||
        inquiry.phone.toLowerCase().includes(query) ||
        inquiry.property.toLowerCase().includes(query) ||
        inquiry.type.toLowerCase().includes(query);

      const matchesStatus = status === 'All' || inquiry.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const stats = {
    total: inquiries.length,

    new: inquiries.filter((inquiry) => inquiry.status === 'New').length,

    contacted: inquiries.filter((inquiry) => inquiry.status === 'Contacted')
      .length,

    qualified: inquiries.filter((inquiry) => inquiry.status === 'Qualified')
      .length,

    closed: inquiries.filter((inquiry) => inquiry.status === 'Closed').length,
  };

  return {
    inquiries: filteredInquiries,
    search,
    setSearch,
    status,
    setStatus,
    stats,
  };
}
