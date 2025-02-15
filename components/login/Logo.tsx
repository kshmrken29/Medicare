import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Logo() {
  return (
    <h1 className={`text-center mb-8 ${montserrat.className}`}>
      <span className="text-black text-5xl font-extrabold tracking-widest">MEDI</span>
      <span className="text-green-600 text-5xl font-extrabold tracking-widest">CARE</span>
    </h1>
  );
} 