export default function Logo({ size = 32 }) {
  const uid = size
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="My Clipper"
    >
      <defs>
        <clipPath id={`logo-upper-${uid}`}>
          <polygon points="-2,-2 34,-2 34,9 -2,23" />
        </clipPath>
        <clipPath id={`logo-lower-${uid}`}>
          <polygon points="-2,25 34,11 34,34 -2,34" />
        </clipPath>
      </defs>
      <g transform="translate(1,-1.5)">
        <polygon
          points="4,3 28,16 4,29"
          fill="#e63946"
          clipPath={`url(#logo-upper-${uid})`}
        />
      </g>
      <g transform="translate(-1,1.5)">
        <polygon
          points="4,3 28,16 4,29"
          fill="#f0f0f0"
          clipPath={`url(#logo-lower-${uid})`}
        />
      </g>
    </svg>
  )
}
