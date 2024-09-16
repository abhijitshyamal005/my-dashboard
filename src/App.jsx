/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import UserActivities from './components/UserActivity';
import './index.css';

function App() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await userResponse.json();
        setUser(userData);

        const activitiesResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const activitiesData = await activitiesResponse.json();
        setActivities(activitiesData);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-center text-lg text-gray-700">Loading...</p>
    </div>
  );
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <header className="bg-green-600 text-white p-4 mb-6 rounded-t-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Here are the user’s data</h1>
      </header>
      <div className="mb-6 flex flex-wrap justify-center space-x-4">
        <button
          onClick={() => navigate('/users/1')}
          className={`px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg shadow-md transition duration-300 ${userId === '1' ? 'bg-green-600 text-white' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
        >
          User 1
        </button>
        <button
          onClick={() => navigate('/users/2')}
          className={`px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-lg shadow-md transition duration-300 ${userId === '2' ? 'bg-green-600 text-white' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
        >
          User 2
        </button>
      </div>
      {user && (
        <UserProfile
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      )}
      <UserActivities activities={activities} />
    </div>
  );
}

export default App;
