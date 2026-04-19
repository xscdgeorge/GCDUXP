import React from 'react';
import { ArrowLeft, Play, Type, Palette, Layout, MousePointer2, Layers, Zap } from 'lucide-react';
import Footer from './Footer';

interface StylesProps {
  onBack: () => void;
}

const Styles: React.FC<StylesProps> = ({ onBack }) => {
  return (
    <div className="bg-zinc-950 min-h-screen text-gray-100 font-sans selection:bg-white selection:text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full h-16 px-8 flex justify-between items-center bg-black/70 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <span className="text-[20px] font-serif font-medium tracking-[0.01em]">Styles</span>
        </div>
        <span className="text-[14px] font-mono text-zinc-500 uppercase tracking-widest">Brand Manual v1.0</span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-32 space-y-32">
        {/* Intro */}
        <section>
          <h1 className="text-[64px] font-serif leading-tight mb-8">Brand Manual</h1>
          <p className="text-[24px] font-light text-gray-400 max-w-2xl leading-relaxed">
            A guide to the visual language, design principles, and components that define the George Davis digital identity.
          </p>
        </section>

        {/* Logo & Mark */}
        <section className="scroll-mt-32" id="logo">
          <div className="flex items-center gap-3 mb-12">
            <Layout className="text-orange-500 w-6 h-6" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">Logo & Signature</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-12 flex flex-col items-center justify-center gap-12">
            <div className="text-[64px] font-serif font-medium text-white">
              George<span className="text-orange-500">.</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
              <div className="space-y-4">
                <p className="text-sm text-zinc-400">The "George." logotype represents clarity and confidence. The orange terminal indicates a spark of innovation and a definitive end to every project's delivery.</p>
              </div>
              <div className="space-y-4 font-mono text-xs text-zinc-500 uppercase">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Font Famly</span>
                  <span className="text-white">Playfair Display</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Weight</span>
                  <span className="text-white">Medium (500)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Dot Color</span>
                  <span className="text-white">#f97316</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="scroll-mt-32" id="colors">
          <div className="flex items-center gap-3 mb-12">
            <Palette className="text-orange-500 w-6 h-6" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">Color Palette</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Core Black', hex: '#000000', label: 'Background' },
              { name: 'Zinc 950', hex: '#09090b', label: 'Surfaces' },
              { name: 'Orange 500', hex: '#f97316', label: 'Accent' },
              { name: 'Warm Beige', hex: '#efe3d0', label: 'Light Mode Surface' },
              { name: 'Text High', hex: '#f3f4f6', label: 'High Emphasis' },
              { name: 'Text Mid', hex: '#9ca3af', label: 'Medium Emphasis' },
              { name: 'Warm Brown', hex: '#433422', label: 'Light Mode Text' },
              { name: 'Muted Brown', hex: '#6b5a45', label: 'Light Mode Subtext' },
            ].map((color) => (
              <div key={color.hex} className="group space-y-4">
                <div 
                  className="h-32 w-full rounded-2xl border border-white/10 transition-transform group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <h4 className="font-medium text-white">{color.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm font-mono text-zinc-500 uppercase">{color.hex}</span>
                    <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-zinc-400 capitalize">{color.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="scroll-mt-32" id="typography">
          <div className="flex items-center gap-3 mb-12">
            <Type className="text-orange-500 w-6 h-6" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">Typography System</h2>
          </div>
          <div className="space-y-16">
            <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden">
              <div className="p-12 border-b border-white/5">
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-8">Primary Serif / Playfair Display</span>
                <div className="space-y-4">
                  <h3 className="text-[72px] font-serif leading-none italic">Curating Intentionality.</h3>
                  <h3 className="text-[72px] font-serif leading-none font-medium">George Davis</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
                <div className="p-12 bg-zinc-950">
                  <span className="text-xs font-mono text-zinc-500 uppercase block mb-8">Secondary Mono / Space Grotesk</span>
                  <div className="font-mono space-y-4">
                    <p className="text-3xl tracking-tight">ACCESSIBILITY PROTOCOL 01</p>
                    <p className="text-xl text-zinc-400">Winning back lost customers</p>
                  </div>
                </div>
                <div className="p-12 bg-zinc-950">
                  <span className="text-xs font-mono text-zinc-500 uppercase block mb-8">System Sans / Interface Standard</span>
                  <div className="font-sans space-y-4">
                    <p className="text-xl leading-relaxed">
                      UX Leader with 15 years of experience bridging the gap between customer needs, business goals and technical feasibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="scroll-mt-32" id="ui">
          <div className="flex items-center gap-3 mb-12">
            <MousePointer2 className="text-orange-500 w-6 h-6" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">UI Components</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-sm font-semibold text-white">Actionable Triggers</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-orange-500 hover:text-white transition-all">
                  Primary Action
                </button>
                <button className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:border-orange-500 hover:text-orange-500 transition-all">
                  Secondary
                </button>
                <button className="p-3 rounded-full border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 transition-all">
                  <ArrowLeft size={20} />
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <h4 className="text-sm font-semibold text-white">Card Architecture</h4>
              <div className="p-8 bg-zinc-900/50 border border-white/10 rounded-[24px] hover:border-orange-500/50 transition-colors">
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-6">
                  <Layers size={24} />
                </div>
                <h5 className="text-lg font-medium mb-2 font-serif italic text-white leading-none pt-4">Strategic Frameworks</h5>
                <p className="text-sm text-zinc-400">Coaching, empowerment, and strategic scalability across diverse product ecosystems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Iconography */}
        <section className="scroll-mt-32" id="icons">
          <div className="flex items-center gap-3 mb-12">
            <Layers className="text-orange-500 w-6 h-6" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">Iconography Strategy</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-12">
            <p className="text-zinc-400 mb-12 max-w-2xl">
              We leverage the Lucide icon library for its geometric precision and consistent stroke weight (2px), aligning perfectly with the technical and modern feel of the interface.
            </p>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
              {[Layers, Palette, Type, MousePointer2, Layout, ArrowLeft, Play, Zap].map((Icon, i) => (
                <div key={i} className="aspect-square bg-zinc-900 rounded-xl flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:bg-white/5 transition-all">
                  <Icon size={32} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Styles;
