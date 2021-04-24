import "./error-message.styles.css";

export const ErrorMessage = ({ message }) => (
  <div className="error-container">
    <p className="error-text">{message}</p>;
  </div>
);
