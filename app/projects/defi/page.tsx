"use client";

import { useState } from "react";
import { ArrowDownUp, Wallet, TrendingUp, Lock, RefreshCw, ChevronDown, ExternalLink, Copy, CheckCircle } from "lucide-react";

const TOKENS = [
  { symbol: "ETH", name: "Ethereum", price: 3842.5, icon: "⟠", balance: 1.284 },
  { symbol: "HWT", name: "HW Token", price: 1.247, icon: "◈", balance: 12450 },
  { symbol: "USDC", name: "USD Coin", price: 1.0, icon: "◎", balance: 5000 },
  { symbol: "DAI", name: "Dai Stablecoin", price: 1.001, icon: "◬", balance: 2340 },
];

const stakingPools = [
  { name: "HWT-ETH Pool", apy: 18.4, tvl: 1240000, staked: 5000, token: "HWT/ETH" },
  { name: "HWT Staking", apy: 12.5, tvl: 890000, staked: 2000, token: "HWT" },
  { name: "USDC Yield", apy: 6.8, tvl: 2100000, staked: 1000, token: "USDC" },
];

const txHistory = [
  { hash: "0x1a2b...3c4d", type: "Swap", from: "0.5 ETH", to: "1,921 HWT", time: "2m ago", status: "success" },
  { hash: "0x5e6f...7g8h", type: "Stake", from: "1,000 HWT", to: "Pool", time: "1h ago", status: "success" },
  { hash: "0x9i0j...1k2l", type: "Swap", from: "500 USDC", to: "401 HWT", time: "3h ago", status: "success" },
  { hash: "0x3m4n...5o6p", type: "Unstake", from: "Pool", to: "500 HWT", time: "1d ago", status: "success" },
];

