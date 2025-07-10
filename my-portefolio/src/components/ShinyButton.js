import ShinyText from './ShinyText';

const ShinyButton = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
  onClick,
  href,
  ...props
}) => {
  const buttonClasses = `
    px-50 py-20
    bg-gray-900
    border !border-gray-600
    rounded-full
    flex items-center justify-center
    text-xl
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...props}
      >
        <ShinyText
          text={text}
          disabled={disabled}
          speed={speed}
          className="text-lg font-normal"
        />
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <ShinyText
        text={text}
        disabled={disabled}
        speed={speed}
        className="text-lg font-normal"
      />
    </button>
  );
};

export default ShinyButton;