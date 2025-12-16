import React, { useState } from 'react';

function Credit() {
  const [credit, setCredit] = useState(0);
  const [notification, setNotification] = useState('');

  const addCredit = () => {
    setCredit(credit + 1);
    setNotification('Credit added to your account. Please confirm.');
  };

  const confirmCredit = () => {
    alert('Credit confirmed!');
    setNotification('');
  };

  return (
    <div className="credit-section">
      <h2>Credit</h2>
      <button onClick={addCredit}>Add Credit</button>
      <p>Credit: {credit}</p>
      {notification && (
        <div>
          <p>{notification}</p>
          <button onClick={confirmCredit}>Confirm Credit</button>
        </div>
      )}
    </div>
  );
}

export default Credit;