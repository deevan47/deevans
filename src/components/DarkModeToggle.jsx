import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={() => setDark(!dark)}
        className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded shadow"
      >
        {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}
