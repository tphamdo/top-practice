import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn&lsquo;t exist!</h1>
      <div>
        <span>You can go back to the home page by clicking </span>
        <Link to="/">here</Link>
        <span>, though!</span>
      </div>
    </div>
  );
};

export default ErrorPage;
