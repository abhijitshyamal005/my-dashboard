/* eslint-disable react/prop-types */

function UserActivities({ activities }) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-violet-600">User Activities</h2>
      <ul className="space-y-4">
        {activities.map(activity => (
          <li key={activity.id} className="p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
            <p className="text-gray-600">{activity.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserActivities;
