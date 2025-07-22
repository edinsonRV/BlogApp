import React from "react";

const PostItem = ({ title, description, onDelete, onUpdate }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4">
      <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>
      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
        <button
          onClick={onUpdate}
          className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Modify
        </button>
      </div>
    </div>
  );
};

export default PostItem;
