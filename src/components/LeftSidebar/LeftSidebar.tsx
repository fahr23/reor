import React, { useState } from "react";
import SettingsModal from "../Settings/SettingsModal";
import { MdSettings } from "react-icons/md"; // Importing Material Design settings icon

const LeftSidebar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full h-full bg-gray-800 flex flex-col justify-between">
      <button
        className="bg-transparent border-none pb-2 cursor-pointer"
        onClick={() => setModalOpen(!isModalOpen)}
      >
        <MdSettings className="h-6 w-6 text-gray-100" />
      </button>
      {/* </button> */}
      <SettingsModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      {/* </div> */}
    </div>
  );
};

export default LeftSidebar;
