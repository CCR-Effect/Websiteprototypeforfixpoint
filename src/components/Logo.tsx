import logoFull from '../assets/logofullcolor.png';
import logoIcon from '../assets/logoIcon.png';
import logoIconLight from '../assets/logoIconLight.png';

interface LogoProps {
  variant?: 'default' | 'white' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export function Logo({ 
  variant = 'default', 
  size = 'md', 
  className = '', 
  showText = true 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20',
  };

  const iconSizeClasses = {
    sm: 'h-6',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-18',
  };

  // If icon-only variant, use appropriate icon based on variant
  if (variant === 'icon-only' || !showText) {
    const iconSrc = variant === 'white' ? logoIconLight : logoIcon;
    return (
      <img 
        src={iconSrc} 
        alt="FixPoint" 
        className={`w-auto object-contain ${iconSizeClasses[size]} ${className}`}
      />
    );
  }

  // Full logo with text
  if (variant === 'white') {
    // For dark backgrounds, show icon + white text
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img 
          src={logoIconLight} 
          alt="" 
          className={`w-auto object-contain ${iconSizeClasses[size]}`}
        />
        <div className="flex flex-col justify-center">
          <span className={`font-garamond font-bold text-white leading-tight ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-3xl'}`}>
            FixPoint
          </span>
          <span className={`font-inter text-[0.5em] uppercase tracking-wider text-white/80 leading-tight`}>
            Accounting & Advisory
          </span>
        </div>
      </div>
    );
  }

  // Default variant - full color logo
  return (
    <img 
      src={logoFull} 
      alt="FixPoint Accounting & Advisory" 
      className={`w-auto object-contain ${sizeClasses[size]} ${className}`}
    />
  );
}
