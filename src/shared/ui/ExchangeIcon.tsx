interface ExchangeIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ExchangeIcon = ({
  size = 16,
  color = "#c0c0c0",
  className = "",
}: ExchangeIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.66 7.33337L2 10L4.66 12.6667V10.6667H9.33333V9.33337H4.66V7.33337ZM14 6.00004L11.34 3.33337V5.33337H6.66667V6.66671H11.34V8.66671L14 6.00004Z"
        fill={color}
        fillOpacity="0.87"
      />
    </svg>
  );
};
