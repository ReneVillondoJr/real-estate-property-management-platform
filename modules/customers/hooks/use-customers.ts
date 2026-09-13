'use client';

import { useMemo, useState } from 'react';

import { customers } from '../data/customers';

import type { CustomerStatus } from '../types/customer';

export function useCustomers() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<CustomerStatus | 'All'>('All');

  const filteredCustomers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return customers.filter((customer) => {
      const matchesSearch =
        !query ||
        customer.name.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.phone.toLowerCase().includes(query) ||
        customer.propertyInterest.toLowerCase().includes(query);

      const matchesStatus = status === 'All' || customer.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const stats = {
    total: customers.length,
    new: customers.filter((customer) => customer.status === 'New').length,
    qualified: customers.filter((customer) => customer.status === 'Qualified')
      .length,
    clients: customers.filter((customer) => customer.status === 'Client')
      .length,
  };

  return {
    customers: filteredCustomers,
    search,
    setSearch,
    status,
    setStatus,
    stats,
  };
}
