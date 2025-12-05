import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-header">
          <h1 className="not-found-code">404</h1>
          <h2 className="not-found-title">Page Not Found</h2>
          <p className="not-found-message">
            Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="not-found-actions">
          <Link
            to="/"
            className="not-found-button"
          >
            <Home className="not-found-button-icon" />
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="not-found-button-secondary"
          >
            <ArrowLeft className="not-found-button-icon" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

