import React, { useState } from 'react';

function Authentication() {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = () => {
    setAuthenticated(true);
    alert('Authenticated successfully!');
  };

  return (
    <div className="auth-section">
      <h2>Authentication</h2>
      <button onClick={authenticate}>Authenticate</button>
      {authenticated && <p>You are authenticated!</p>}
    </div>
  );
}

export default Authentication;