export default function ServiceIcons({ serviceType, className = "w-16 h-16" }) {
  const iconProps = {
    className,
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

  // House path based on the exact logo design
  const housePath = "M 8 16 L 8 28 L 10.24 32.225 L 10.24 40.864 L 19.36 40.864 L 19.36 35.54 L 39.28 42.784 L 57.494 36.162 L 9.157 16.629 L 2.482 13.924 L 30.414 13.924 L 6.474 0 Z M 12.882 15.764 L 63.539 36.238 L 39.28 45.06 L 23.04 39.152 L 23.04 42.704 L 6.561 42.704 L 6.561 33.159 L -3.68 29.435 L -3.68 1.84 L 8.166 1.84 L 38.426 15.764 z M 73.677 23.136 L 46.389 23.136 L 65.041 33.416 L 78.561 28.501 L 78.561 0 L 19.917 0 Z M 64.536 35.876 L 38.083 21.296 L 63.764 21.296 L 10.003 1.84 L 82.24 1.84 L 82.24 29.435 z";

  switch (serviceType) {
    case 'bess':
      return (
        <svg {...iconProps}>
          {/* Exact house from logo */}
          <path
            d={housePath}
            fill="#6BD16D"
            stroke="#6BD16D"
            strokeWidth="0.5"
          />
          {/* Battery inside house */}
          <rect x="20" y="24" width="16" height="10" rx="1.5" fill="#0E1116" stroke="#6BD16D" strokeWidth="1"/>
          <rect x="22" y="26" width="12" height="6" fill="#6BD16D"/>
          <rect x="34" y="27" width="1.5" height="4" fill="#6BD16D"/>
          {/* Lightning bolt */}
          <path
            d="M 28 28 L 32 32 L 30 34 L 34 38 L 26 36 L 28 34 L 24 30 Z"
            fill="#FFD700"
          />
        </svg>
      );

    case 'smartHome':
      return (
        <svg {...iconProps}>
          {/* Exact house from logo */}
          <path
            d={housePath}
            fill="#6BD16D"
            stroke="#6BD16D"
            strokeWidth="0.5"
          />
          {/* Brain/smart element in center */}
          <circle cx="32" cy="32" r="6" fill="#0E1116" stroke="#6BD16D" strokeWidth="1"/>
          <path
            d="M 28 30 Q 32 28 36 30 Q 38 32 36 34 Q 34 36 32 34 Q 30 32 28 30"
            fill="#6BD16D"
          />
          <circle cx="30" cy="32" r="0.8" fill="#6BD16D"/>
          <circle cx="34" cy="32" r="0.8" fill="#6BD16D"/>
          {/* Smart connection lines */}
          <path d="M 24 26 L 28 30" stroke="#6BD16D" strokeWidth="1" strokeLinecap="round"/>
          <path d="M 40 26 L 36 30" stroke="#6BD16D" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      );

    case 'securitySystems':
      return (
        <svg {...iconProps}>
          {/* Exact house from logo */}
          <path
            d={housePath}
            fill="#6BD16D"
            stroke="#6BD16D"
            strokeWidth="0.5"
          />
          {/* Security shield overlay */}
          <path
            d="M 16 28 L 32 20 L 48 28 L 48 38 L 16 38 Z"
            fill="#0E1116"
            stroke="#6BD16D"
            strokeWidth="1"
          />
          {/* Lock symbol */}
          <rect x="28" y="30" width="8" height="5" rx="1" fill="#6BD16D"/>
          <circle cx="32" cy="28" r="1.5" fill="#6BD16D"/>
          {/* Security indicator dots */}
          <circle cx="26" cy="34" r="0.8" fill="#6BD16D"/>
          <circle cx="38" cy="34" r="0.8" fill="#6BD16D"/>
        </svg>
      );

    case 'energySolutions':
      return (
        <svg {...iconProps}>
          {/* Exact house from logo */}
          <path
            d={housePath}
            fill="#6BD16D"
            stroke="#6BD16D"
            strokeWidth="0.5"
          />
          {/* VAWT Wind Turbine on roof */}
          <circle cx="32" cy="14" r="2.5" fill="#0E1116" stroke="#6BD16D" strokeWidth="1"/>
          <path d="M 32 11.5 L 32 9" stroke="#6BD16D" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 29.5 14 L 34.5 14" stroke="#6BD16D" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 30.5 12 L 33.5 16" stroke="#6BD16D" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 33.5 12 L 30.5 16" stroke="#6BD16D" strokeWidth="1.5" strokeLinecap="round"/>
          
          {/* Solar Panels on roof */}
          <rect x="18" y="18" width="5" height="3" fill="#FFD700" stroke="#6BD16D" strokeWidth="0.3"/>
          <rect x="25" y="18" width="5" height="3" fill="#FFD700" stroke="#6BD16D" strokeWidth="0.3"/>
          <rect x="32" y="18" width="5" height="3" fill="#FFD700" stroke="#6BD16D" strokeWidth="0.3"/>
          <rect x="39" y="18" width="5" height="3" fill="#FFD700" stroke="#6BD16D" strokeWidth="0.3"/>
          
          {/* Energy flow lines */}
          <path d="M 18 21 L 18 24" stroke="#6BD16D" strokeWidth="0.8" strokeDasharray="1 1"/>
          <path d="M 32 21 L 32 24" stroke="#6BD16D" strokeWidth="0.8" strokeDasharray="1 1"/>
          <path d="M 44 21 L 44 24" stroke="#6BD16D" strokeWidth="0.8" strokeDasharray="1 1"/>
        </svg>
      );

    default:
      return (
        <svg {...iconProps}>
          <path
            d={housePath}
            fill="#6BD16D"
            stroke="#6BD16D"
            strokeWidth="0.5"
          />
        </svg>
      );
  }
}
