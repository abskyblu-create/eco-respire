/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Droplets, 
  Home, 
  TrendingUp, 
  Activity, 
  Wind,
  Tractor,
  Cpu,
  Database,
  BarChart3,
  LayoutDashboard,
  History,
  Info,
  Globe,
  ShieldCheck,
  MapPin,
  Train,
  Bus,
  Car,
  Navigation,
  Leaf,
  Recycle,
  Sprout,
  Scale,
  Lightbulb,
  Users,
  Layers,
  Radar,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Target,
  Clock,
  HelpCircle,
  Brain,
  MessageSquare,
  ShieldAlert,
  Heart,
  Mountain,
  Vote,
  Gavel,
  Calendar,
  Server,
  Building2,
  ShoppingBag,
  Wheat,
  Hammer,
  Smartphone
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar as RechartsRadar
} from 'recharts';

// --- Types ---
interface IoTData {
  gasLevel: number; // 0 to 100
  manureWeight: number; // in kg
  electricityOutput: number; // in kW
  gridExport: number; // in kW
  tokens: number;
}

interface HistoryPoint {
  time: string;
  gas: number;
  energy: number;
  manure: number;
}

// --- Components ---

const IoTDisplay = ({ data }: { data: IoTData }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-zinc-900/90 text-white p-3 rounded-2xl border border-white/10 shadow-2xl w-40 backdrop-blur-sm"
  >
    <div className="flex items-center gap-2 mb-2">
      <Cpu className="text-emerald-400" size={12} />
      <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">IoT Sensor</span>
    </div>
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-[8px] text-zinc-500 uppercase">Methane</span>
        <span className="text-[10px] font-mono text-emerald-400">{data.gasLevel.toFixed(1)}%</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[8px] text-zinc-500 uppercase">Load</span>
        <span className="text-[10px] font-mono text-amber-400">{data.manureWeight.toFixed(0)}kg</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[8px] text-zinc-500 uppercase">Output</span>
        <span className="text-[10px] font-mono text-blue-400">{data.electricityOutput.toFixed(1)}kW</span>
      </div>
    </div>
  </motion.div>
);

const DataCentre = () => (
  <motion.div 
    className="bg-zinc-800 p-6 rounded-[32px] border border-white/10 shadow-xl flex flex-col items-center gap-3 w-48"
    whileHover={{ scale: 1.05 }}
  >
    <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
      <Server size={32} />
    </div>
    <div className="text-center">
      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Intelligence Hub</div>
      <div className="text-sm font-bold text-white">Data Centre</div>
    </div>
    <div className="flex gap-1 mt-2">
      {[1, 2, 3].map(i => (
        <motion.div 
          key={i}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
          className="w-1 h-3 bg-blue-400 rounded-full"
        />
      ))}
    </div>
  </motion.div>
);

const GovernmentOffice = () => (
  <motion.div 
    className="bg-white p-6 rounded-[32px] border border-zinc-200 shadow-xl flex flex-col items-center gap-3 w-48"
    whileHover={{ scale: 1.05 }}
  >
    <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600">
      <Building2 size={32} />
    </div>
    <div className="text-center">
      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Municipality</div>
      <div className="text-sm font-bold text-zinc-800">Gov Office</div>
    </div>
    <div className="mt-2 px-3 py-1 bg-indigo-50 rounded-full text-[8px] font-bold text-indigo-600 uppercase tracking-widest">
      Policy Engine
    </div>
  </motion.div>
);

const GroceryShop = () => (
  <motion.div 
    className="bg-white p-6 rounded-[32px] border border-zinc-200 shadow-xl flex flex-col items-center gap-3 w-40"
    whileHover={{ scale: 1.05 }}
  >
    <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600">
      <ShoppingBag size={24} />
    </div>
    <div className="text-center">
      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Local Market</div>
      <div className="text-sm font-bold text-zinc-800">Grocery</div>
    </div>
  </motion.div>
);

const AgriSupply = () => (
  <motion.div 
    className="bg-white p-6 rounded-[32px] border border-zinc-200 shadow-xl flex flex-col items-center gap-3 w-40"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex gap-2">
      <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
        <Wheat size={20} />
      </div>
      <div className="p-2 bg-zinc-100 rounded-xl text-zinc-600">
        <Hammer size={20} />
      </div>
    </div>
    <div className="text-center">
      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Supply Chain</div>
      <div className="text-sm font-bold text-zinc-800">Agri Seed & Equip</div>
    </div>
  </motion.div>
);

const SystemFlowConnector = ({ 
  from, 
  to, 
  label, 
  color = 'zinc', 
  duration = 2, 
  className = "",
  labelOffset = -14
}: { 
  from: { x: number, y: number }, 
  to: { x: number, y: number }, 
  label: string, 
  color?: 'amber' | 'blue' | 'indigo' | 'emerald' | 'zinc', 
  duration?: number,
  className?: string,
  labelOffset?: number
}) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  const length = Math.sqrt(dx * dx + dy * dy);

  const colors = {
    amber: { line: 'bg-amber-200/50', particle: 'bg-amber-500', shadow: 'shadow-[0_0_8px_rgba(245,158,11,0.5)]', text: 'text-amber-600' },
    blue: { line: 'bg-blue-200/50', particle: 'bg-blue-500', shadow: 'shadow-[0_0_8px_rgba(59,130,246,0.5)]', text: 'text-blue-600' },
    indigo: { line: 'bg-indigo-200/50', particle: 'bg-indigo-500', shadow: 'shadow-[0_0_8px_rgba(99,102,241,0.5)]', text: 'text-indigo-600' },
    emerald: { line: 'bg-emerald-200/50', particle: 'bg-emerald-500', shadow: 'shadow-[0_0_8px_rgba(16,185,129,0.5)]', text: 'text-emerald-600' },
    zinc: { line: 'bg-zinc-200/50', particle: 'bg-zinc-500', shadow: 'shadow-[0_0_8px_rgba(113,113,122,0.5)]', text: 'text-zinc-600' },
  };

  const c = colors[color];

  return (
    <div 
      className={`absolute pointer-events-none z-10 ${className}`}
      style={{ 
        left: from.x, 
        top: from.y, 
        width: length, 
        transform: `rotate(${angle}deg)`,
        transformOrigin: '0 50%'
      }}
    >
      {/* The Line */}
      <div className={`h-[1px] w-full ${c.line} relative`}>
        {/* The Moving Particle */}
        <motion.div 
          className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${c.particle} ${c.shadow}`}
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        />
        
        {/* The Label - Counter rotated to stay horizontal */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
          style={{ 
            top: `${labelOffset}px`,
            transform: `rotate(${-angle}deg)` 
          }}
        >
          <span className={`text-[7px] font-bold uppercase tracking-tighter ${c.text} bg-white/95 px-1.5 py-0.5 rounded-sm border border-zinc-100 shadow-sm`}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

const SystemConnector = ({ direction = 'down', label, color = 'zinc-300', className = "" }: { direction?: 'up' | 'down' | 'left' | 'right', label: string, color?: string, className?: string }) => {
  const isVertical = direction === 'up' || direction === 'down';
  const pulseColor = color.includes('-') ? color.split('-')[0] : 'indigo';
  
  return (
    <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} items-center justify-center gap-3 ${className}`}>
      {direction === 'up' && <ArrowUp size={12} className={`text-${color}`} />}
      {direction === 'left' && <ArrowLeft size={12} className={`text-${color}`} />}
      
      <div className={`text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 ${isVertical ? 'vertical-text' : ''}`}>
        {label}
      </div>
      
      <div className={`${isVertical ? 'w-px h-24' : 'w-24 h-px'} bg-zinc-200 relative overflow-hidden`}>
        <motion.div 
          className={`absolute ${isVertical ? 'w-1 h-6 left-1/2 -translate-x-1/2' : 'w-6 h-1 top-1/2 -translate-y-1/2'} rounded-full bg-${pulseColor}-500 shadow-[0_0_8px_${pulseColor}]`}
          animate={
            direction === 'down' ? { y: [-24, 96] } : 
            direction === 'up' ? { y: [96, -24] } : 
            direction === 'right' ? { x: [-24, 96] } : 
            { x: [96, -24] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {direction === 'down' && <ArrowDown size={12} className={`text-${color}`} />}
      {direction === 'right' && <ArrowRight size={12} className={`text-${color}`} />}
    </div>
  );
};

const FeederBelt = ({ active }: { active: boolean }) => (
  <div className="relative w-full h-8 bg-zinc-200 rounded-full overflow-hidden border border-zinc-300">
    <motion.div 
      className="absolute top-0 left-0 h-full flex gap-4 items-center px-4"
      animate={active ? { x: [-100, 0] } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-4 h-4 bg-amber-900/40 rounded-sm rotate-45" />
          <div className="w-1 h-1 bg-amber-900/20 rounded-full" />
        </div>
      ))}
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 via-transparent to-zinc-200 pointer-events-none" />
  </div>
);

