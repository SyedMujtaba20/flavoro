import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import './Success.css'; // Importing the CSS file

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="success-container">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="success-heading">Order Successful!</h2>
          <p className="success-message">Your order has been successfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
