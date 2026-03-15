import classNames from "classnames";
import { ComponentProps, forwardRef } from "react";
import "./Input.css";

type InputProps = ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, ...props }, ref) => {

    return (
      <input
        {...props}
        ref={ref}
        className={classNames("input", className)}
      >
        {children}
      </input>
    )
  }
)

Input.displayName = "Input";
