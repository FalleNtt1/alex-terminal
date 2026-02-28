'use client';
import React, { useState } from 'react';
export default function Home() {
const [id, setId] = useState('');
const [pass, setPass] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);
const handleLogin = () => {
if (id.toLowerCase() === 'alexmahone' && pass === '2005berra') { setIsLoggedIn(true); }
else { alert('HATA!'); }
};if (isLoggedIn) { return ( <main className="min-h-screen bg-[#020617] text-green-500 flex flex-col items-center justify-center p-10"> <div className="border border-green-500 p-8"> <h2>ERİŞİM ONAYLANDI</h2> <button onClick={() => setIsLoggedIn(false)}>Çıkış</button> </div> </main> ); }
return ( <main className="min-h-screen bg-[#020617] flex items-center justify-center"> <div className="bg-[#0f172a] p-8 rounded-xl border border-blue-900"> <h1 className="text-blue-500 text-2xl mb-4">ALEX TERMINAL</h1> <input onChange={(e) => setId(e.target.value)} placeholder="ID" className="block w-full mb-2 p-2 bg-black text-white" /> <input onChange={(e) => setPass(e.target.value)} type="password" placeholder="Şifre" className="block w-full mb-4 p-2 bg-black text-white" /> <button onClick={handleLogin} className="bg-blue-600 w-full py-2">GİRİŞ</button> </div> </main> );
}