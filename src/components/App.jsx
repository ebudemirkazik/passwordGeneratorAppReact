import "./App.css";
import PasswordGenerator from "./PasswordGenerator";
import React from 'react';
import { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <PasswordGenerator />
    </div>
  );
}

export default App;
