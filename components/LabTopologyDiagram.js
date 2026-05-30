/** Mini AD / NAT topology diagram for the featured lab section. */
export default function LabTopologyDiagram() {
  const stroke = 'rgba(57, 255, 20, 0.55)';
  const fill = 'rgba(8, 18, 12, 0.92)';
  const dim = 'rgba(156, 201, 165, 0.85)';

  return (
    <figure
      className="lab-topology panel-border relative overflow-hidden bg-void/60 p-4 md:p-5"
      aria-label="Home lab topology: NAT router, domain controller with AD DS DNS DHCP, and domain-joined Windows 11 client on 172.16.0.0/24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(57,255,20,0.08),transparent_65%)]" />
      <figcaption className="relative mb-3 flex items-center justify-between font-mono text-[10px] text-matrix-dim">
        <span>lab.topology</span>
        <span className="text-matrix">172.16.0.0/24</span>
      </figcaption>

      <svg
        viewBox="0 0 320 280"
        className="relative mx-auto w-full max-w-[320px]"
        role="img"
        aria-hidden="true"
      >
        {/* NAT / edge */}
        <rect x="110" y="8" width="100" height="44" rx="2" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="160" y="26" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Syne, sans-serif" fontWeight="700">
          NAT / RAS
        </text>
        <text x="160" y="42" textAnchor="middle" fill={dim} fontSize="9" fontFamily="JetBrains Mono, monospace">
          Dual-NIC edge
        </text>

        <line x1="160" y1="52" x2="160" y2="78" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Domain controller */}
        <rect x="70" y="78" width="180" height="72" rx="2" fill={fill} stroke={stroke} strokeWidth="2" />
        <text x="160" y="98" textAnchor="middle" fill="#39ff14" fontSize="11" fontFamily="Syne, sans-serif" fontWeight="700">
          WS2025 · Domain Controller
        </text>
        <text x="160" y="116" textAnchor="middle" fill={dim} fontSize="9" fontFamily="JetBrains Mono, monospace">
          AD DS · DNS · DHCP
        </text>
        <rect x="88" y="124" width="56" height="18" rx="1" fill="rgba(57,255,20,0.08)" stroke="rgba(57,255,20,0.25)" />
        <text x="116" y="136" textAnchor="middle" fill={dim} fontSize="8" fontFamily="JetBrains Mono, monospace">
          RBAC
        </text>
        <rect x="152" y="124" width="80" height="18" rx="1" fill="rgba(57,255,20,0.08)" stroke="rgba(57,255,20,0.25)" />
        <text x="192" y="136" textAnchor="middle" fill={dim} fontSize="8" fontFamily="JetBrains Mono, monospace">
          PowerShell
        </text>

        <line x1="160" y1="150" x2="160" y2="176" stroke={stroke} strokeWidth="1.5" />

        {/* Client */}
        <rect x="90" y="176" width="140" height="52" rx="2" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <text x="160" y="196" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Syne, sans-serif" fontWeight="700">
          Windows 11 Pro
        </text>
        <text x="160" y="214" textAnchor="middle" fill={dim} fontSize="9" fontFamily="JetBrains Mono, monospace">
          Domain joined · Event Viewer
        </text>

        {/* Side annotation — identity flow */}
        <path d="M 260 108 L 290 108 L 290 200 L 260 200" fill="none" stroke="rgba(57,255,20,0.25)" strokeWidth="1" />
        <text x="296" y="112" fill="rgba(255,176,32,0.9)" fontSize="8" fontFamily="JetBrains Mono, monospace">
          auth
        </text>
        <text x="296" y="128" fill={dim} fontSize="8" fontFamily="JetBrains Mono, monospace">
          provision
        </text>
        <text x="296" y="144" fill={dim} fontSize="8" fontFamily="JetBrains Mono, monospace">
          logs
        </text>

        {/* Bottom legend */}
        <text x="160" y="252" textAnchor="middle" fill="rgba(106,128,112,0.9)" fontSize="8" fontFamily="JetBrains Mono, monospace">
          VirtualBox · 1,000 AD users via New-ADUser
        </text>
      </svg>
    </figure>
  );
}
