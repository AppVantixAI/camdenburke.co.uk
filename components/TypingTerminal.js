import { useEffect, useState } from 'react';

const COMMANDS = [
  'whoami',
  'cat /etc/operator.profile',
  'nmap --profile security-analyst',
  'systemctl status homelab-ad',
];

const OUTPUTS = {
  whoami: 'camden@soc · Help Desk Analyst',
  'cat /etc/operator.profile': 'Security+ certified · Network+ & CySA+ in progress',
  'nmap --profile security-analyst': 'Tier 1/2 · AD · CTI · Log analysis · IAM',
  'systemctl status homelab-ad': 'active (running) — Windows Server 2025',
};

export default function TypingTerminal() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | output | pause
  const [history, setHistory] = useState([]);

  const currentCmd = COMMANDS[cmdIndex];
  const displayed = currentCmd.slice(0, charIndex);

  useEffect(() => {
    if (phase === 'typing') {
      if (charIndex < currentCmd.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), 55 + Math.random() * 40);
        return () => clearTimeout(t);
      }
      setPhase('output');
      setHistory((h) => [...h, { cmd: currentCmd, out: OUTPUTS[currentCmd] }]);
      return;
    }
    if (phase === 'output') {
      const t = setTimeout(() => setPhase('pause'), 1800);
      return () => clearTimeout(t);
    }
    if (phase === 'pause') {
      const t = setTimeout(() => {
        setCmdIndex((i) => (i + 1) % COMMANDS.length);
        setCharIndex(0);
        setPhase('typing');
      }, 600);
      return () => clearTimeout(t);
    }
  }, [phase, charIndex, currentCmd]);

  return (
    <div className="font-mono text-xs space-y-3 max-h-32 overflow-hidden">
      {history.slice(-2).map((entry) => (
        <div key={entry.cmd} className="opacity-60">
          <p>
            <span className="text-matrix">camden@soc</span>
            <span className="text-[#5a6e5c]">:~$</span> {entry.cmd}
          </p>
          <p className="text-[#6a9070] pl-2">→ {entry.out}</p>
        </div>
      ))}
      <div>
        <p>
          <span className="text-matrix">camden@soc</span>
          <span className="text-[#5a6e5c]">:~$</span> {displayed}
          <span className="text-matrix animate-[blink_1s_step-end_infinite]">▋</span>
        </p>
      </div>
    </div>
  );
}
