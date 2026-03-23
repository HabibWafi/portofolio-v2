"use client";

import { useState } from "react";
import { Brain, BarChart2, CheckCircle, AlertCircle, Zap, ArrowRight, RefreshCw, ChevronDown } from "lucide-react";

const models = [
  { id: "poverty", name: "Prediksi Kemiskinan", accuracy: 87.3, f1: 0.851, auc: 0.921 },
  { id: "growth", name: "Pertumbuhan Ekonomi", accuracy: 82.1, f1: 0.803, auc: 0.874 },
  { id: "population", name: "Proyeksi Penduduk", accuracy: 91.5, f1: 0.893, auc: 0.944 },
];

const featureImportance = [
  { name: "Tingkat Pendidikan", value: 0.312 },
  { name: "Pendapatan Rata-rata", value: 0.274 },
  { name: "Akses Kesehatan", value: 0.198 },
  { name: "Kualitas Perumahan", value: 0.145 },
  { name: "Infrastruktur", value: 0.071 },
];

const recentPredictions = [
  { id: "PRD-001", kecamatan: "Muara Beliti", result: "Low Risk", confidence: 92, status: "success" },
  { id: "PRD-002", kecamatan: "Ulu Rawas", result: "High Risk", confidence: 87, status: "warning" },
  { id: "PRD-003", kecamatan: "BTS Ulu", result: "Medium Risk", confidence: 79, status: "medium" },
  { id: "PRD-004", kecamatan: "Tugumulyo", result: "Low Risk", confidence: 94, status: "success" },
];

