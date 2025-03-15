import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'white';
}

export function Logo({ size = 'md', color = 'default' }: LogoProps) {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'h-7';
      case 'md':
        return 'h-9';
      case 'lg':
        return 'h-12';
      default:
        return 'h-9';
    }
  };

  return (
    <Link href="/" className={`flex items-center ${getSize()}`}>
      <div className="flex items-center">
        <div className="mr-2">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${getSize()}`}
          >
            {/* Add a background rect to make sure logo is visible regardless of background */}
            <rect
              width="32"
              height="32"
              rx="8"
              fill={color === 'white' ? 'rgba(255, 255, 255, 0.2)' : '#f8f8f5'}
            />
            <path
              d="M16 4L4 10L16 16L28 10L16 4Z"
              fill={color === 'white' ? 'white' : '#2A6B74'}
              stroke={color === 'white' ? 'white' : '#2A6B74'}
              strokeWidth="1.5"
            />
            <path
              d="M4 22L16 28L28 22"
              stroke={color === 'white' ? 'white' : '#2A6B74'}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 16L16 22L28 16"
              stroke={color === 'white' ? 'white' : '#2A6B74'}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span
          className={`font-bold text-xl ${color === 'white' ? 'text-white' : 'text-zinc-900'}`}
        >
          KuhnAI
        </span>
      </div>
    </Link>
  );
}
