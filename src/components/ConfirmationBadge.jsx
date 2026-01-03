export default function ConfirmationBadge({ status }) {
    if (status === "CONFIRMED")
      return <span className="text-xs text-green-600">✓ Confirmed</span>;
  
    if (status === "PENDING")
      return <span className="text-xs text-orange-500">⏳ Pending</span>;
  
    if (status === "DISPUTED")
      return <span className="text-xs text-red-600">⚠ Disputed</span>;
  
    return null;
  }
  