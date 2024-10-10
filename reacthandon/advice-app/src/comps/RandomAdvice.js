import React, { useState } from 'react';
import AdviceRandomList from './Data/AdviceRandomList';

export default function RandomAdvice() {
  const [advice, setAdvice] = useState(''); // Define both advice and setAdvice

  return (
    <div>
      <p>{advice}</p>
      <AdviceRandomList onSelectAdvice={setAdvice} />
    </div>
  );
}
