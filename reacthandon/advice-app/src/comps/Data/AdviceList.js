// AdviceList.js
import React, { useState } from 'react';
import AdviceData from './AdviceData';

export default function AdviceList({ onSelectAdvice }) {
  const [category, setCategory] = useState('');

  const getRandomAdvice = (category) => {
    const advices = AdviceData[category];
    if (!advices || advices.length === 0) {
      return "No advice available for this category.";
    }
    const randomIndex = Math.floor(Math.random() * advices.length);
    return advices[randomIndex];
  };

  const handleGeneratedAdvice = () => {
    if (category) {
      const selectedAdvice = getRandomAdvice(category);
      onSelectAdvice(selectedAdvice);
    }
  };

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select category</option>
        <option value="Health">Health</option>
        <option value="Finance">Finance</option>
        <option value="Education">Education</option>
        <option value="Relationship">Relationship</option>
      </select>
      <button onClick={handleGeneratedAdvice} disabled={!category}>
        Get Advice
      </button>
    </div>
  );
}
