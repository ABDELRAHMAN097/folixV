// components/Table.jsx
import React from "react";

const Table = ({ columns = 1, headers = [], data = [], renderCell }) => {
  return (
    <div className="w-full overflow-x-auto bg-transparent rounded-2xl border border-primary shadow-md">

      {/* Header */}
      {headers.length > 0 && (
        <div
          className="grid bg-black text-white text-sm font-semibold border-b"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(100px, 1fr))`,
          }}
        >
          {headers.map((title, i) => (
            <div key={i} className="p-3 text-center">
              {title}
            </div>
          ))}
        </div>
      )}

      {/* Body */}
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid text-white text-sm"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(100px, 1fr))`,
          }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div key={colIndex} className="p-2 text-center">
              {renderCell(row, rowIndex, colIndex)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
