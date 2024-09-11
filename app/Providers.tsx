'use client';
import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';

export default function Providers({
  children,
}: {
  readonly children: React.ReactNode;
}): React.ReactNode {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      {children}
    </PrimeReactProvider>
  );
}