export default function AiAnalytics() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [predicting, setPredicting] = useState(false);
  const [predicted, setPredicted] = useState(false);
  const [formData, setFormData] = useState({
    pendidikan: "70",
    pendapatan: "2500000",
    kesehatan: "65",
    perumahan: "60",
    infrastruktur: "55",
  });

  const handlePredict = () => {
    setPredicting(true);
    setPredicted(false);
    setTimeout(() => {
      setPredicting(false);
      setPredicted(true);
    }, 1800);
  };

  const predScore = Math.round(
    Number(formData.pendidikan) * 0.312 +
    (Number(formData.pendapatan) / 50000) * 0.274 +
    Number(formData.kesehatan) * 0.198 +
    Number(formData.perumahan) * 0.145 +
    Number(formData.infrastruktur) * 0.071
  );
  const riskLevel = predScore > 65 ? "Low Risk" : predScore > 45 ? "Medium Risk" : "High Risk";
  const riskColor = predScore > 65 ? "emerald" : predScore > 45 ? "amber" : "red";
  const confidence = Math.min(97, 70 + Math.floor(Math.abs(predScore - 55) / 2));

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <Brain size={16} />
            </div>
            <div>
              <span className="font-bold text-sm text-white">AI Analytics Platform</span>
              <span className="ml-2 text-[10px] bg-violet-600/20 text-violet-400 border border-violet-600/30 px-2 py-0.5 rounded-full">
                v2.1.0
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            All systems operational
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: model selector + metrics */}
        <div className="space-y-5">
          {/* Model selector */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <p className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wider">Active Model</p>
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full flex items-center justify-between p-3 bg-slate-800 rounded-xl border border-slate-700 hover:border-violet-500 transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-violet-600/20 flex items-center justify-center">
                    <Brain size={13} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{selectedModel.name}</p>
                    <p className="text-[10px] text-slate-500">Accuracy: {selectedModel.accuracy}%</p>
                  </div>
                </div>
                <ChevronDown size={14} className="text-slate-400" />
              </button>
              {showDropdown && (
                <div className="absolute top-full mt-1 w-full bg-slate-800 border border-slate-700 rounded-xl overflow-hidden z-10 shadow-xl">
                  {models.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => { setSelectedModel(m); setShowDropdown(false); setPredicted(false); }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-700 transition-colors ${selectedModel.id === m.id ? "text-violet-400" : "text-white"}`}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Model metrics */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <p className="text-xs text-slate-500 font-medium mb-4 uppercase tracking-wider">Model Metrics</p>
            <div className="space-y-4">
              {[
                { label: "Accuracy", value: selectedModel.accuracy, pct: selectedModel.accuracy, color: "violet" },
                { label: "F1 Score", value: (selectedModel.f1 * 100).toFixed(1), pct: selectedModel.f1 * 100, color: "blue" },
                { label: "ROC-AUC", value: (selectedModel.auc * 100).toFixed(1), pct: selectedModel.auc * 100, color: "emerald" },
              ].map(({ label, value, pct, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400">{label}</span>
                    <span className={`text-${color}-400 font-bold`}>{value}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-${color}-500 rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature importance */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <BarChart2 size={14} className="text-violet-400" />
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Feature Importance</p>
            </div>
            <div className="space-y-3">
              {featureImportance.map(({ name, value }) => (
                <div key={name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{name}</span>
                    <span className="text-slate-400 font-mono">{(value * 100).toFixed(1)}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-600 to-blue-500 rounded-full transition-all duration-500" style={{ width: `${value * 100 / 0.312 * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: Prediction form */}
        <div className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-5">
              <Zap size={15} className="text-amber-400" />
              <h2 className="text-sm font-bold text-white">Prediction Input</h2>
            </div>
            <div className="space-y-4">
              {[
                { key: "pendidikan", label: "Indeks Pendidikan (0-100)", type: "range", min: 0, max: 100 },
                { key: "pendapatan", label: "Pendapatan Rata-rata (Rp)", type: "number", min: 500000, max: 10000000 },
                { key: "kesehatan", label: "Akses Kesehatan (0-100)", type: "range", min: 0, max: 100 },
                { key: "perumahan", label: "Kualitas Perumahan (0-100)", type: "range", min: 0, max: 100 },
                { key: "infrastruktur", label: "Infrastruktur (0-100)", type: "range", min: 0, max: 100 },
              ].map(({ key, label, type, min, max }) => (
                <div key={key}>
                  <div className="flex justify-between mb-1.5">
                    <label className="text-xs text-slate-400">{label}</label>
                    <span className="text-xs text-violet-400 font-mono font-semibold">
                      {type === "number"
                        ? `Rp ${Number(formData[key as keyof typeof formData]).toLocaleString("id")}`
                        : formData[key as keyof typeof formData]}
                    </span>
                  </div>
                  <input
                    type={type}
                    min={min}
                    max={max}
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
                      setPredicted(false);
                    }}
                    className={`w-full bg-slate-800 border border-slate-700 rounded-lg text-white text-xs focus:outline-none focus:border-violet-500 transition-colors ${type === "range" ? "h-1.5 cursor-pointer accent-violet-500" : "px-3 py-2"}`}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handlePredict}
              disabled={predicting}
              className="mt-5 w-full flex items-center justify-center gap-2 py-3 bg-violet-600 hover:bg-violet-700 disabled:opacity-70 rounded-xl text-sm font-semibold transition-colors"
            >
              {predicting ? (
                <>
                  <RefreshCw size={14} className="animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Brain size={14} />
                  Run Prediction
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </div>

          {/* Prediction result */}
          {predicted && (
            <div className={`bg-${riskColor}-950/50 border border-${riskColor}-800/50 rounded-2xl p-5`}>
              <div className="flex items-center gap-2 mb-4">
                {riskLevel === "Low Risk" ? (
                  <CheckCircle size={16} className="text-emerald-400" />
                ) : (
                  <AlertCircle size={16} className={`text-${riskColor}-400`} />
                )}
                <h3 className="text-sm font-bold text-white">Prediction Result</h3>
              </div>
              <div className={`text-center py-5 bg-${riskColor}-900/30 rounded-xl border border-${riskColor}-700/30`}>
                <p className={`text-3xl font-black text-${riskColor}-400`}>{riskLevel}</p>
                <p className="text-slate-400 text-xs mt-1">Prediction Confidence</p>
                <p className={`text-5xl font-black text-${riskColor}-300 mt-1`}>{confidence}%</p>
              </div>
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Model Used</span>
                  <span className="text-white font-medium">{selectedModel.name}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Processing Time</span>
                  <span className="text-white font-medium">127ms</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Composite Score</span>
                  <span className={`text-${riskColor}-400 font-bold`}>{predScore}/100</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Recent predictions */}
        <div className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h2 className="text-sm font-bold text-white mb-4">Recent Predictions</h2>
            <div className="space-y-3">
              {recentPredictions.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div>
                    <p className="text-xs font-semibold text-white">{p.kecamatan}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{p.id}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${p.status === "success" ? "bg-emerald-900/50 text-emerald-400" : p.status === "warning" ? "bg-red-900/50 text-red-400" : "bg-amber-900/50 text-amber-400"}`}>
                      {p.result}
                    </span>
                    <p className="text-[10px] text-slate-500 mt-1">{p.confidence}% conf.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training history */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h2 className="text-sm font-bold text-white mb-4">Training History</h2>
            <div className="space-y-3">
              {[
                { epoch: "Run #12", date: "15 Jan 2024", loss: "0.142", acc: "87.3%" },
                { epoch: "Run #11", date: "10 Jan 2024", loss: "0.167", acc: "85.1%" },
                { epoch: "Run #10", date: "05 Jan 2024", loss: "0.198", acc: "82.4%" },
              ].map((r) => (
                <div key={r.epoch} className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-white">{r.epoch}</p>
                    <p className="text-slate-500">{r.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold">{r.acc}</p>
                    <p className="text-slate-500">loss: {r.loss}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Model info */}
          <div className="bg-gradient-to-br from-violet-900/30 to-blue-900/30 border border-violet-700/30 rounded-2xl p-5">
            <p className="text-xs text-violet-300 font-bold mb-2 uppercase tracking-wider">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "TensorFlow", "FastAPI", "React", "Docker", "PostgreSQL"].map((t) => (
                <span key={t} className="px-2 py-1 bg-violet-900/50 border border-violet-700/50 rounded-full text-xs text-violet-300 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
