import React, { useState, useEffect } from 'react';

export const GradientTool = () => {
  const [bStop, setBStop] = useState(40);
  const [mOpac, setMOpac] = useState(80);
  const [tOpac, setTOpac] = useState(20);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const gradient = `linear-gradient(to top, rgba(0,0,0,1) ${bStop}%, rgba(0,0,0,${mOpac/100}) 60%, rgba(0,0,0,${tOpac/100}) 100%)`;
    document.documentElement.style.setProperty('--mobile-hero-gradient', gradient);
  }, [bStop, mOpac, tOpac]);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 bg-black text-white px-4 py-2 rounded-full text-xs font-sans shadow-xl border border-white/20 hover:scale-105 transition-transform"
      >
        🛠 Tune Mobile Gradient
      </button>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/95 p-5 rounded-2xl shadow-2xl text-xs font-sans text-black w-72 backdrop-blur-xl border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold uppercase tracking-wider text-gray-800">Gradient Tweaker</h3>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black">✖</button>
      </div>
      
      <div className="mb-6">
        <label className="flex justify-between mb-2">
          <span className="text-gray-600">Solid Black Height (%)</span>
          <span className="font-bold">{bStop}%</span>
        </label>
        <input type="range" min="0" max="100" value={bStop} onChange={(e) => setBStop(Number(e.target.value))} className="w-full accent-orange-500" />
      </div>

      <div className="mb-6">
        <label className="flex justify-between mb-2">
          <span className="text-gray-600">Midpoint Opacity</span>
          <span className="font-bold">{mOpac}%</span>
        </label>
        <input type="range" min="0" max="100" value={mOpac} onChange={(e) => setMOpac(Number(e.target.value))} className="w-full accent-orange-500" />
      </div>

      <div className="mb-6">
        <label className="flex justify-between mb-2">
          <span className="text-gray-600">Top Opacity</span>
          <span className="font-bold">{tOpac}%</span>
        </label>
        <input type="range" min="0" max="100" value={tOpac} onChange={(e) => setTOpac(Number(e.target.value))} className="w-full accent-orange-500" />
      </div>

      <div className="pt-4 border-t border-gray-200 mt-2 text-gray-500 text-[11px] leading-snug">
        Adjust these sliders to view realtime changes. <strong className="text-black">Make sure your window is sized down to mobile to see it!</strong> When perfect, tell me your numbers.
      </div>
    </div>
  );
};
