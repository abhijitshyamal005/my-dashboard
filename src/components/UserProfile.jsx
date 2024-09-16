/* eslint-disable react/prop-types */

function UserProfile({ name, email, phone }) {
  return (
    <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-lg mx-auto max-w-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-blue-600">{name}</h2>
      <p className="text-base sm:text-lg text-blue-500 mb-1">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-base sm:text-lg text-blue-500">
        <span className="font-semibold">Phone:</span> {phone}
      </p>
    </div>
  );
}

export default UserProfile;
