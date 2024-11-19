import "../ToggleSection/_ToggleSection.scss";

const ToggleSection = ({
  className,
  title,
  content,
  showContent,
  toggleContent,
}) => {
  return (
    <div className={`section ${className}`} onClick={toggleContent}>
      <h2>
        {title}
        {/* Ajout de la flèche dynamique */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={`arrow-icon ${showContent ? "up" : "down"}`}
        >
          <path
            fill="#ffff"
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
          />
        </svg>
      </h2>
      {showContent && <div className="content">{content}</div>}
    </div>
  );
};

export default ToggleSection;
