import clsx from "clsx";

export default function GlassCard({
  children,
  gradient = false,
  className = "",
  ...rest
}) {
  return (
    <div
      className={clsx(
        gradient ? "gradient-border" : "glass-card",
        "rounded-3xl",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