const Digester = ({ gasLevel, manureLevel }: { gasLevel: number, manureLevel: number }) => {
  const thresholds = [25, 50, 75, 90];
  
  return (
    <div className="relative w-32 h-48">
      {/* Outer Container */}
      <div className="absolute inset-0 border-4 border-zinc-700 rounded-t-[32px] rounded-b-lg overflow-hidden bg-zinc-800 shadow-inner">
        {/* Threshold Markers */}
        {thresholds.map((t) => (
          <div 
            key={t}
            className="absolute left-0 right-0 border-t border-zinc-600/30 z-10 flex items-center px-1"
            style={{ bottom: `${t}%` }}
          >
            <span className="text-[6px] font-mono text-zinc-500 opacity-50">{t}%</span>
            {manureLevel >= t && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-auto w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_5px_#34d399]"
              />
            )}
          </div>
        ))}

        {/* Manure Level */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-amber-900/80"
          animate={{ height: `${manureLevel}%` }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-amber-800/50 blur-sm" />
        </motion.div>
        
        {/* Gas Level (above manure) */}
        <motion.div 
          className="absolute left-0 right-0 bg-emerald-500/20"
          animate={{ 
            bottom: `${manureLevel}%`,
            height: `${gasLevel}%` 
          }}
        >
          <div className="w-full h-full relative overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-emerald-400/40 rounded-full"
                animate={{
                  y: [-20, -100],
                  x: [Math.random() * 100, Math.random() * 100],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* IoT Sensor Tag */}
      <div className="absolute -top-4 -right-4 bg-zinc-900 border border-zinc-700 p-1 rounded-lg shadow-lg">
        <Database size={16} className="text-zinc-400" />
      </div>
    </div>
  );
};

const VillageHouse = ({ id, isActive }: { id: number, isActive: boolean }) => (
  <div className="relative group">
    <div className="w-32 h-24 bg-white rounded-lg border border-zinc-200 relative shadow-sm">
      {/* Roof */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-zinc-800 clip-path-triangle" 
           style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      
      {/* Windows */}
      <div className="flex justify-around mt-8 px-4">
        <motion.div 
          className={`w-6 h-6 rounded-sm border border-zinc-100 ${isActive ? 'bg-yellow-200 shadow-[0_0_10px_rgba(253,224,71,0.5)]' : 'bg-zinc-100'}`}
          animate={isActive ? { opacity: [0.7, 1, 0.7] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className={`w-6 h-6 rounded-sm border border-zinc-100 ${isActive ? 'bg-yellow-200 shadow-[0_0_10px_rgba(253,224,71,0.5)]' : 'bg-zinc-100'}`}
          animate={isActive ? { opacity: [0.7, 1, 0.7] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </div>
      
      {/* Label */}
      <div className="absolute -bottom-6 left-0 right-0 text-center text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
        House {id}
      </div>
    </div>
    
    {/* Power Line Connection */}
    {isActive && (
      <div className="absolute -left-12 top-1/2 w-12 h-[2px] bg-yellow-400/50">
        <motion.div 
          className="w-2 h-2 bg-yellow-400 rounded-full absolute top-1/2 -translate-y-1/2"
          animate={{ x: [0, 48] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    )}
  </div>
);

const AirQualityReport = () => (
  <div className="mt-12 space-y-12">
    <div className="border-t border-zinc-200 pt-12">
      <h2 className="text-4xl font-serif italic text-zinc-800 mb-6">Regional Context: Air Quality in Cremona & Po Valley</h2>
      <p className="text-zinc-600 max-w-3xl leading-relaxed">
        While our biogas system provides clean energy, the broader region faces significant air quality challenges. 
        Cremona, located in Italy's Po Valley, is one of Europe's most persistent air pollution hotspots. 
        Understanding the data behind PM2.5 and PM10 is crucial for regional health and policy.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Definitions */}
      <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
            <Info size={20} />
          </div>
          <h3 className="text-xl font-bold text-zinc-800">🧪 What are PM2.5 and PM10?</h3>
        </div>
        <div className="space-y-4">
          <div>
            <span className="font-bold text-zinc-800">PM10:</span>
            <p className="text-zinc-600 text-sm mt-1">Particulate matter ≤ 10 µm in diameter — can enter the lungs and cause health problems.</p>
          </div>
          <div>
            <span className="font-bold text-zinc-800">PM2.5:</span>
            <p className="text-zinc-600 text-sm mt-1">Fine particulate matter ≤ 2.5 µm — more harmful because it penetrates deep into the lungs and bloodstream.</p>
          </div>
        </div>
      </div>

      {/* Why it Matters */}
      <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-red-50 text-red-600">
            <Activity size={20} />
          </div>
          <h3 className="text-xl font-bold text-zinc-800">🌍 Why It Matters — Health</h3>
        </div>
        <p className="text-zinc-600 text-sm leading-relaxed mb-4">
          Fine particulates are linked to respiratory disease, heart disease, and premature mortality. 
          Europe sees hundreds of thousands of premature deaths annually due to particulate pollution.
        </p>
        <div className="p-4 bg-red-50 rounded-2xl border border-red-100 text-red-800 text-xs italic">
          "The Po Valley is among Europe’s hardest-hit areas for PM2.5-related mortality due to geography and emissions accumulation."
        </div>
      </div>
    </div>

    {/* Standards Table */}
    <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-serif italic text-zinc-800">📊 EU Standards vs WHO Health Guidelines</h3>
        <div className="px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Legally Binding vs Health-Based</div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-100">
              <th className="py-4 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Pollutant</th>
              <th className="py-4 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">EU Legal Limit (Annual)</th>
              <th className="py-4 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">WHO Health Guideline (Annual)</th>
              <th className="py-4 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Cremona Typical Levels</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-zinc-50">
              <td className="py-4 font-bold text-zinc-800">PM2.5</td>
              <td className="py-4 text-zinc-600">25 µg/m³</td>
              <td className="py-4 text-emerald-600 font-bold">5 µg/m³</td>
              <td className="py-4 text-red-600 font-bold">14–22.7 µg/m³ (4.5x WHO)</td>
            </tr>
            <tr>
              <td className="py-4 font-bold text-zinc-800">PM10</td>
              <td className="py-4 text-zinc-600">40 µg/m³</td>
              <td className="py-4 text-emerald-600 font-bold">15 µg/m³</td>
              <td className="py-4 text-zinc-600">~30–35 µg/m³</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 p-4 bg-zinc-50 rounded-2xl text-[11px] text-zinc-500 leading-relaxed">
        <span className="font-bold text-zinc-700">Note:</span> PM10 Daily Limit (50 µg/m³) should not be exceeded on more than 35 days/year. 
        In 2024, Cremona reported ~57 days of exceedance, significantly over the legal allowance.
      </div>
    </div>

    {/* European Comparison */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-zinc-900 p-8 rounded-[32px] text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-zinc-800 text-emerald-400">
            <TrendingUp size={20} />
          </div>
          <h3 className="text-xl font-serif italic">European Ranking: 370 / 372</h3>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          In the EEA’s city comparison (2022–2023), Cremona ranked near the absolute bottom for PM2.5 air quality. 
          While it may occasionally meet EU annual limits, its relative position in Europe is concerning.
        </p>
        <div className="space-y-3">
          {[
            { city: 'Madrid', level: '8.9 µg/m³', rank: 'Clean' },
            { city: 'Paris', level: '10.5 µg/m³', rank: 'Moderate' },
            { city: 'Rome', level: '12.8 µg/m³', rank: 'Moderate' },
            { city: 'Cremona', level: '23.3 µg/m³', rank: 'Poor', highlight: true },
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-between p-3 rounded-xl ${item.highlight ? 'bg-red-500/20 border border-red-500/30' : 'bg-zinc-800/50'}`}>
              <span className="text-xs font-bold">{item.city}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono">{item.level}</span>
                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${item.highlight ? 'bg-red-500 text-white' : 'bg-zinc-700 text-zinc-400'}`}>{item.rank}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-zinc-50 text-zinc-800">
            <Globe size={20} />
          </div>
          <h3 className="text-xl font-bold text-zinc-800">🏙 The Po Valley Hotspot</h3>
        </div>
        <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
          <p>
            <span className="font-bold text-zinc-800">Geography:</span> Surrounded by mountains, the valley traps pollutants, limiting natural dispersion.
          </p>
          <p>
            <span className="font-bold text-zinc-800">Chemistry:</span> Ammonia from intensive agriculture combines with industrial gases to form secondary PM2.5.
          </p>
          <p>
            <span className="font-bold text-zinc-800">Legal Pressure:</span> Italy was condemned by the CJEU for persistent PM10 exceedances (Case C-644/18). 
            The Commission escalated enforcement in March 2024, which could lead to significant financial penalties.
          </p>
        </div>
      </div>
    </div>

    {/* Reliable Data Table */}
    <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
      <h3 className="text-2xl font-serif italic text-zinc-800 mb-8">📊 Air Quality Reference Table — Europe (PM2.5)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-100">
              <th className="py-4 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Entity / Region</th>
              <th className="py-4 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Typical PM2.5 (Annual Mean)</th>
              <th className="py-4 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Comparison vs EU Limit</th>
              <th className="py-4 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Notes / Source</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-zinc-50">
              <td className="py-4 font-bold">EU Legal Limit</td>
              <td className="py-4">25 µg/m³</td>
              <td className="py-4 text-zinc-400">—</td>
              <td className="py-4 text-zinc-500 italic">Ambient Air Quality Directive</td>
            </tr>
            <tr className="border-b border-zinc-50">
              <td className="py-4 font-bold">WHO Health Guideline</td>
              <td className="py-4">5 µg/m³</td>
              <td className="py-4 text-emerald-600 font-bold">80% stricter</td>
              <td className="py-4 text-zinc-500 italic">Health-based recommendation</td>
            </tr>
            <tr className="border-b border-zinc-50">
              <td className="py-4 font-bold">Cremona (Italy)</td>
              <td className="py-4">23.3 µg/m³</td>
              <td className="py-4 text-amber-600 font-bold">Near Limit</td>
              <td className="py-4 text-zinc-500 italic">Ranked 370/372 in Europe</td>
            </tr>
            <tr className="border-b border-zinc-50">
              <td className="py-4 font-bold">Top Clean EU Cities</td>
              <td className="py-4">&lt; 8 µg/m³</td>
              <td className="py-4 text-emerald-600 font-bold">Well Below</td>
              <td className="py-4 text-zinc-500 italic">Uppsala, Umeå, Reykjavik</td>
            </tr>
            <tr>
              <td className="py-4 font-bold">EU Urban Population</td>
              <td className="py-4">96–97% Exceed WHO</td>
              <td className="py-4 text-red-600 font-bold">Health Risk</td>
              <td className="py-4 text-zinc-500 italic">EEA & WHO verified data</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="p-8 bg-emerald-900 text-white rounded-[40px] shadow-2xl">
      <div className="flex items-center gap-4 mb-6">
        <ShieldCheck size={32} className="text-emerald-400" />
        <h3 className="text-2xl font-serif italic">Unattackable Summary</h3>
      </div>
      <p className="text-emerald-100 leading-relaxed italic">
        "Cremona is among the worst cities in Europe for PM2.5, ranking 370th out of 372. While it may technically meet EU annual limits at times, its levels are approximately 4.5x higher than WHO health guidelines. The Po Valley geography traps pollutants from transport, heating, and agriculture, creating a structural hotspot that has already led to EU Court condemnations for Italy. Even when legally compliant, the health risk remains significantly higher than in major European capitals like Paris or Berlin."
      </p>
    </div>
  </div>
);

const AnalysisView = () => {
  const radarData = [
    { subject: 'Air Quality', A: 30, fullMark: 100 },
    { subject: 'Connectivity', A: 85, fullMark: 100 },
    { subject: 'Culture', A: 95, fullMark: 100 },
    { subject: 'Innovation', A: 45, fullMark: 100 },
    { subject: 'Sustainability', A: 70, fullMark: 100 },
    { subject: 'Economy', A: 60, fullMark: 100 },
  ];

  const stakeholders = [
    { name: 'Local Farmers', role: 'Waste Producers', impact: 'High', color: 'bg-amber-500' },
    { name: 'Citizens', role: 'Energy Consumers', impact: 'Critical', color: 'bg-blue-500' },
    { name: 'EU Commission', role: 'Regulators', impact: 'High', color: 'bg-indigo-500' },
    { name: 'Tech Startups', role: 'Innovation Partners', impact: 'Medium', color: 'bg-emerald-500' },
    { name: 'Municipal Gov', role: 'Policy Makers', impact: 'High', color: 'bg-zinc-800' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-24 space-y-16"
    >
      {/* Spiderweb & Stakeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Spiderweb Chart */}
        <div className="bg-white p-8 rounded-[40px] border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-zinc-50 rounded-xl text-zinc-800">
              <Radar size={20} />
            </div>
            <h3 className="text-2xl font-serif italic text-zinc-800">Sustainability Spiderweb</h3>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#e4e4e7" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 12, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <RechartsRadar
                  name="Cremona"
                  dataKey="A"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-xs text-zinc-500 text-center italic">
            Visualizing the balance between environmental constraints and cultural/economic strengths.
          </p>
        </div>

        {/* Stakeholder Map */}
        <div className="bg-zinc-900 p-8 rounded-[40px] text-white shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-zinc-800 rounded-xl text-emerald-400">
              <Users size={20} />
            </div>
            <h3 className="text-2xl font-serif italic">Stakeholder Ecosystem</h3>
          </div>
          <div className="space-y-4">
            {stakeholders.map((s, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${s.color}`} />
                  <div>
                    <div className="font-bold text-sm">{s.name}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{s.role}</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-zinc-800 rounded-full text-[10px] font-bold text-zinc-400">
                  IMPACT: {s.impact}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
            <p className="text-xs text-emerald-100/70 leading-relaxed">
              <span className="font-bold text-emerald-400">Strategic Alignment:</span> Circular energy projects bridge the gap between farmers (waste) and citizens (clean energy), satisfying EU regulatory pressure.
            </p>
          </div>
        </div>
      </div>

      {/* Iceberg Model */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
            <Layers size={24} />
          </div>
          <h3 className="text-3xl font-serif italic text-zinc-800">The Iceberg Model: Air Pollution</h3>
        </div>

        <div className="relative">
          {/* Water Line */}
          <div className="absolute top-[25%] left-0 right-0 h-[2px] bg-blue-400/30 z-0" />
          <div className="absolute top-[25%] right-8 -translate-y-1/2 bg-[#f5f5f0] px-4 text-[10px] font-bold text-blue-400 uppercase tracking-widest z-10">
            Visible Surface
          </div>

          <div className="space-y-6 relative z-10">
            {/* Events */}
            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm max-w-2xl mx-auto border-b-4 border-b-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">👀</span>
                <h4 className="font-bold text-zinc-800">Events (What is happening?)</h4>
              </div>
              <ul className="text-sm text-zinc-600 space-y-2 list-disc pl-5">
                <li>High PM2.5/PM10 readings in winter months.</li>
                <li>Increase in respiratory-related hospital admissions.</li>
                <li>EU Commission issuing formal warnings to Italy.</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="text-zinc-300" />
            </div>

            {/* Patterns */}
            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm max-w-2xl mx-auto opacity-90">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📈</span>
                <h4 className="font-bold text-zinc-800">Patterns (Trends over time)</h4>
              </div>
              <ul className="text-sm text-zinc-600 space-y-2 list-disc pl-5">
                <li>Seasonal smog peaks during temperature inversions.</li>
                <li>Consistent exceedance of WHO health guidelines for decades.</li>
                <li>Correlation between intensive farming cycles and ammonia spikes.</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="text-zinc-300" />
            </div>

            {/* Structures */}
            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm max-w-2xl mx-auto opacity-80">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏗️</span>
                <h4 className="font-bold text-zinc-800">Structures (Systems & Geography)</h4>
              </div>
              <ul className="text-sm text-zinc-600 space-y-2 list-disc pl-5">
                <li>Po Valley geography: Mountains trapping air in a basin.</li>
                <li>Industrial-scale livestock farming infrastructure.</li>
                <li>Reliance on legacy heating and transport systems.</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="text-zinc-300" />
            </div>

            {/* Mental Models */}
            <div className="bg-zinc-800 p-8 rounded-[32px] text-white shadow-xl max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🧠</span>
                <h4 className="font-bold text-emerald-400">Mental Models (Beliefs & Values)</h4>
              </div>
              <ul className="text-sm text-zinc-400 space-y-2 list-disc pl-5">
                <li>"Economic growth requires industrial-scale agriculture."</li>
                <li>"Pollution is an unavoidable consequence of our geography."</li>
                <li>"Individual actions cannot solve systemic basin-wide issues."</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SystemsView = () => {
  const radarData = [
    { subject: 'Air Quality', A: 30, fullMark: 100 },
    { subject: 'Connectivity', A: 85, fullMark: 100 },
    { subject: 'Culture', A: 95, fullMark: 100 },
    { subject: 'Innovation', A: 45, fullMark: 100 },
    { subject: 'Sustainability', A: 70, fullMark: 100 },
    { subject: 'Economy', A: 60, fullMark: 100 },
  ];

  const stakeholderLevels = [
    {
      level: "Level 1: Primary (Direct Impact)",
      desc: "Directly involved in the circular energy loop.",
      members: [
        { name: 'Local Farmers', role: 'Waste Producers', impact: 'High', interest: 'Economic/Efficiency', color: 'bg-amber-500' },
        { name: 'Citizens', role: 'Energy Consumers', impact: 'Critical', interest: 'Health/Cost', color: 'bg-blue-500' },
      ]
    },
    {
      level: "Level 2: Secondary (Implementation)",
      desc: "Providing the infrastructure and policy support.",
      members: [
        { name: 'Municipal Gov', role: 'Policy Makers', impact: 'High', interest: 'Sustainability/Revenue', color: 'bg-zinc-800' },
        { name: 'Tech Startups', role: 'Innovation Partners', impact: 'Medium', interest: 'Data/AI Growth', color: 'bg-emerald-500' },
      ]
    },
    {
      level: "Level 3: Tertiary (Strategic)",
      desc: "External regulators and financial enablers.",
      members: [
        { name: 'EU Commission', role: 'Regulators', impact: 'High', interest: 'Compliance/Green Deal', color: 'bg-indigo-500' },
        { name: 'Financial Inst.', role: 'Green Investors', impact: 'High', interest: 'ESG Returns/Risk', color: 'bg-violet-500' },
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-24 space-y-16"
    >
      {/* City Context / Problem Statement */}
      <div className="bg-white p-12 rounded-[48px] border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-zinc-50 rounded-xl text-zinc-800">
            <Info size={24} />
          </div>
          <h3 className="text-3xl font-serif italic text-zinc-800">City Context & Problem Statement</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-zinc-600 leading-relaxed">
              Cremona, located in the heart of the Po Valley, faces a dual crisis: <span className="font-bold text-zinc-800">severe air pollution</span> trapped by the surrounding mountains and a <span className="font-bold text-zinc-800">lagging economy</span> characterized by low tax revenue and youth exodus.
            </p>
            <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100">
              <h4 className="font-bold text-amber-900 text-sm mb-2 uppercase tracking-widest">The Core Problem</h4>
              <p className="text-sm text-amber-800 leading-relaxed italic">
                "A 'don't care' mental model driven by low taxes and traditional dependencies has led to systemic neglect of waste management and environmental health, threatening the long-term viability of the community."
              </p>
            </div>
          </div>
          <div className="bg-zinc-50 p-8 rounded-[40px] border border-zinc-100">
            <div className="flex items-center gap-3 mb-6">
              <Radar size={20} className="text-zinc-400" />
              <h4 className="font-bold text-zinc-800 text-sm uppercase tracking-widest">Sustainability Spiderweb</h4>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#e4e4e7" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 10, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <RechartsRadar
                    name="Cremona"
                    dataKey="A"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Iceberg Model */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
            <Layers size={24} />
          </div>
          <h3 className="text-3xl font-serif italic text-zinc-800">The Iceberg Model: Air Pollution Crisis</h3>
        </div>

        <div className="relative">
          <div className="absolute top-[20%] left-0 right-0 h-[2px] bg-blue-400/30 z-0" />
          <div className="absolute top-[20%] right-8 -translate-y-1/2 bg-[#f5f5f0] px-4 text-[10px] font-bold text-blue-400 uppercase tracking-widest z-10">
            Visible Surface
          </div>

          <div className="space-y-6 relative z-10">
            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm max-w-2xl mx-auto border-b-4 border-b-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">👀</span>
                <h4 className="font-bold text-zinc-800 uppercase text-xs tracking-widest">Events</h4>
              </div>
              <p className="text-[11px] text-zinc-400 font-bold mb-4">WHAT IS HAPPENING?</p>
              <ul className="text-sm text-zinc-600 space-y-2 list-disc pl-5">
                <li>High PM2.5/PM10 readings in winter months.</li>
                <li>Increase in respiratory-related hospital admissions.</li>
                <li>EU Commission issuing formal warnings to Italy.</li>
              </ul>
            </div>

            <div className="flex justify-center"><ArrowDown className="text-zinc-300" /></div>

            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm max-w-2xl mx-auto opacity-90">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📈</span>
                <h4 className="font-bold text-zinc-800 uppercase text-xs tracking-widest">Patterns</h4>
              </div>
              <p className="text-[11px] text-zinc-400 font-bold mb-4">TRENDS OVER TIME</p>
              <ul className="text-sm text-zinc-600 space-y-2 list-disc pl-5">
                <li>Seasonal smog peaks during temperature inversions.</li>
                <li>Consistent exceedance of WHO health guidelines for decades.</li>
                <li>Correlation between intensive farming cycles and ammonia spikes.</li>
              </ul>
            </div>

            <div className="flex justify-center"><ArrowDown className="text-zinc-300" /></div>

            <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm max-w-2xl mx-auto opacity-80">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏗️</span>
                <h4 className="font-bold text-zinc-800 uppercase text-xs tracking-widest">Structures</h4>
              </div>
              <p className="text-[11px] text-zinc-400 font-bold mb-4">SYSTEMS & GEOGRAPHY</p>
              <ul className="text-sm text-zinc-600 space-y-2 list-disc pl-5">
                <li>Po Valley geography: Mountains trapping air in a basin.</li>
                <li>Industrial-scale livestock farming infrastructure.</li>
                <li>Reliance on legacy heating and transport systems.</li>
              </ul>
            </div>

            <div className="flex justify-center"><ArrowDown className="text-zinc-300" /></div>

            <div className="bg-zinc-800 p-8 rounded-[32px] text-white shadow-xl max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🧠</span>
                <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest">Mental Models</h4>
              </div>
              <p className="text-[11px] text-zinc-500 font-bold mb-4">BELIEFS & VALUES</p>
              <ul className="text-sm text-zinc-400 space-y-2 list-disc pl-5">
                <li>"Economic growth requires industrial-scale agriculture."</li>
                <li>"Pollution is an unavoidable consequence of our geography."</li>
                <li>"Individual actions cannot solve systemic basin-wide issues."</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stakeholder Map */}
      <div className="bg-white p-12 rounded-[48px] border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-zinc-50 rounded-xl text-zinc-800">
            <Users size={24} />
          </div>
          <h3 className="text-3xl font-serif italic text-zinc-800">Stakeholder Ecosystem</h3>
        </div>
        <p className="text-zinc-500 text-sm mb-12 max-w-2xl">
          Hierarchical mapping of key players based on their proximity to the core circular energy system.
        </p>

        <div className="space-y-12">
          {stakeholderLevels.map((level, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-baseline gap-4 border-b border-zinc-100 pb-2">
                <h4 className="font-bold text-zinc-800 text-lg uppercase tracking-tight">{level.level}</h4>
                <span className="text-xs text-zinc-400 italic">{level.desc}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {level.members.map((s, i) => (
                  <div key={i} className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-3 h-3 rounded-full ${s.color}`} />
                        <div className="font-bold text-lg text-zinc-800">{s.name}</div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Role</div>
                          <div className="text-sm text-zinc-600">{s.role}</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Core Interest</div>
                          <div className="text-sm text-zinc-600 italic">{s.interest}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-200 flex justify-between items-center">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase">Impact Level</span>
                      <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-zinc-800 shadow-sm">{s.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const StrategyView = () => {
  const whys = [
    { 
      q: "Why is there a wastage problem in Cremona?", 
      a: "Low taxes lead to a 'don't care' attitude where citizens neglect waste segregation. This is compounded by low income status and a youth exodus, leaving a population dependent on traditional, non-revenue-generating ways." 
    },
    { 
      q: "Why choose Cremona despite the lagging economy?", 
      a: "The Mayor's POV is that sustainability is the primary lever to raise life standards to EU levels. It's a strategic move to bring the community together, increase life expectancy through health-conscious living, and protect the community from the geographical trap of the mountains." 
    },
    { 
      q: "Why is the current government approach 'lagging'?", 
      a: "The local government has historically avoided putting pressure on life and business to maintain stability, but this has resulted in a lack of innovation and new revenue streams, making the city a 'follower' rather than a leader." 
    },
    { 
      q: "Why is the 'Mountains' factor so critical?", 
      a: "Geography acts as a physical barrier that reserves pollution within the basin. Without systemic change, the city remains a 'sink' for environmental externalities, necessitating a circular intervention to break the cycle." 
    },
    { 
      q: "Why is the 'EcoVillage' the chosen model?", 
      a: "It directly addresses the 'don't care' mental model by providing tangible rewards (tokens) and visible health benefits, turning a neglected waste stream into a source of community pride and energy independence." 
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-24 space-y-16"
    >
      {/* 5 Whys Section */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
            <HelpCircle size={24} />
          </div>
          <h3 className="text-3xl font-serif italic text-zinc-800">The 5 Whys: Strategic Root Cause</h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {whys.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm flex gap-6 items-start">
              <div className="text-4xl font-serif italic text-zinc-200 shrink-0">0{i+1}</div>
              <div className="space-y-2">
                <h4 className="font-bold text-zinc-800 text-lg">{item.q}</h4>
                <p className="text-zinc-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Ripples (Externalities) */}
      <div className="bg-zinc-900 p-12 rounded-[48px] text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-zinc-800 rounded-xl text-emerald-400">
            <Target size={24} />
          </div>
          <h3 className="text-3xl font-serif italic">Impact Ripples: Externalities Map</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h4 className="text-emerald-400 font-bold uppercase text-xs tracking-widest border-b border-white/10 pb-2">Environmental</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] text-emerald-400 font-bold mb-1">+ POSITIVE (1 WEEK)</div>
                <div className="text-sm">Cleaner streets in neighborhoods.</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] text-red-400 font-bold mb-1">- NEGATIVE (5 YEARS)</div>
                <div className="text-sm">Risk of no air quality improvement if scale is insufficient.</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest border-b border-white/10 pb-2">Social</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] text-emerald-400 font-bold mb-1">+ POSITIVE (1 YEAR)</div>
                <div className="text-sm">Improved public health conditions.</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] text-red-400 font-bold mb-1">- NEGATIVE (1 YEAR)</div>
                <div className="text-sm">Social inequality if fees/taxes are increased.</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-amber-400 font-bold uppercase text-xs tracking-widest border-b border-white/10 pb-2">Political</h4>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] text-emerald-400 font-bold mb-1">+ POSITIVE (5 YEARS)</div>
                <div className="text-sm">Stronger environmental political credibility.</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-[10px] text-red-400 font-bold mb-1">- NEGATIVE (1 YEAR)</div>
                <div className="text-sm">Regulatory failure if policy changes with new govt.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap: Why, What, How, When */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-zinc-100 rounded-xl text-zinc-800">
            <Clock size={24} />
          </div>
          <h3 className="text-3xl font-serif italic text-zinc-800">Strategic Roadmap</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'WHY', icon: HelpCircle, desc: 'To solve the air quality crisis and economic stagnation.', color: 'text-amber-500' },
            { label: 'WHAT', icon: Zap, desc: 'AI-enabled biogas and waste management system.', color: 'text-emerald-500' },
            { label: 'HOW', icon: Cpu, desc: 'IoT deployment and community-led circular economy.', color: 'text-blue-500' },
            { label: 'WHEN', icon: Clock, desc: 'Phased rollout: Pilot (W1) to Regional (Y5).', color: 'text-indigo-500' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm text-center">
              <div className={`mx-auto p-3 rounded-2xl bg-zinc-50 ${item.color} w-fit mb-4`}>
                <item.icon size={24} />
              </div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">{item.label}</div>
              <p className="text-sm text-zinc-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TeamView = () => {
  const radarData = [
    { subject: 'Extraversion (E)', A: 80, fullMark: 100 },
    { subject: 'Sensing (S)', A: 60, fullMark: 100 },
    { subject: 'Thinking (T)', A: 90, fullMark: 100 },
    { subject: 'Judging (J)', A: 75, fullMark: 100 },
    { subject: 'Introversion (I)', A: 40, fullMark: 100 },
    { subject: 'Intuition (N)', A: 85, fullMark: 100 },
    { subject: 'Feeling (F)', A: 50, fullMark: 100 },
    { subject: 'Perception (P)', A: 65, fullMark: 100 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-24 space-y-16"
    >
      {/* MBTI Team Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-12 rounded-[48px] border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-zinc-50 rounded-xl text-zinc-800">
              <Radar size={24} />
            </div>
            <h3 className="text-3xl font-serif italic text-zinc-800">Team Radar (MBTI)</h3>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#e4e4e7" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 10, fontWeight: 700 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <RechartsRadar
                  name="Team Profile"
                  dataKey="A"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 p-4 bg-zinc-50 rounded-2xl text-[11px] text-zinc-500 leading-relaxed text-center">
            <span className="font-bold text-zinc-800">Note:</span> A very heterogeneous team may find it difficult to communicate but benefits from rich complementarity.
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-4xl font-serif italic text-zinc-800">Team Charter & Vision</h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Team Values', icon: Heart, desc: 'Psychological safety, reliability, and shared responsibility.' },
              { title: 'Objectives', icon: Target, desc: 'Become responsible decision-makers in a complex world.' },
              { title: 'Talent Rules', icon: Sprout, desc: 'Empower members and coordinate around a common vision.' },
              { title: 'Communication', icon: MessageSquare, desc: 'Strengthen quality and ensure direct feedback loops.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm flex gap-4 items-center">
                <div className="p-3 bg-zinc-50 rounded-2xl text-zinc-800">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-800">{item.title}</h4>
                  <p className="text-xs text-zinc-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Dynamics & Needs */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-zinc-100 rounded-xl text-zinc-800">
            <ShieldAlert size={24} />
          </div>
          <h3 className="text-3xl font-serif italic text-zinc-800">Team Dynamics & Needs</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: 'Motivations', 
              icon: Sprout, 
              desc: 'Translating individual drives into collective team life and project milestones.',
              color: 'bg-emerald-50 text-emerald-700'
            },
            { 
              title: 'Stress Factors', 
              icon: ShieldAlert, 
              desc: 'Identifying manifestations of stress early to prevent team-wide burn-out.',
              color: 'bg-red-50 text-red-700'
            },
            { 
              title: 'Team Needs', 
              icon: Heart, 
              desc: 'Ensuring psychological safety and the resources required for high-level execution.',
              color: 'bg-blue-50 text-blue-700'
            },
            { 
              title: 'Real-life Scenarios', 
              icon: MessageSquare, 
              desc: 'Using concrete examples to illustrate how different MBTI types react in the field.',
              color: 'bg-amber-50 text-amber-700'
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
              <div className={`p-3 rounded-2xl ${item.color} w-fit mb-4`}>
                <item.icon size={24} />
              </div>
              <h4 className="font-bold text-zinc-800 mb-2">{item.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stress Curve */}
      <div className="bg-zinc-900 p-12 rounded-[48px] text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-zinc-800 rounded-xl text-emerald-400">
            <Activity size={24} />
          </div>
          <h3 className="text-3xl font-serif italic">Stress Reaction Utility Curve</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 relative h-[300px] bg-white/5 rounded-3xl border border-white/10 p-8 overflow-hidden">
            {/* Simple SVG Curve Visualization */}
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <path 
                d="M 20 180 Q 200 20 380 180" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="4" 
                strokeLinecap="round"
              />
              <circle cx="200" cy="45" r="6" fill="#10b981" />
              <text x="170" y="30" fill="white" fontSize="12" fontWeight="bold">FLOW ZONE</text>
              <text x="20" y="195" fill="#71717a" fontSize="10">Apathy</text>
              <text x="340" y="195" fill="#ef4444" fontSize="10">Burn-out</text>
            </svg>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <h4 className="font-bold text-emerald-400 text-sm mb-2">Optimal Performance</h4>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Reached when the level of pressure is appropriate for the work. Flow state: Creativity + Efficiency.
              </p>
            </div>
            <div className="p-4 bg-red-500/10 rounded-2xl border border-red-500/20">
              <h4 className="font-bold text-red-400 text-sm mb-2">Excessive Challenge</h4>
              <p className="text-xs text-red-100/70 leading-relaxed">
                Feeling overwhelmed, loss of control, and high anxiety leading to fatigue and break.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BasinTrapVisual = () => (
  <div className="relative w-full h-[300px] bg-sky-100 rounded-[40px] overflow-hidden border border-sky-200 shadow-inner">
    {/* Background Sky */}
    <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-100" />
    
    {/* Smog Layer */}
    <motion.div 
      className="absolute bottom-0 left-0 right-0 h-32 bg-zinc-400/40 blur-xl z-20"
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        y: [0, -10, 0]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Alps (North) */}
    <div className="absolute bottom-0 left-0 w-1/3 h-full z-10">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
        <path d="M0 200 L50 100 L100 150 L150 50 L200 200 Z" fill="#cbd5e1" />
        <path d="M50 100 L70 120 L30 120 Z" fill="white" opacity="0.8" />
        <path d="M150 50 L170 80 L130 80 Z" fill="white" opacity="0.8" />
      </svg>
      <div className="absolute top-10 left-10 text-zinc-600 font-bold text-xs uppercase tracking-widest">Alps (North)</div>
    </div>

    {/* Apennines (South) */}
    <div className="absolute bottom-0 right-0 w-1/4 h-2/3 z-10">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
        <path d="M0 200 L100 80 L200 200 Z" fill="#94a3b8" />
      </svg>
      <div className="absolute top-10 right-10 text-zinc-600 font-bold text-xs uppercase tracking-widest text-right">Apennines (South)</div>
    </div>

    {/* Cremona in the Basin */}
    <div className="absolute bottom-0 left-1/3 right-1/4 h-4 bg-emerald-600 z-30 flex justify-center">
      <div className="relative -top-12 flex flex-col items-center">
        <div className="p-2 bg-white rounded-full shadow-lg border-2 border-emerald-500 animate-bounce">
          <MapPin size={20} className="text-emerald-500" />
        </div>
        <div className="mt-1 px-3 py-1 bg-zinc-900 text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">Cremona</div>
      </div>
    </div>

    {/* Wind Blockage Arrows */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4">
      <div className="flex gap-12">
        <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-zinc-400 rotate-180"><Navigation size={32} /></motion.div>
        <motion.div animate={{ x: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-zinc-400"><Navigation size={32} /></motion.div>
      </div>
      <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl border border-zinc-200 shadow-sm">
        <div className="text-[10px] font-bold text-zinc-800 uppercase text-center">Stagnant Air Basin</div>
        <div className="text-[9px] text-zinc-500 italic text-center">Pollutants trapped by topography</div>
      </div>
    </div>
  </div>
);

const CremonaView = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="pb-24 space-y-16"
  >
    {/* Hero: The Basin Trap */}
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
          <Mountain size={24} />
        </div>
        <h3 className="text-3xl font-serif italic text-zinc-800">The Po Valley Basin Trap</h3>
      </div>
      
      <BasinTrapVisual />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
          <h4 className="font-bold text-zinc-800 mb-4 uppercase text-xs tracking-widest">Geography</h4>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Cremona sits at <span className="font-bold">45m elevation</span> in the center of the Po Valley. To the North, the massive <span className="font-bold">Alps</span> act as a wall; to the South, the <span className="font-bold">Apennines</span> complete the enclosure.
          </p>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
          <h4 className="font-bold text-zinc-800 mb-4 uppercase text-xs tracking-widest">The "Trap" Effect</h4>
          <p className="text-sm text-zinc-600 leading-relaxed">
            This unique topography creates a <span className="italic">thermal inversion</span> effect. Cold air stays trapped at the bottom, concentrating PM2.5 and PM10 particles from agriculture and transport.
          </p>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
          <h4 className="font-bold text-zinc-800 mb-4 uppercase text-xs tracking-widest">Climate Impact</h4>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Low wind speeds (often &lt; 1m/s) mean that pollutants generated in Cremona stay in Cremona, making local policy the only viable solution.
          </p>
        </div>
      </div>
    </div>

    {/* History & Heritage */}
    <div className="bg-white p-12 rounded-[48px] border border-zinc-200 shadow-sm">
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
          <History size={24} />
        </div>
        <h3 className="text-3xl font-serif italic text-zinc-800">History & Heritage</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex gap-6">
            <div className="text-4xl font-serif italic text-amber-200">218</div>
            <div>
              <h5 className="font-bold text-zinc-800">Roman Foundation</h5>
              <p className="text-sm text-zinc-500">Founded as a Roman colony on the Po River, serving as a strategic military and trade hub for centuries.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-4xl font-serif italic text-amber-200">1600</div>
            <div>
              <h5 className="font-bold text-zinc-800">The Golden Age of Violins</h5>
              <p className="text-sm text-zinc-500">Birthplace of Stradivari, Guarneri, and Amati. The city became the global center for luthiery, a title it holds to this day.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-4xl font-serif italic text-amber-200">1900</div>
            <div>
              <h5 className="font-bold text-zinc-800">Agricultural Powerhouse</h5>
              <p className="text-sm text-zinc-500">Transformation into one of Europe's most intensive livestock and dairy regions, providing the economic backbone but also environmental challenges.</p>
            </div>
          </div>
        </div>
        <div className="bg-zinc-50 p-8 rounded-[40px] border border-zinc-100 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl">🎻</div>
            <h4 className="text-xl font-serif italic text-zinc-800">UNESCO Heritage</h4>
            <p className="text-xs text-zinc-500 max-w-xs mx-auto">Cremona's traditional violin craftsmanship is recognized by UNESCO as Intangible Cultural Heritage.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Politics & Policy */}
    <div className="bg-zinc-900 p-12 rounded-[48px] text-white shadow-2xl">
      <div className="flex items-center gap-3 mb-12">
        <div className="p-2 bg-zinc-800 rounded-xl text-emerald-400">
          <Vote size={24} />
        </div>
        <h3 className="text-3xl font-serif italic">The Political Landscape</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Gavel size={20} className="text-amber-400" />
              <h4 className="font-bold text-sm uppercase tracking-widest">The "Lagging" Paradox</h4>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Historically, the local government has avoided putting pressure on citizens and businesses (low taxes, traditional methods). While this maintained stability, it led to a <span className="text-white font-bold">lack of innovation</span> and a "don't care" attitude toward waste segregation.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-blue-400" />
              <h4 className="font-bold text-sm uppercase tracking-widest">EU Pressure</h4>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              With the EU Green Deal, Cremona can no longer afford to be a follower. Regulatory fines and health standards are forcing a shift from <span className="italic">traditional dependency</span> to <span className="text-white font-bold">circular innovation</span>.
            </p>
          </div>
        </div>

        <div className="bg-emerald-500/10 p-8 rounded-[40px] border border-emerald-500/20">
          <h4 className="text-emerald-400 font-bold text-xl mb-6 flex items-center gap-2">
            <Target size={24} />
            The Mayor's Winning Strategy
          </h4>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-900 font-bold shrink-0">1</div>
              <p className="text-sm text-emerald-100/80"><span className="text-white font-bold">Health as a Lever:</span> Use the air quality crisis to unite the community. Improving life expectancy is a universal vote-winner.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-900 font-bold shrink-0">2</div>
              <p className="text-sm text-emerald-100/80"><span className="text-white font-bold">Economic Renewal:</span> Frame circular energy (Biogas) as a new revenue stream for the city, offsetting the "low tax" revenue gap.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-zinc-900 font-bold shrink-0">3</div>
              <p className="text-sm text-emerald-100/80"><span className="text-white font-bold">Youth Retention:</span> AI and IoT projects attract tech talent, reversing the youth exodus and modernizing the city's image.</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-emerald-500/20 italic text-xs text-emerald-400/60 text-center">
            "Sustainability is not a cost; it is the only path to political and economic survival in the Po Valley."
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const StatisticsView = ({ history, tokens }: { history: HistoryPoint[], tokens: number }) => {
  const stats = useMemo(() => {
    if (history.length === 0) return { avgGas: 0, totalEnergy: 0, peakManure: 0 };
    const avgGas = history.reduce((acc, p) => acc + p.gas, 0) / history.length;
    const totalEnergy = history.reduce((acc, p) => acc + p.energy, 0);
    const peakManure = Math.max(...history.map(p => p.manure));
    return { avgGas, totalEnergy, peakManure };
  }, [history]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KPI Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Avg Biogas Pressure', value: `${stats.avgGas.toFixed(1)}%`, icon: Wind, color: 'text-emerald-500' },
            { label: 'Total Energy Gen', value: `${stats.totalEnergy.toFixed(2)} kW`, icon: Zap, color: 'text-yellow-500' },
            { label: 'Peak Manure Mass', value: `${stats.peakManure.toFixed(0)} kg`, icon: Database, color: 'text-amber-600' },
            { label: 'Eco Tokens Earned', value: tokens, icon: Zap, color: 'text-emerald-600' },
          ].map((kpi, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-xl bg-zinc-50 ${kpi.color}`}>
                  <kpi.icon size={18} />
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{kpi.label}</span>
              </div>
              <div className="text-2xl font-mono font-bold text-zinc-800">{kpi.value}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif italic text-zinc-800">Energy Production vs Biogas Level</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-tighter">Biogas %</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-tighter">Energy (kW)</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={history}>
              <defs>
                <linearGradient id="colorGas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#facc15" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="gas" stroke="#10b981" fillOpacity={1} fill="url(#colorGas)" strokeWidth={2} />
              <Area type="monotone" dataKey="energy" stroke="#facc15" fillOpacity={1} fill="url(#colorEnergy)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-zinc-900 p-8 rounded-[32px] border border-zinc-800 shadow-2xl h-[400px] text-white">
          <h3 className="text-xl font-serif italic mb-8">Manure Input Trends</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={history.slice(-20)}>
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', color: '#fff' }}
              />
              <Bar dataKey="manure" radius={[4, 4, 0, 0]}>
                {history.slice(-20).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.manure > 800 ? '#10b981' : '#71717a'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-[10px] text-zinc-500 uppercase tracking-widest text-center">
            Green bars indicate high efficiency zones
          </div>
        </div>
      </div>

      {/* New Air Quality Report Section */}
      <AirQualityReport />
    </motion.div>
  );
};

const TeamReviewView = () => {
  const [activeDay, setActiveDay] = useState(1);
  const members = [
    "Vinay Kumar Kovvuri",
    "Ankit Bhatt",
    "Tanya Chetan Gole",
    "Chemseddine El Moudene"
  ];

  const narratives: Record<number, string> = {
    1: "Phase: Selection & Problem Identification. The team analyzed various regions, each member identifying a specific pain point. Vinay focused on the geographical trap and livestock density, Ankit on air pollution levels, Tanya on agricultural waste volumes, and Chems on the lack of investment. This collective analysis led us to select Cremona as our target city.",
    2: "Phase: Research & Mapping. We dove deep into the data. Ankit consolidated statistics and began mapping externalities (+/-). Vinay researched the city's structure and built the Iceberg Model. Tanya explored Cremona's cultural heritage (Violins) and identified key stakeholders, while Chems refined the externalities mapping.",
    3: "Phase: Design & Modeling. With Tanya and Chemseddine absent, Vinay and Ankit took on the full workload. Vinay developed the '6 Circular Model' and the Stakeholder Engagement Strategy. Ankit led the interface design and the critical process of isolating '1 Problem, 1 Solution' from the many identified earlier.",
    4: "Phase: Final Review. The project reached its culmination with a formal review by Professors. The team focused on final integration, presentation readiness, and ensuring the narrative clearly demonstrated how we moved from a complex set of problems to a singular, impactful circular solution."
  };

  const reviewData: Record<number, any[]> = {
    1: [
      { name: members[0], focus: "Geographical Location", progress: 95, collab: 5, stress: "Low", output: "Problem 2: Livestock & Basin Trap" },
      { name: members[1], focus: "Air Pollution", progress: 90, collab: 4, stress: "Low", output: "Problem 1: PM2.5/PM10 Data" },
      { name: members[2], focus: "Agricultural Waste", progress: 85, collab: 5, stress: "Low", output: "Problem 3: Waste Volume Audit" },
      { name: members[3], focus: "Investment Analysis", progress: 80, collab: 4, stress: "Low", output: "Problem 4: Lack of Investment" },
    ],
    2: [
      { name: members[0], focus: "City Research", progress: 90, collab: 5, stress: "Med", output: "Iceberg Model Construction" },
      { name: members[1], focus: "Facts & Statistics", progress: 85, collab: 5, stress: "Med", output: "Externalities Mapping (+/-)" },
      { name: members[2], focus: "Cultural Heritage", progress: 95, collab: 4, stress: "Low", output: "Violin-makers & Stakeholders" },
      { name: members[3], focus: "Externalities", progress: 80, collab: 4, stress: "Med", output: "Impact Mapping Refinement" },
    ],
    3: [
      { name: members[0], focus: "Circular Modeling & Strategy", progress: 98, collab: 5, stress: "High", output: "6 Circular Model + Stakeholder Engagement Strategy + 1 Problem/1 Solution" },
      { name: members[1], focus: "Interface & Solution Building", progress: 98, collab: 5, stress: "High", output: "Tech-Design + 1 Problem/1 Solution out of many" },
    ],
    4: [
      { name: members[0], focus: "Final Integration", progress: 100, collab: 5, stress: "High", output: "System Deployment" },
      { name: members[1], focus: "Presentation Prep", progress: 100, collab: 5, stress: "Low", output: "Final Pitch Deck" },
      { name: members[2], focus: "Professor Review", progress: 100, collab: 5, stress: "Low", output: "Academic Validation" },
      { name: members[3], focus: "Final QA", progress: 100, collab: 5, stress: "Med", output: "Zero-Bug Release" },
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-24 space-y-12"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
            <Calendar size={24} />
          </div>
          <h3 className="text-3xl font-serif italic text-zinc-800">Day-by-Day Team Review</h3>
        </div>
        
        <div className="flex bg-white p-1 rounded-2xl border border-zinc-200 shadow-sm">
          {[1, 2, 3, 4].map(day => (
            <button 
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${activeDay === day ? 'bg-indigo-600 text-white shadow-md' : 'text-zinc-400 hover:text-zinc-600'}`}
            >
              DAY {day}
            </button>
          ))}
        </div>
      </div>

      {/* Daily Narrative */}
      <div className="bg-white p-10 rounded-[48px] border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="text-indigo-500" size={20} />
          <h4 className="font-bold text-zinc-800 uppercase text-xs tracking-widest">Daily Narrative</h4>
        </div>
        <p className="text-lg font-serif italic text-zinc-600 leading-relaxed">
          {narratives[activeDay]}
        </p>
      </div>

      {/* Thinking Point of View Visual */}
      <div className="bg-zinc-900 p-12 rounded-[56px] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <Brain className="text-indigo-400" size={24} />
            <h4 className="text-2xl font-serif italic">Thinking Point of View</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />

            {[1, 2, 3, 4].map((day) => (
              <div key={day} className={`relative z-10 p-6 rounded-3xl border transition-all duration-500 ${
                activeDay === day ? 'bg-white/10 border-white/20 scale-105 shadow-xl' : 'bg-transparent border-transparent opacity-40'
              }`}>
                <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-4">Day {day}</div>
                
                {day === 1 && (
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-zinc-400">4 Problems Identified</div>
                    <div className="flex flex-col gap-1">
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">1. Air Pollution</div>
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">2. Geo-Trap</div>
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">3. Agri-Waste</div>
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">4. Low Invest</div>
                    </div>
                    <div className="pt-4 flex items-center gap-2 text-indigo-400 font-bold text-sm">
                      <Target size={14} />
                      CREMONA
                    </div>
                  </div>
                )}

                {day === 2 && (
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-zinc-400">Mapping & Research</div>
                    <div className="flex flex-col gap-1">
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">Iceberg Model</div>
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">Externalities (+/-)</div>
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">Violin Heritage</div>
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">Stakeholders</div>
                    </div>
                  </div>
                )}

                {day === 3 && (
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-zinc-400">Design & Modeling</div>
                    <div className="flex flex-col gap-1">
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">6 Circular Model</div>
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">Interface Design</div>
                      <div className="text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 italic">Tech Solution</div>
                    </div>
                    <div className="pt-4 text-emerald-400 font-bold text-[10px] leading-tight">
                      1 PROBLEM / 1 SOLUTION<br/>OUT OF MANY
                    </div>
                  </div>
                )}

                {day === 4 && (
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-zinc-400">Validation</div>
                    <div className="p-4 bg-indigo-500/20 rounded-2xl border border-indigo-500/30 text-center">
                      <Users size={20} className="mx-auto mb-2 text-indigo-300" />
                      <div className="text-[10px] font-bold uppercase tracking-tighter">Review by Professors</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviewData[activeDay].map((m: any, i: number) => (
          <motion.div 
            key={m.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[40px] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 font-bold text-lg">
                  {m.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-800">{m.name}</h4>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">{m.focus}</div>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                m.stress === 'Low' ? 'bg-emerald-50 text-emerald-600' : 
                m.stress === 'Med' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
              }`}>
                Stress: {m.stress}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Progress</div>
                  <div className="text-sm font-mono font-bold text-zinc-800">{m.progress}%</div>
                </div>
                <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${m.progress}%` }}
                    className="h-full bg-indigo-500"
                  />
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Collaboration</div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <div key={star} className={`w-2 h-2 rounded-full ${star <= m.collab ? 'bg-amber-400' : 'bg-zinc-200'}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Key Output</div>
              <p className="text-sm text-zinc-700 font-medium italic">"{m.output}"</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-indigo-900 p-10 rounded-[48px] text-white shadow-2xl">
        <div className="flex items-center gap-4 mb-8">
          <Activity className="text-indigo-400" />
          <h4 className="text-xl font-serif italic">Day {activeDay} Summary</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
            <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-2">Team Velocity</div>
            <div className="text-3xl font-mono font-bold">{(reviewData[activeDay].reduce((acc, curr: any) => acc + curr.progress, 0) / 4).toFixed(1)}%</div>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
            <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-2">Synergy Level</div>
            <div className="text-3xl font-mono font-bold">High</div>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
            <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-2">Next Milestone</div>
            <div className="text-sm font-medium text-indigo-100">
              {activeDay < 4 ? `Prepare for Day ${activeDay + 1} deliverables` : "Final Hackathon Submission"}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'solution' | 'statistics' | 'cremona' | 'systems' | 'strategy' | 'team' | 'review'>('solution');
  const [manureWeight, setManureWeight] = useState(450);
  const [gasLevel, setGasLevel] = useState(30);
  const [isFeeding, setIsFeeding] = useState(false);
  const [electricityOutput, setElectricityOutput] = useState(0);
  const [tokens, setTokens] = useState(0);
  const [lastThreshold, setLastThreshold] = useState(0);
  const [showTokenAlert, setShowTokenAlert] = useState(false);
  const [history, setHistory] = useState<HistoryPoint[]>([]);

  // Simulation Logic
  useEffect(() => {
    const interval = setInterval(() => {
      // Natural decay of manure and production of gas
      setManureWeight(prev => Math.max(100, prev - 0.5));
      setGasLevel(prev => {
        const next = prev + (manureWeight > 200 ? 0.2 : -0.1);
        return Math.min(100, Math.max(0, next));
      });
      
      // Electricity output based on gas level
      const output = gasLevel > 20 ? (gasLevel / 10) : 0;
      setElectricityOutput(output);

      // Update history
      setHistory(prev => {
        const newPoint = {
          time: new Date().toLocaleTimeString(),
          gas: gasLevel,
          energy: output,
          manure: manureWeight
        };
        const next = [...prev, newPoint];
        return next.slice(-100); // Keep last 100 points
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [manureWeight, gasLevel]);

  // Milestone Logic
  useEffect(() => {
    const currentLevel = (manureWeight / 1000) * 100;
    const thresholds = [25, 50, 75, 90];
    
    const reached = thresholds.filter(t => currentLevel >= t).pop() || 0;
    
    if (reached > lastThreshold) {
      setTokens(prev => prev + 10);
      setLastThreshold(reached);
      setShowTokenAlert(true);
      setTimeout(() => setShowTokenAlert(false), 3000);
    } else if (currentLevel < lastThreshold - 10) {
      setLastThreshold(reached);
    }
  }, [manureWeight, lastThreshold]);

  const handleFeed = () => {
    setIsFeeding(true);
    setTimeout(() => {
      setManureWeight(prev => Math.min(1000, prev + 150));
      setIsFeeding(false);
    }, 1000);
  };

  const houseConsumption = 3.5;
  const gridExport = Math.max(0, electricityOutput - houseConsumption);
  const housesActive = electricityOutput > 1;

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-zinc-900 font-sans p-8 overflow-hidden">
      {/* Token Alert */}
      <AnimatePresence>
        {showTokenAlert && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-bold"
          >
            <Zap size={20} fill="currentColor" />
            <span>LEVEL REACHED! +10 ECO TOKENS AWARDED</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl font-serif italic tracking-tight text-zinc-800">Circular Energy</h1>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">Biogas-to-Grid Decentralized System</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-white p-1 rounded-2xl border border-zinc-200 shadow-sm self-start">
          <button 
            onClick={() => setActiveTab('solution')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'solution' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
          >
            <LayoutDashboard size={14} />
            SOLUTION
          </button>
          <button 
            onClick={() => setActiveTab('statistics')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'statistics' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
          >
            <BarChart3 size={14} />
            STATISTICS
          </button>
          <button 
            onClick={() => setActiveTab('cremona')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'cremona' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
          >
            <MapPin size={14} />
            CREMONA
          </button>
          <button 
            onClick={() => setActiveTab('systems')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'systems' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
          >
            <Layers size={14} />
            SYSTEMS
          </button>
          <button 
            onClick={() => setActiveTab('strategy')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'strategy' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
          >
            <Target size={14} />
            STRATEGY
          </button>
          <button 
            onClick={() => setActiveTab('team')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'team' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
          >
            <Brain size={14} />
            TEAM
          </button>
          <button 
            onClick={() => setActiveTab('review')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'review' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-600'}`}
          >
            <Calendar size={14} />
            REVIEW
          </button>
        </div>

        <div className="flex gap-6 items-center">
          <div className="bg-white px-4 py-2 rounded-2xl border border-zinc-200 shadow-sm flex items-center gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
              <Zap size={18} fill="currentColor" />
            </div>
            <div>
              <div className="text-[10px] text-zinc-400 uppercase font-bold">Token Balance</div>
              <div className="text-lg font-mono font-bold text-emerald-700">{tokens}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {activeTab === 'solution' ? (
            <motion.div 
              key="solution"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="pb-24 overflow-x-auto"
            >
              <div className="bg-white rounded-[48px] border border-zinc-200 p-10 shadow-2xl relative min-h-[1000px] w-[1100px] mx-auto overflow-hidden">
                {/* Background - Ultra-Clean Grid */}
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

                {/* Header Section */}
                <div className="flex justify-between items-start mb-16 relative z-50">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.5em]">Ecosystem v13.0</div>
                    </div>
                    <h2 className="text-4xl font-serif italic text-zinc-900">Holistic Circularity</h2>
                    <p className="text-zinc-500 text-sm mt-3 max-w-md leading-relaxed">
                      Integrated waste-to-value ecosystem optimized through real-time telemetry and autonomous control.
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="px-5 py-2 bg-zinc-900 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl">System Online</div>
                    <div className="text-[10px] font-mono text-zinc-400">45.13° N | 10.03° E</div>
                  </div>
                </div>

                {/* --- COMPONENT BENTO GRID (RESIZED & REPOSITIONED) --- */}

                {/* ROW 1: INPUT & CONTROL */}
                <div className="absolute top-[200px] left-[80px] z-40 scale-75 origin-top-left">
                  <div className="p-8 bg-white rounded-[48px] border border-zinc-100 shadow-xl space-y-6">
                    <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest text-center border-b border-zinc-50 pb-4">Marketplace</div>
                    <div className="flex flex-col gap-6">
                      <GroceryShop />
                      <AgriSupply />
                    </div>
                  </div>
                </div>

                <div className="absolute top-[200px] left-[420px] z-40 scale-75">
                  <motion.div 
                    className="p-8 bg-white rounded-[48px] shadow-2xl border border-zinc-50 flex flex-col items-center gap-6 cursor-pointer hover:border-emerald-200 transition-all"
                    whileHover={{ y: -8 }}
                    onClick={handleFeed}
                  >
                    <div className="p-6 bg-indigo-50 rounded-[32px]">
                      <Smartphone size={40} className="text-indigo-600" />
                    </div>
                    <div className="text-center">
                      <div className="text-[14px] font-bold text-zinc-600 uppercase tracking-[0.3em]">Farmer Interface</div>
                      <div className="text-[12px] text-zinc-400 mt-2 font-medium">Controller</div>
                    </div>
                    <button className="w-full py-4 bg-zinc-900 hover:bg-emerald-600 text-white rounded-3xl text-[11px] font-bold uppercase tracking-widest transition-all shadow-2xl shadow-zinc-900/10">
                      {isFeeding ? 'Feeding...' : 'Inject Manure'}
                    </button>
                  </motion.div>
                </div>

                <div className="absolute top-[200px] left-[800px] z-40 scale-75 origin-top-right">
                  <DataCentre />
                </div>

                {/* ROW 2: PROCESSING & CONSUMPTION */}
                <div className="absolute top-[500px] left-[80px] z-40 scale-75 origin-left">
                  <div className="p-8 bg-zinc-50/30 rounded-[56px] border border-zinc-100 flex flex-col gap-8 shadow-inner">
                    <VillageHouse id={1} isActive={electricityOutput > 0} />
                    <VillageHouse id={2} isActive={electricityOutput > 5} />
                    <div className="px-6 py-3 bg-white rounded-full border border-zinc-100 flex items-center justify-center gap-4 shadow-sm">
                      <Users size={18} className="text-emerald-600" />
                      <span className="text-[12px] font-bold text-zinc-700 uppercase tracking-widest">Eco-Village</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-[500px] left-[420px] z-30 flex items-center gap-10 scale-75">
                  <div className="relative">
                    <Digester gasLevel={gasLevel} manureLevel={(manureWeight / 1000) * 100} />
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[14px] font-bold text-zinc-700 uppercase tracking-[0.4em] whitespace-nowrap bg-white px-6 py-3 rounded-full border border-zinc-100 shadow-md">
                      Biogas Core
                    </div>
                  </div>
                  <div className="translate-x-4">
                    <IoTDisplay data={{ gasLevel, manureWeight, electricityOutput, tokens, gridExport }} />
                  </div>
                </div>

                <div className="absolute top-[500px] left-[800px] z-40 scale-75 origin-right">
                  <GovernmentOffice />
                </div>

                {/* ROW 3: WASTE & GRID */}
                <div className="absolute top-[800px] left-[120px] z-40 scale-75">
                  <div className="flex flex-col items-center gap-6 p-8 bg-amber-50/10 rounded-[48px] border border-amber-100/30">
                    <div className="p-8 bg-amber-900/10 rounded-[40px] border border-amber-900/20 text-amber-900 relative shadow-inner">
                      <Droplets size={48} />
                      <div className="absolute -top-4 -right-4 bg-amber-800 text-white text-[11px] px-3 py-1.5 rounded-full font-bold shadow-xl">BUFFER</div>
                    </div>
                    <div className="text-[12px] font-bold text-amber-900/50 uppercase tracking-[0.4em]">Waste Intake</div>
                  </div>
                </div>

                <div className="absolute top-[800px] left-[840px] z-40 scale-75">
                  <div className="flex flex-col items-center gap-6 p-8 bg-blue-50/10 rounded-[48px] border border-blue-100/30">
                    <div className="p-6 bg-blue-500/10 rounded-[40px] border border-blue-200 text-blue-600 shadow-sm">
                      <Zap size={40} />
                    </div>
                    <div className="px-8 py-3 bg-blue-600 text-white rounded-full text-[12px] font-bold uppercase tracking-widest shadow-2xl shadow-blue-600/20">
                      National Grid
                    </div>
                  </div>
                </div>

                {/* --- CONNECTIVITY FLOWS (RECALCULATED PATHS) --- */}
                
                {/* 1. Farmer -> Digester (Down) */}
                <SystemFlowConnector 
                  from={{ x: 550, y: 350 }} 
                  to={{ x: 550, y: 500 }} 
                  label="Manure Feed" 
                  color="amber" 
                />

                {/* 2. Digester -> Community (Left) */}
                <SystemFlowConnector 
                  from={{ x: 450, y: 580 }} 
                  to={{ x: 250, y: 580 }} 
                  label="Electricity" 
                  color="amber" 
                />

                {/* 3. Community -> Waste Intake (Down) */}
                <SystemFlowConnector 
                  from={{ x: 180, y: 700 }} 
                  to={{ x: 180, y: 800 }} 
                  label="Waste" 
                  color="zinc" 
                  duration={4}
                />

                {/* 4. Waste Intake -> Digester (Diagonal Up-Right) */}
                <SystemFlowConnector 
                  from={{ x: 250, y: 850 }} 
                  to={{ x: 480, y: 650 }} 
                  label="Manure" 
                  color="amber" 
                  duration={3.5}
                />

                {/* 5. Digester -> IoT (Right) */}
                <SystemFlowConnector 
                  from={{ x: 650, y: 580 }} 
                  to={{ x: 720, y: 580 }} 
                  label="Data" 
                  color="blue" 
                />

                {/* 6. IoT -> Data Centre (Diagonal Up-Right) */}
                <SystemFlowConnector 
                  from={{ x: 800, y: 550 }} 
                  to={{ x: 920, y: 350 }} 
                  label="Stream" 
                  color="blue" 
                />

                {/* 7. Data Centre -> Gov Office (Down) */}
                <SystemFlowConnector 
                  from={{ x: 950, y: 350 }} 
                  to={{ x: 950, y: 500 }} 
                  label="Insights" 
                  color="indigo" 
                />

                {/* 8. Gov Office -> National Grid (Down) */}
                <SystemFlowConnector 
                  from={{ x: 950, y: 700 }} 
                  to={{ x: 950, y: 800 }} 
                  label="Export" 
                  color="amber" 
                />

                {/* 9. Data Centre -> Farmer (Left) */}
                <SystemFlowConnector 
                  from={{ x: 850, y: 250 }} 
                  to={{ x: 650, y: 250 }} 
                  label="Tokens" 
                  color="emerald" 
                  duration={2}
                />

                {/* 10. Farmer -> Marketplace (Left) */}
                <SystemFlowConnector 
                  from={{ x: 450, y: 250 }} 
                  to={{ x: 250, y: 250 }} 
                  label="Spend" 
                  color="emerald" 
                />

                {/* 11. Marketplace -> Farmer (Diagonal Down-Right) */}
                <SystemFlowConnector 
                  from={{ x: 200, y: 350 }} 
                  to={{ x: 450, y: 350 }} 
                  label="Supplies" 
                  color="emerald" 
                  duration={3}
                />

                {/* Legend / Key - Centered Bottom */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl p-6 rounded-[32px] border border-zinc-100 flex gap-16 z-50 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.4)]" />
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Energy</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.4)]" />
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Data</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]" />
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Tokens</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : activeTab === 'statistics' ? (
            <motion.div
              key="statistics"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <StatisticsView history={history} tokens={tokens} />
            </motion.div>
          ) : activeTab === 'cremona' ? (
            <CremonaView key="cremona" />
          ) : activeTab === 'systems' ? (
            <SystemsView key="systems" />
          ) : activeTab === 'strategy' ? (
            <StrategyView key="strategy" />
          ) : activeTab === 'team' ? (
            <TeamView key="team" />
          ) : (
            <TeamReviewView key="review" />
          )}
        </AnimatePresence>
      </main>

      {/* Footer Info */}
      <footer className="max-w-6xl mx-auto mt-24 border-t border-zinc-200 pt-8 flex justify-between text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex gap-8">
          <span>Location: Rural District 04</span>
          <span>Sensor ID: BG-992-X</span>
        </div>
        <div className="flex gap-8">
          <span>© 2026 EcoVillage Systems</span>
          <span className="text-zinc-800">Sustainable Development Goal 7</span>
        </div>
      </footer>
    </div>
  );
}
