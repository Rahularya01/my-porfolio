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
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default:
      "bg-gradient-to-r from-amber-300 to-yellow-400 text-slate-950 hover:brightness-105 hover:shadow-[0_8px_25px_rgba(250,204,21,0.25)] active:scale-[0.98]",
    outline:
      "border border-slate-600 bg-transparent text-slate-200 hover:border-amber-300/60 hover:bg-amber-300/10 hover:text-amber-200",
    ghost: "text-slate-300 hover:bg-slate-900 hover:text-sky-200",
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