export default function DefiApp() {
  const [tab, setTab] = useState<"swap" | "stake">("swap");
  const [fromToken, setFromToken] = useState(TOKENS[0]);
  const [toToken, setToToken] = useState(TOKENS[1]);
  const [fromAmount, setFromAmount] = useState("");
  const [connected, setConnected] = useState(false);
  const [copied, setCopied] = useState(false);
  const [swapping, setSwapping] = useState(false);
  const [swapped, setSwapped] = useState(false);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const walletAddress = "0x742d...35Cc";
  const toAmount = fromAmount
    ? ((Number(fromAmount) * fromToken.price) / toToken.price).toFixed(4)
    : "";

  const handleSwap = () => {
    const tmp = fromToken;
    setFromToken(toToken);
    setToToken(tmp);
    setFromAmount(toAmount);
  };

  const handleExecuteSwap = () => {
    if (!fromAmount) return;
    setSwapping(true);
    setSwapped(false);
    setTimeout(() => {
      setSwapping(false);
      setSwapped(true);
      setFromAmount("");
    }, 2000);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "linear-gradient(135deg, #0f0c29 0%, #141834 50%, #0f0c29 100%)" }}
    >
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg font-black">
              ◈
            </div>
            <div>
              <span className="text-white font-bold">HW DeFi Protocol</span>
              <span className="ml-2 text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
                Ethereum Mainnet
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Tabs */}
            <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 text-xs">
              {(["swap", "stake"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-1.5 rounded-lg capitalize font-medium transition-all ${tab === t ? "bg-white/10 text-white" : "text-white/50 hover:text-white"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            {connected ? (
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white text-xs font-medium hover:bg-white/15 transition-colors"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                {walletAddress}
                {copied ? <CheckCircle size={12} className="text-emerald-400" /> : <Copy size={11} className="text-white/50" />}
              </button>
            ) : (
              <button
                onClick={() => setConnected(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white text-xs font-bold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-500/20"
              >
                <Wallet size={13} />
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <div className="border-b border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center gap-8 text-xs overflow-x-auto">
          {[
            { label: "Total Value Locked", value: "$4.23M" },
            { label: "24h Volume", value: "$842K" },
            { label: "HWT Price", value: "$1.247" },
            { label: "Max APY", value: "18.4%" },
            { label: "Total Users", value: "2,847" },
          ].map(({ label, value }) => (
            <div key={label} className="flex-shrink-0">
              <span className="text-white/40">{label}: </span>
              <span className="text-white font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Main action card */}
        <div className="lg:col-span-2 space-y-5">
          {tab === "swap" ? (
            <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-bold mb-5">Token Swap</h2>

              {/* From token */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-2">
                <div className="flex justify-between mb-2">
                  <span className="text-white/50 text-xs">From</span>
                  {connected && (
                    <span className="text-white/50 text-xs">
                      Balance: <span className="text-white">{fromToken.balance} {fromToken.symbol}</span>
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => { setFromAmount(e.target.value); setSwapped(false); }}
                    placeholder="0.0"
                    className="flex-1 bg-transparent text-white text-2xl font-bold placeholder-white/20 outline-none"
                  />
                  <div className="relative">
                    <button
                      onClick={() => { setShowFromDropdown(!showFromDropdown); setShowToDropdown(false); }}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-3 py-2 text-white font-semibold text-sm transition-colors"
                    >
                      <span className="text-xl">{fromToken.icon}</span>
                      {fromToken.symbol}
                      <ChevronDown size={13} />
                    </button>
                    {showFromDropdown && (
                      <div className="absolute right-0 top-full mt-1 w-44 bg-slate-800 border border-white/10 rounded-xl overflow-hidden z-10 shadow-xl">
                        {TOKENS.filter((t) => t.symbol !== toToken.symbol).map((t) => (
                          <button
                            key={t.symbol}
                            onClick={() => { setFromToken(t); setShowFromDropdown(false); }}
                            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-white hover:bg-white/10 transition-colors text-left"
                          >
                            <span>{t.icon}</span> {t.symbol}
                            <span className="ml-auto text-white/40 text-xs">${t.price.toFixed(2)}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {fromAmount && (
                  <p className="text-white/30 text-xs mt-1">
                    ≈ ${(Number(fromAmount) * fromToken.price).toLocaleString("en", { maximumFractionDigits: 2 })}
                  </p>
                )}
              </div>

              {/* Swap arrow */}
              <div className="flex justify-center my-2">
                <button
                  onClick={handleSwap}
                  className="w-9 h-9 rounded-xl bg-slate-800 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 flex items-center justify-center text-white/50 hover:text-amber-400 transition-all"
                >
                  <ArrowDownUp size={15} />
                </button>
              </div>

              {/* To token */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white/50 text-xs">To</span>
                  {connected && (
                    <span className="text-white/50 text-xs">
                      Balance: <span className="text-white">{toToken.balance} {toToken.symbol}</span>
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex-1 text-white text-2xl font-bold">
                    {toAmount || <span className="text-white/20">0.0</span>}
                  </span>
                  <div className="relative">
                    <button
                      onClick={() => { setShowToDropdown(!showToDropdown); setShowFromDropdown(false); }}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-3 py-2 text-white font-semibold text-sm transition-colors"
                    >
                      <span className="text-xl">{toToken.icon}</span>
                      {toToken.symbol}
                      <ChevronDown size={13} />
                    </button>
                    {showToDropdown && (
                      <div className="absolute right-0 top-full mt-1 w-44 bg-slate-800 border border-white/10 rounded-xl overflow-hidden z-10 shadow-xl">
                        {TOKENS.filter((t) => t.symbol !== fromToken.symbol).map((t) => (
                          <button
                            key={t.symbol}
                            onClick={() => { setToToken(t); setShowToDropdown(false); }}
                            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-white hover:bg-white/10 transition-colors text-left"
                          >
                            <span>{t.icon}</span> {t.symbol}
                            <span className="ml-auto text-white/40 text-xs">${t.price.toFixed(2)}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Price info */}
              {fromAmount && (
                <div className="bg-white/3 border border-white/5 rounded-xl px-4 py-3 mb-4 space-y-1.5 text-xs">
                  <div className="flex justify-between text-white/50">
                    <span>Exchange Rate</span>
                    <span className="text-white">1 {fromToken.symbol} = {(fromToken.price / toToken.price).toFixed(4)} {toToken.symbol}</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Price Impact</span>
                    <span className="text-emerald-400">{"< 0.01%"}</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Network Fee</span>
                    <span className="text-white">~$2.14</span>
                  </div>
                </div>
              )}

              {swapped && (
                <div className="flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/30 rounded-xl px-4 py-3 mb-4 text-sm text-emerald-400">
                  <CheckCircle size={15} />
                  Swap successful! Transaction confirmed on Ethereum.
                </div>
              )}

              <button
                onClick={connected ? handleExecuteSwap : () => setConnected(true)}
                disabled={swapping || (connected && !fromAmount)}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-bold text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                {swapping ? (
                  <><RefreshCw size={15} className="animate-spin" /> Processing Swap...</>
                ) : connected ? (
                  fromAmount ? "Swap Now" : "Enter Amount"
                ) : (
                  <><Wallet size={15} /> Connect Wallet to Swap</>
                )}
              </button>
            </div>
          ) : (
            /* Staking */
            <div className="space-y-4">
              {stakingPools.map((pool) => (
                <div key={pool.name} className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold">{pool.name}</h3>
                      <p className="text-white/40 text-xs mt-0.5">{pool.token}</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-900/40 border border-emerald-700/30 rounded-full text-emerald-400 text-sm font-bold">
                      {pool.apy}% APY
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[
                      { label: "TVL", value: `$${(pool.tvl / 1000000).toFixed(2)}M` },
                      { label: "Your Stake", value: `${pool.staked.toLocaleString()} ${pool.token.split("-")[0]}` },
                      { label: "Earned", value: `${(pool.staked * pool.apy / 100 / 365).toFixed(2)} / day` },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white/5 rounded-xl p-3">
                        <p className="text-white/40 text-[10px] mb-1">{label}</p>
                        <p className="text-white font-semibold text-sm">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl text-xs font-semibold hover:bg-amber-500/30 transition-colors flex items-center justify-center gap-1.5">
                      <Lock size={11} /> Stake
                    </button>
                    <button className="flex-1 py-2 bg-white/5 border border-white/10 text-white/60 rounded-xl text-xs font-semibold hover:bg-white/10 transition-colors">
                      Unstake
                    </button>
                    <button className="flex-1 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs font-semibold hover:bg-emerald-500/30 transition-colors">
                      Claim Rewards
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Transaction History */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
            <h2 className="text-white font-bold mb-4">Transaction History</h2>
            <div className="space-y-2">
              {txHistory.map((tx) => (
                <div key={tx.hash} className="flex items-center justify-between p-3 bg-white/3 hover:bg-white/5 rounded-xl border border-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${tx.type === "Swap" ? "bg-blue-900/50" : tx.type === "Stake" ? "bg-amber-900/50" : "bg-emerald-900/50"}`}>
                      {tx.type === "Swap" ? <ArrowDownUp size={12} className="text-blue-400" /> : tx.type === "Stake" ? <Lock size={12} className="text-amber-400" /> : <TrendingUp size={12} className="text-emerald-400" />}
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">{tx.type}: {tx.from} → {tx.to}</p>
                      <p className="text-white/30 text-[10px]">{tx.hash}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 text-[10px] font-medium">✓ Confirmed</span>
                    <p className="text-white/30 text-[10px]">{tx.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Portfolio + info */}
        <div className="space-y-5">
          {/* Portfolio */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
            <h2 className="text-white font-bold mb-1">Portfolio</h2>
            {connected ? (
              <>
                <p className="text-3xl font-black text-white mt-3">
                  ${TOKENS.reduce((s, t) => s + t.balance * t.price, 0).toLocaleString("en", { maximumFractionDigits: 0 })}
                </p>
                <p className="text-emerald-400 text-xs font-medium mt-0.5">+$234.50 (1.2%) today</p>
                <div className="mt-4 space-y-3">
                  {TOKENS.map((t) => (
                    <div key={t.symbol} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{t.icon}</span>
                        <div>
                          <p className="text-white text-xs font-semibold">{t.symbol}</p>
                          <p className="text-white/40 text-[10px]">{t.balance} tokens</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-xs font-semibold">
                          ${(t.balance * t.price).toLocaleString("en", { maximumFractionDigits: 0 })}
                        </p>
                        <p className="text-white/40 text-[10px]">${t.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <Wallet size={28} className="text-white/20 mx-auto mb-3" />
                <p className="text-white/40 text-sm">Connect your wallet to see your portfolio</p>
                <button onClick={() => setConnected(true)} className="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-xl text-white text-xs font-bold transition-colors">
                  Connect Now
                </button>
              </div>
            )}
          </div>

          {/* Contract info */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
            <h2 className="text-white font-bold mb-4">Contract Info</h2>
            <div className="space-y-2 text-xs">
              {[
                { label: "Network", value: "Ethereum Mainnet" },
                { label: "Contract", value: "0xHW...DeFi" },
                { label: "Audited by", value: "CertiK" },
                { label: "License", value: "MIT" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/40">{label}</span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </div>
            <a href="#" className="mt-4 flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors">
              <ExternalLink size={11} />
              View on Etherscan
            </a>
          </div>

          {/* Tech stack */}
          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-700/20 rounded-2xl p-5">
            <p className="text-xs text-amber-400 font-bold mb-3 uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {["Solidity", "Ethereum", "Web3.js", "Hardhat", "React", "ethers.js"].map((t) => (
                <span key={t} className="px-2 py-1 bg-amber-900/30 border border-amber-700/30 rounded-full text-xs text-amber-300 font-medium">
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
