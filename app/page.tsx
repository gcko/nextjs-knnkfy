'use client';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

export default function Home() {
  const lang = [
    { label: 'English', value: 'en' },
    { label: 'Arabic', value: 'ar' },
  ];

  const [selectLanguage, setSelectLanguage] = useState(null);
  return (
    <main className="bg-white p-8 rounded-xl mb-4 flex justify-center">
      <Dropdown
        value={selectLanguage}
        onChange={(e) => setSelectLanguage(e.value)}
        options={lang}
        placeholder="Select a Language"
        className="w-full md:w-14rem"
      />
    </main>
  );
}
