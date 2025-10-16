import './AnimatedLogo.css';

const MetallicLogo = () => {
  return (
    <div className="animated-logo-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="100%" height="100%" role="img" aria-label="Nikhil Raj Logo">
        <defs>
          <linearGradient id="gradFront" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6d4">
              <animate attributeName="stop-color" values="#06b6d4;#3b82f6;#06b6d4" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6;#06b6d4;#3b82f6" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="gradBack" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <path className="back-path" fill="url(#gradBack)" d="M30 90 L30 30 L60 30 L120 90 L90 90 L60 60 L60 90 Z"/>
        <path className="front-path" fill="url(#gradFront)" filter="url(#glow)" d="M60 30 L120 90 L140 90 L80 30 Z"/>
      </svg>
    </div>
  );
};

export default MetallicLogo;
