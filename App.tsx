
import React from 'react';
import LocationAndLanguageSelector from './components/LocationAndLanguageSelector';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-stone-50 items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden">
        <LocationAndLanguageSelector />
      </div>
    </div>
  );
};

export default App;
