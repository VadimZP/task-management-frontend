interface SpacingProps {
  size?: number;
}

export function Spacing({ size = 2 }: SpacingProps) {
  return <div className={`mb-${size}`} />;
}
