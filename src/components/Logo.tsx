export const DaicoLogo = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,4 96,50 50,96 4,50" fill="#080808" stroke="#C9A84C" strokeWidth="1.5" />
    <text x="22" y="58" fontFamily="'Shippori Mincho', serif" fontSize="32" fontWeight="800" fill="#C9A84C">
      K
    </text>
    <text x="55" y="44" fontFamily="serif" fontSize="18" fill="#8B0000">
      ♠
    </text>
    <line x1="18" y1="82" x2="82" y2="18" stroke="#E8D080" strokeWidth="1.5" strokeLinecap="round" />
    <polygon points="82,18 78,24 76,18" fill="#E8D080" />
  </svg>
);

export const KatanaDivider = () => (
  <div className="relative flex items-center py-8">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
    <div className="mx-4 h-3 w-3 flex-shrink-0 bg-[#C9A84C]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
  </div>
);

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-2 flex items-center gap-2 font-street text-xs uppercase tracking-widest text-[#8B0000]">
    <span className="text-[#C9A84C]">◆</span>
    {children}
    <span className="text-[#C9A84C]">◆</span>
  </div>
);
