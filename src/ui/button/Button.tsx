import classNames from "classnames";
import { ComponentProps, forwardRef } from "react";
import "./Button.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, ...props }, ref) => {

    let variantClassName = '';

    switch (variant) {
      case "primary":
        variantClassName = "primary-button"
        break;
      case "secondary":
        variantClassName = "secondary-button";
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
