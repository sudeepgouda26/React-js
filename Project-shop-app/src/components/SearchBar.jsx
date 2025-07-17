import React from 'react'

const SearchBar = () => {
  return (
   <div class="w-full max-w-md mx-48">
  <div class="flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md shadow-xl transition-all duration-300 focus-within:ring-2 ring-blue-500/40">
  
   
   
    <input
      type="text"
      placeholder="Search..."
      class="ml-3 w-full bg-transparent outline-none text-white placeholder-white/70"
    />
     <svg  class="w-5 h-5 text-white opacity-70" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
    </svg>
  </div>
</div>
  )
}

export default SearchBar
