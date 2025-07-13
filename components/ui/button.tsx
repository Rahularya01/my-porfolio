import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fec00c] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default:
      "bg-[#fec00c] text-black hover:bg-[#e6ad0b] hover:shadow-lg hover:scale-105 active:scale-95",
    outline:
      "border-2 border-gray-300 bg-transparent hover:border-[#fec00c] hover:bg-[#fec00c]/5 hover:text-[#fec00c]",
    ghost: "hover:bg-gray-100 hover:text-[#fec00c]",
  };

  const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 px-4",
    lg: "h-12 px-8 text-base",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
