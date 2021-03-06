import { MouseEvent, ReactNode } from "react";

type ButtonProps = {
  variant?: "disabled" | "default";
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  variant = "default",
  children,
  onClick,
}: ButtonProps) => {
  switch (variant) {
    case "disabled":
      return (
        <button
          className="appearance-none w-full font-bold py-3 border-t border-gray-200 text-gray-200 cursor-default"
          onClick={onClick}
          disabled
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className="appearance-none w-full font-bold py-3 border-t border-gray-400"
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};
