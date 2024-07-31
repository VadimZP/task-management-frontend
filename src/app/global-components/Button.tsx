type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  title: string;
  type?: ButtonType;
  pending?: boolean;
  className?: string;
  hierarchy?: "primary" | "secondary";
  onClick?: () => void;
}

const styles = {
  primary:
    "text-md m-auto w-fit rounded-md border-2 border-solid border-blue-200 bg-blue-700 p-2 px-4 font-bold text-white shadow transition-all hover:bg-blue-800",
  secondary:
    "text-md m-auto w-fit rounded-md border-2 border-solid border-blue-200 p-2 px-4 font-bold text-primary shadow transition-all hover:bg-slate-100",
};

export function Button({
  title,
  type = "button",
  pending,
  className,
  hierarchy = "primary",
  onClick,
}: ButtonProps) {
  const btnClassName: string = className ?? styles[hierarchy];

  return (
    <button
      type={type}
      aria-disabled={pending}
      className={btnClassName}
      {...(onClick ? { onClick } : {})}
    >
      {title}
    </button>
  );
}
