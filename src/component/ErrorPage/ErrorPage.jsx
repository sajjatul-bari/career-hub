import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>oppppssss!!!</h1>
      <button className="btn">
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
