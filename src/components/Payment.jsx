import React from 'react';

function Payment() {
  const handlePayment = () => {
    alert('Payment processed successfully!');
  };

  return (
    <div className="payment-section">
      <h2>Payment</h2>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
}

export default Payment;