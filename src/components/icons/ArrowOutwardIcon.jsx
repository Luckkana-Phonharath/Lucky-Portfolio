const ArrowOutwardIcon = ({
  size = 16,
  fill = 'currentColor',
  fillOpacity = 1,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={fill}
    fillOpacity={fillOpacity}
    viewBox="0 0 24 24"
    data-slot="icon"
    {...props}
  >
    <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z"/>
  </svg>
);
export default ArrowOutwardIcon;