import React from "react";

export default function ModeTooltip({ mode }) {
  return (
    <div className="bg-[#2f5f5f] text-white text-xs rounded px-3 py-2 shadow-lg">
      {mode === "STRICT" ? (
        <p>
          <strong>Two-Way:</strong> Both parties must confirm the transaction.
        </p>
      ) : (
        <p>
          <strong>Personal:</strong> Only you confirm, no second approval needed.
        </p>
      )}
    </div>
  );
}
