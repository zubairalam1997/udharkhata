import React from "react";

export default function Home() {
  const items = [
    { id: 1, name: "Customer One" },
    { id: 2, name: "Customer Two" },
    { id: 3, name: "Customer Three" },
  ];

  const handleClick = (item) => {
    console.log("Clicked item:", item);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer List</h2>

      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item)}
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
