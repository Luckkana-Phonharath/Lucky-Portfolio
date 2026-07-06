const LinkedInIcon = ({ size = 20, fill = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.84v2.18h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.21V24h-4v-8.6c0-2.05-.04-4.68-2.85-4.68-2.85 0-3.29 2.23-3.29 4.53V24h-4V8Z" />
  </svg>
);

export default LinkedInIcon;