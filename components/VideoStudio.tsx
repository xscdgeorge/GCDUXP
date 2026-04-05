import React, { useState, useEffect } from 'react';

export const VideoStudio = () => {
  const [scale, setScale] = useState(100);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [radius, setRadius] = useState(28);
  const [containerWidth, setContainerWidth] = useState(280);
  const [containerHeight, setContainerHeight] = useState(600);
  const [videoWidth, setVideoWidth] = useState(280);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--video-scale', (scale / 100).toString());
    document.documentElement.style.setProperty('--video-tx', `${offsetX}%`);
    document.documentElement.style.setProperty('--video-ty', `${offsetY}%`);
    document.documentElement.style.setProperty('--video-radius', `${radius}px`);
    document.documentElement.style.setProperty('--video-width', `${containerWidth}px`);
    document.documentElement.style.setProperty('--video-height', `${containerHeight}px`);
    document.documentElement.style.setProperty('--video-content-width', `${videoWidth}px`);
  }, [scale, offsetX, offsetY, radius, containerWidth, containerHeight, videoWidth]);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-4 z-[9999] bg-orange-600 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-2xl border border-white/20 hover:scale-105 transition-all"
      >
        📹 Video Studio
      </button>
    );
  }

  return (
    <div className="fixed top-20 right-4 z-[9999] bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-[11px] font-mono w-72 backdrop-blur-3xl border border-gray-200 dark:border-zinc-800 transition-all text-gray-900 dark:text-gray-100 max-h-[80vh] overflow-y-auto no-scrollbar">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          <h3 className="font-bold uppercase tracking-widest text-[10px]">Video Studio</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">✖</button>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 dark:text-gray-400">Container Width (Crop W)</span>
            <span className="font-bold text-orange-500">{containerWidth}px</span>
          </div>
          <input type="range" min="100" max="600" value={containerWidth} onChange={(e) => setContainerWidth(Number(e.target.value))} className="w-full accent-orange-500 h-1 bg-gray-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 dark:text-gray-400">Container Height (Crop H)</span>
            <span className="font-bold text-orange-500">{containerHeight}px</span>
          </div>
          <input type="range" min="100" max="1000" value={containerHeight} onChange={(e) => setContainerHeight(Number(e.target.value))} className="w-full accent-orange-500 h-1 bg-gray-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 dark:text-gray-400">Video Render Width</span>
            <span className="font-bold text-orange-500">{videoWidth}px</span>
          </div>
          <input type="range" min="200" max="1000" value={videoWidth} onChange={(e) => setVideoWidth(Number(e.target.value))} className="w-full accent-orange-500 h-1 bg-gray-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 dark:text-gray-400">Zoom (Extra Scale)</span>
            <span className="font-bold text-orange-500">{scale}%</span>
          </div>
          <input type="range" min="100" max="300" value={scale} onChange={(e) => setScale(Number(e.target.value))} className="w-full accent-orange-500 h-1 bg-gray-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
        </div>

        <div>
          <div className="flex justify-between mb-2 text-[10px] text-gray-400 uppercase">Fine Tuning (Translate)</div>
          <div className="grid grid-cols-1 gap-4 mt-3">
             <div>
                <label className="flex justify-between mb-1 text-[9px]">Offset X: {offsetX}%</label>
                <input type="range" min="-100" max="100" value={offsetX} onChange={(e) => setOffsetX(Number(e.target.value))} className="w-full accent-gray-500 h-1 bg-gray-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
             </div>
             <div>
                <label className="flex justify-between mb-1 text-[9px]">Offset Y: {offsetY}%</label>
                <input type="range" min="-100" max="100" value={offsetY} onChange={(e) => setOffsetY(Number(e.target.value))} className="w-full accent-gray-500 h-1 bg-gray-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
             </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500 dark:text-gray-400">Corner Radius</span>
            <span className="font-bold text-orange-500">{radius}px</span>
          </div>
          <input type="range" min="0" max="100" value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="w-full accent-orange-500 h-1 bg-gray-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-100 dark:border-zinc-800">
        <div className="bg-gray-50 dark:bg-zinc-950 p-4 rounded-xl border border-gray-100 dark:border-white/5">
           <div className="text-[9px] text-gray-400 mb-2 uppercase tracking-widest font-bold">Copy this config:</div>
           <code className="text-orange-600 dark:text-orange-400 text-[10px] break-all leading-relaxed bg-transparent p-0 block">
             Container Max-Width: {containerWidth}px;<br/>
             Container Height: {containerHeight}px;<br/>
             Video Render Width: {videoWidth}px;<br/>
             Radius: {radius}px;<br/>
             Scale/Translate: {scale / 100} / {offsetX}% {offsetY}%
           </code>
        </div>
      </div>
    </div>
  );
};
