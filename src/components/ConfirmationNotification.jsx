export default function ConfirmationNotification({ notification, onConfirm }) {
    return (
      <div className="bg-[#fdecc8] border border-yellow-300 p-3 rounded mb-2">
        <div className="text-sm font-semibold">{notification.title}</div>
        <div className="text-xs text-gray-600">{notification.message}</div>
  
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => onConfirm(notification.transactionId, "CONFIRMED")}
            className="bg-green-600 text-white px-3 py-1 rounded text-xs"
          >
            Confirm
          </button>
          <button
            onClick={() => onConfirm(notification.transactionId, "REJECTED")}
            className="bg-red-500 text-white px-3 py-1 rounded text-xs"
          >
            Reject
          </button>
        </div>
      </div>
    );
  }
  