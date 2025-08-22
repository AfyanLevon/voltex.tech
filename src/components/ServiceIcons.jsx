export default function ServiceIcons({ serviceType, className = "w-16 h-16" }) {
  const iconProps = {
    className,
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

  switch (serviceType) {
    case 'bess':
      return (
        <svg {...iconProps}>
          {/* House frame (logo-inspired) */}
          <path
            d="M16 40 L32 20 L48 40 L48 52 L16 52 Z"
            fill="#6BD16D"
            stroke="#6BD16D"
            strokeWidth="2"
          />
          {/* Battery inside house */}
          <rect x="24" y="32" width="16" height="12" rx="2" fill="#0E1116" stroke="#6BD16D" strokeWidth="1.5"/>
          <rect x="26" y="34" width="12" height="8" fill="#6BD16D"/>
          <rect x="40" y="35" width="2" height="6" fill="#6BD16D"/>
          {/* Lightning bolt */}
          <path
            d="M30 36 L34 40 L32 42 L36 46 L28 44 L30 42 L26 38 Z"
            fill="#FFD700"
          />
        </svg>
      );

    case 'smartHome':
      return (
        <svg {...iconProps}>
          {/* House frame (logo-inspired) */}
          <path
            d="M16 40 L32 20 L48 40 L48 52 L16 52 Z"
            fill="#6BD16D"
            stroke="#6BD16D"
            strokeWidth="2"
          />
          {/* Brain/smart element */}
          <circle cx="32" cy="36" r="8" fill="#0E1116" stroke="#6BD16D" strokeWidth="1.5"/>
          <path
            d="M28 32 Q32 30 36 32 Q38 34 36 36 Q34 38 32 36 Q30 34 28 32"
            fill="#6BD16D"
          />
          <circle cx="30" cy="34" r="1" fill="#6BD16D"/>
          <circle cx="34" cy="34" r="1" fill="#6BD16D"/>
          {/* Smart connections */}
          <path d="M24 28 L28 32" stroke="#6BD16D" strokeWidth="1.5"/>
          <path d="M40 28 L36 32" stroke="#6BD16D" strokeWidth="1.5"/>
        </svg>
      );

    case 'securitySystems':
      return (
        <svg {...iconProps}>
          {/* House frame (logo-inspired) */}
          <path
            d="M16 40 L32 20 L48 40 L48 52 L16 52 Z"
            fill="#6BD16D"
            stroke="#6BD16D"
            strokeWidth="2"
          />
          {/* Security shield overlay */}
          <path
            d="M20 36 L32 26 L44 36 L44 48 L20 48 Z"
            fill="#0E1116"
            stroke="#6BD16D"
            strokeWidth="1.5"
          />
          {/* Lock symbol */}
          <rect x="28" y="38" width="8" height="6" rx="1" fill="#6BD16D"/>
          <circle cx="32" cy="36" r="2" fill="#6BD16D"/>
          {/* Security dots */}
          <circle cx="26" cy="42" r="1" fill="#6BD16D"/>
          <circle cx="38" cy="42" r="1" fill="#6BD16D"/>
        </svg>
      );

    case 'energySolutions':
      return (
        <svg {...iconProps}>
          {/* House frame (logo-inspired) */}
          <path
            d="M16 40 L32 20 L48 40 L48 52 L16 52 Z"
            fill="#6BD16D"
            stroke="#6BD16D"
            strokeWidth="2"
          />
          {/* VAWT Wind Turbine on roof */}
          <circle cx="32" cy="18" r="3" fill="#0E1116" stroke="#6BD16D" strokeWidth="1.5"/>
          <path d="M32 15 L32 12" stroke="#6BD16D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M29 18 L35 18" stroke="#6BD16D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M30 16 L34 20" stroke="#6BD16D" strokeWidth="2" strokeLinecap="round"/>
          <path d="M34 16 L30 20" stroke="#6BD16D" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Solar Panels on roof */}
          <rect x="20" y="22" width="6" height="4" fill="#FFD700" stroke="#6BD16D" strokeWidth="0.5"/>
          <rect x="28" y="22" width="6" height="4" fill="#FFD700" stroke="#6BD16D" strokeWidth="0.5"/>
          <rect x="36" y="22" width="6" height="4" fill="#FFD700" stroke="#6BD16D" strokeWidth="0.5"/>
          
          {/* Energy flow lines */}
          <path d="M20 26 L20 30" stroke="#6BD16D" strokeWidth="1" strokeDasharray="2 2"/>
          <path d="M32 26 L32 30" stroke="#6BD16D" strokeWidth="1" strokeDasharray="2 2"/>
          <path d="M44 26 L44 30" stroke="#6BD16D" strokeWidth="1" strokeDasharray="2 2"/>
        </svg>
      );

    default:
      return (
        <svg {...iconProps}>
          <circle cx="32" cy="32" r="30" fill="#6BD16D" stroke="#6BD16D" strokeWidth="2"/>
          <text x="32" y="38" textAnchor="middle" fill="#0E1116" fontSize="12" fontWeight="bold">?</text>
        </svg>
      );
  }
}
