import classNames from "classnames";
import { ComponentProps, forwardRef } from "react";
import "./Button.css";

type ButtonVariant = "primary" | "secondary" | "muted-primary" | "muted-secondary";

type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, ...props }, ref) => {

    let variantClassName = '';

    switch (variant) {
      case "muted-primary":
        variantClassName = "muted-primary-button";
        break;
      case "muted-secondary":
        variantClassName = "muted-secondary-button";
        break;
      case "secondary":
        variantClassName = "secondary-button";
        break;
      case "primary":
      default:
        variantClassName = "primary-button"
        break;
    }

    return (
      <button
        {...props}
        ref={ref}
        className={classNames("button", variantClassName, className)}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button";
