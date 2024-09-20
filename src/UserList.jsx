import React from 'react';
import Data from './components/Data';

const UserList = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dynamically display total users */}
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-700">
        User List ({Data.length} Users) 
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Data.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
            <img
              src={user.photo}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover shadow-md"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-500">Age: {user.age}</p>
              <p className="text-gray-500">Phone: {user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
