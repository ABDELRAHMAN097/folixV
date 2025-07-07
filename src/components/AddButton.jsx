import React from 'react'

const AddButton = ({ label = "Add", onClick }) => {
  return (
    <div className="flex items-center justify-end py-2">
      <button
        onClick={onClick}
        className="flex items-center justify-between gap-2 hover:bg-[#628334] px-3 py-2 bg-primary border-none rounded-full shadow-sm focus:outline-none"
      >
        <span className="text-white font-medium">{label}</span>
      </button>
    </div>
  )
}

export default AddButton
