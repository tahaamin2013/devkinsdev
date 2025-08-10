'use client'

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="relative mb-12 max-w-2xl mx-auto">
      <Input
        type="text"
        placeholder="Search tools..."
        value={query}
        onChange={handleSearch}
        className="pl-10 pr-4 py-3 w-full text-lg rounded-full shadow-md focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
    </div>
  );
};

export default SearchBar;

