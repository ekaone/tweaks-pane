import React, { useState, useEffect } from 'react';
import { useTweaks } from 'use-tweaks';

interface AppProps {}

// interface Factor {
//   value: number;
//   min: number;
//   max: number;
// }

// interface FactorProps {
//   speed: number;
//   factor: Factor;
// }

function App({}: AppProps) {
  const [c, setC] = useState('#fff');
  const [size, setSize] = useState(12);
  const { speed, factor, color } = useTweaks({
    speed: 1,
    factor: { value: 1, min: 10, max: 100 },
    color: '#0f0',
  });

  useEffect(() => {
    setC(color.value);
    setSize(Math.round(factor.value));
  }, [factor.value, color.value]);

  console.log(Math.round(factor.value));

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: c,
      }}
    >
      <div style={{ fontSize: size }}>Eka</div>
    </div>
  );
}

export default App;
