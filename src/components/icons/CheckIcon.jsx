const CheckIcon = ({
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
    <path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"/>
  </svg>
);
export default CheckIcon;