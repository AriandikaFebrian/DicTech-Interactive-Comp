import { SetStateAction, useState } from 'react';

const LanguageDropdown = () => {
  const [selectedLang, setSelectedLang] = useState('id'); // default 'id' for Indonesia

  const handleLangChange = (lang: SetStateAction<string>) => {
    setSelectedLang(lang);
  };

  return (
    <div className="relative inline-block group">
      {/* Button to show the flag in circle */}
      <button className="ml-4 text-sm text-gray-700 dark:text-white hover:underline rounded-full p-2">
        {/* Conditionally render flag based on selected language */}
        {selectedLang === 'id' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="rounded-full">
            <path d="M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z" fill="#ea3323"></path>
            <path d="M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z" fill="#fff"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="rounded-full">
            <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect>
            <path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path>
          </svg>
        )}
      </button>

      {/* Dropdown Menu (will show on hover of the flag) */}
      <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <ul>
          <li onClick={() => handleLangChange('id')} className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <span>Bahasa Indonesia</span>
          </li>
          <li onClick={() => handleLangChange('en')} className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <span>English</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
