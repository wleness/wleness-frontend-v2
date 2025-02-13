import { React } from "react";

export function JournalHistoryModal({ isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="md:w-2/12">
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="h-2/3 w-2/3 rounded-lg bg-white p-4 shadow-lg md:h-1/2 md:w-1/2"
          style={{ maxHeight: "50vh", overflowY: "auto" }}
        >
          <div className="mb-2 flex justify-end">
            <button
              onClick={closeModal}
              className="close-icon text-xl font-bold text-red-500"
            >
              &times;
            </button>
          </div>
          <h2 className="mb-2 text-2xl font-bold">Journalling:</h2>
          <ul>
            <li className="list-item">Entry 1</li>
            <li className="list-item">Entry 2</li>
            <li className="list-item">Entry 1</li>
            <li className="list-item">Entry 2</li>
            <li className="list-item">Entry 1</li>
            <li className="list-item">Entry 1</li>
            <li className="list-item">Entry 2</li>
            <li className="list-item">Entry 1</li>
            <li className="list-item">Entry 2</li>
            <li className="list-item">Entry 1</li>
            <li className="list-item">Entry 1</li>
            <li className="list-item">Entry 2</li>
            <li className="list-item">Entry 1</li>
            <li className="list-item">Entry 2</li>
            <li className="list-item">Entry 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
