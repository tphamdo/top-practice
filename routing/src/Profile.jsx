import { useParams, Link } from 'react-router-dom';
import DefaultProfile from './DefaultProfile';
import Spinach from './Spinach';
import Popeye from './Popeye';

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === 'popeye' ? (
        <Popeye />
      ) : name === 'spinach' ? (
        <Spinach />
      ) : (
        <div>
          <DefaultProfile />
          <p>Here are some other profiles:</p>
          <div>
            <Link to="spinach">Spinach</Link>
          </div>
          <div>
            <Link to="popeye">Popeye</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
