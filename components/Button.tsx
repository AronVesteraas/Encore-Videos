import type { ReactNode } from "react";
import Icon from "./Icon";

type ButtonProps = {
  variant?: string;
  size?: string;
  href?: string;
  children: ReactNode;
  icon?: string;
  iconRight?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  variant = "primary",
  size = "",
  href,
  children,
  icon,
  iconRight,
  onClick,
  className = "",
  target,
  type,
}: ButtonProps) {
  const cls = `btn btn--${variant} ${size ? "btn--" + size : ""} ${className}`.trim();
  const inner = (
    <>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} />}
    </>
  );
  if (href) {
    return (
      <a
        className={cls}
        href={href}
        target={target}
        onClick={onClick}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick} type={type}>
      {inner}
    </button>
  );
}
