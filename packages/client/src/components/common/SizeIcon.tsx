import React from "react";

type IconSize = "small" | "medium" | "large";

type SizeIconProps = {
  icon: React.ReactNode;
  size: IconSize;
};

function toTwClass(size: IconSize) {
  switch (size) {
    case "small":
      return "h-4 w-4";
    case "medium":
      return "h-6 w-6";
    case "large":
      return "h-8 w-8";
  }
}

export function SizeIcon<P extends { className?: string }>(
  Component: React.ComponentType<P>,
) {
  return function SizeIconWrapper({ size, ...props }: SizeIconProps & P) {
    const className = toTwClass(size);
    return <Component {...(props as P)} className={className} />;
  };
}
