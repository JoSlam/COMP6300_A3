import "./reusable-link.styles.css";

export const ReusableLink = ({ placeholder, handler }) => (
  <div className="link-container">
    <div className="link-text" onClick={handler}>
      {placeholder}
    </div>
  </div>
);
