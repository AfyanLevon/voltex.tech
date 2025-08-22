export default function ServiceIcons({ serviceType, className = "w-32 h-32" }) {
  switch (serviceType) {
    case 'bess':
      return (
        <img
          src="/icons/BESS_icon.png"
          alt="BESS - Battery Energy Storage Systems"
          className={className}
        />
      );

    case 'smartHome':
      return (
        <img
          src="/icons/SmartHome_icon.png"
          alt="Smart Home Solutions"
          className={className}
        />
      );

    case 'securitySystems':
      return (
        <img
          src="/icons/SecuritySystems_icon.png"
          alt="Security Systems"
          className={className}
        />
      );

    case 'energySolutions':
      return (
        <img
          src="/icons/OtherEnergySolutions_icon.png"
          alt="Other Energy Solutions"
          className={className}
        />
      );

    default:
      return (
        <div className={`${className} bg-gray-600 rounded-lg flex items-center justify-center`}>
          <span className="text-white text-xs">?</span>
        </div>
      );
  }
}
