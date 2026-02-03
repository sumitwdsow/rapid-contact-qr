import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

const Logo = ({ className = "", inverted = false }: LogoProps) => {
  const primaryColor = inverted ? "#FFFFFF" : "#F26430";
  const textColor = inverted ? "#FFFFFF" : "#1A2F4B";
  const secondaryTextColor = inverted ? "rgba(255,255,255,0.7)" : "#6B7280";

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      {/* Shield with QR Icon */}
      <svg
        width="36"
        height="40"
        viewBox="0 0 36 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Shield Shape */}
        <path
          d="M18 0L36 6V18C36 28.5 28.5 36.5 18 40C7.5 36.5 0 28.5 0 18V6L18 0Z"
          fill={primaryColor}
        />
        {/* QR Pattern */}
        <g fill="white">
          {/* Top-left square */}
          <rect x="8" y="10" width="6" height="6" rx="1" />
          <rect x="10" y="12" width="2" height="2" fill={primaryColor} />
          
          {/* Top-right square */}
          <rect x="22" y="10" width="6" height="6" rx="1" />
          <rect x="24" y="12" width="2" height="2" fill={primaryColor} />
          
          {/* Bottom-left square */}
          <rect x="8" y="22" width="6" height="6" rx="1" />
          <rect x="10" y="24" width="2" height="2" fill={primaryColor} />
          
          {/* Center elements */}
          <rect x="16" y="10" width="4" height="2" />
          <rect x="16" y="14" width="2" height="4" />
          <rect x="20" y="16" width="2" height="2" />
          <rect x="16" y="20" width="4" height="2" />
          <rect x="22" y="22" width="2" height="4" />
          <rect x="26" y="24" width="2" height="2" />
          <rect x="16" y="26" width="6" height="2" />
        </g>
      </svg>

      {/* Text */}
      <div className="flex items-baseline">
        <span 
          className="text-lg font-bold tracking-tight sm:text-xl"
          style={{ color: textColor }}
        >
          Emergency
        </span>
        <span 
          className="text-lg font-bold tracking-tight sm:text-xl"
          style={{ color: primaryColor }}
        >
          Call
        </span>
        <span 
          className="text-lg font-medium sm:text-xl"
          style={{ color: secondaryTextColor }}
        >
          .me
        </span>
      </div>
    </Link>
  );
};

export default Logo;
