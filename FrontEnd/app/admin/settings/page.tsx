"use client";

import { useState, useEffect } from 'react';
import PageHeader from '@/components/admin/PageHeader';
import { FiSettings } from 'react-icons/fi';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return <PageHeader icon={FiSettings} title="Settings Management" />;
}