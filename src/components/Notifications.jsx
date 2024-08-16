import React from 'react';

function Notifications() {
  // Example notifications
  const notifications = [
    "Your profile has been updated successfully.",
    "New message from support.",
    "Your password was changed recently."
  ];

  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul className="list-disc list-inside">
        {notifications.map((notification, index) => (
          <li key={index} className="mb-2">{notification}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
