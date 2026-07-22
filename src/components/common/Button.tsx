type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.01em] transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white border border-blue-600 shadow-[0_8px_20px_rgba(37,99,235,0.18)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(37,99,235,0.28)] active:translate-y-0",

    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>

      {variant === "primary" && (
        <svg
          className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M13 5l7 7-7 7"
          />
        </svg>
      )}
    </button>
  );
}