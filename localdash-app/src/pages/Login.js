import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      setUser(phone);
      navigate('/');
    } else {
      alert("Please enter a valid 10-digit phone number");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center font-sans overflow-hidden bg-space-dark text-white">
      
      {/* DEEP SPACE BACKGROUND */}
      <div className="absolute inset-0 bg-space-grid bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
      
      {/* FLOATING NEON PARTICLES (Optional flair) */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.8)] opacity-50 blur-[1px]"></div>
      <div className="absolute bottom-[30%] right-[15%] w-1 h-1 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.8)] opacity-70 blur-[1px]"></div>
      <div className="absolute top-[60%] left-[80%] w-3 h-3 bg-teal-500 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.6)] opacity-40 blur-[2px]"></div>

      {/* MAIN CARD */}
      <div className="relative w-full max-w-md px-6 z-10">
        
        <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 md:p-10 shadow-2xl shadow-teal-900/20">
          
          {/* BRANDING */}
          <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-teal-500/10 border border-teal-500/30 rounded-2xl mb-4 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
               <span className="text-3xl text-teal-400">📦</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              Local<span className="text-teal-400">Dash</span>
            </h1>
            <p className="text-teal-400/70 font-medium text-[11px] mt-1 uppercase tracking-widest">Everything in 10 mins</p>
          </div>

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Phone Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-1">Mobile Number</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-white/10 pr-3">
                  <span className="text-xs font-bold text-gray-500">🇮🇳</span>
                  <span className="font-bold text-gray-300">+91</span>
                </div>
                <input 
                  required
                  type="tel" 
                  maxLength="10"
                  placeholder="00000 00000"
                  className="w-full pl-24 pr-4 py-3.5 bg-black/40 border border-white/10 rounded-xl outline-none focus:border-teal-400 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(45,212,191,0.15)] transition-all text-sm font-bold tracking-widest placeholder:tracking-normal placeholder:font-medium placeholder:text-gray-600 text-white"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input (Optional for real app, keeping for UI fidelity) */}
            <div className="space-y-1.5 relative">
              <div className="flex justify-between items-end">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-1">Password</label>
                <span className="text-[10px] font-bold text-teal-400 cursor-pointer hover:text-teal-300 transition-colors">Forgot password?</span>
              </div>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔒</span>
                <input 
                  required
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-3.5 bg-black/40 border border-white/10 rounded-xl outline-none focus:border-teal-400 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(45,212,191,0.15)] transition-all text-sm font-medium text-white placeholder:text-gray-600"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>
            
            {/* Login Button */}
            <button 
              type="submit" 
              className="group relative w-full bg-teal-500 overflow-hidden text-black font-black py-3.5 rounded-xl transition-all hover:bg-teal-400 active:scale-[0.98] mt-2 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] border border-teal-400"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm tracking-wide">
                Login
              </span>
            </button>
          </form>

          {/* ANIMATED SEPARATOR */}
          <div className="mt-8 mb-6 relative flex items-center justify-center">
             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
             <span className="absolute bg-[#0f172a] px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">or</span>
          </div>

          {/* SOCIAL LOGIN */}
          <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl transition-all text-sm font-bold text-gray-300 active:scale-[0.98]">
            <span className="text-lg">G</span>
            Continue with Google
          </button>

          {/* SIGNUP LINK */}
          <p className="text-center text-xs text-gray-400 mt-6 font-medium">
            Don't have an account? <span className="text-teal-400 font-bold cursor-pointer hover:underline">Create account</span>
          </p>

        </div>

        {/* FOOTER TEXT */}
        <p className="text-center text-[10px] text-gray-500 mt-8 px-6 leading-relaxed">
          By continuing, you agree to our <span className="text-gray-400 cursor-pointer hover:text-teal-400 transition-colors">Terms of Service</span> and <span className="text-gray-400 cursor-pointer hover:text-teal-400 transition-colors">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;