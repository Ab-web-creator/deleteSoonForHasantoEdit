type CloseButtonProps = {
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
};

export default function CloseButton({
  onClick,
  className = '',
  style,
  title = 'Kapat',
}: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={style}
      title={title}
    >
      ×
    </button>
  );
}