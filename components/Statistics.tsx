
import React from 'react';

const StatBox = ({ label, value, sub }: { label: string, value: string, sub: string }) => (
  <div className="flex flex-col space-y-2">
    <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">{label}</span>
    <div className="flex items-baseline space-x-2">
      <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter">{value}</h4>
      <span className="text-blue-500 font-bold text-lg">{sub}</span>
    </div>
  </div>
);

const Statistics: React.FC = () => {
  return (
    <section className="py-20 relative border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 items-center">
          <StatBox label="Managed Spend" value="$85m" sub="yearly" />
          <StatBox label="Total Impressions" value="5.3B" sub="served" />
          <StatBox label="Daily Signals" value="1.2B" sub="events" />
          <div className="glass-card p-6 rounded-2xl flex items-center justify-between border-blue-500/20 bg-blue-500/5">
            <div>
              <p className="text-white font-bold text-sm">Real-time Pulse</p>
              <p className="text-blue-400 text-xs font-medium">98.4% Signal Utilization</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-blue-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
