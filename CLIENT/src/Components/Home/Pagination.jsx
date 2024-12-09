import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 5; // Number of visible pages around the current page

    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 border rounded ${
            currentPage === i
              ? "bg-blue-500 text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center space-x-2 justify-center mt-8">
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="px-3 py-1 border rounded bg-gray-800 text-white hover:bg-gray-700"
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {currentPage > 2 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-1 border rounded bg-gray-800 text-white hover:bg-gray-700"
          >
            1
          </button>
          {currentPage > 3 && <span className="px-2">...</span>}
        </>
      )}

      {renderPageNumbers()}

      {currentPage < totalPages - 1 && (
        <>
          {currentPage < totalPages - 2 && <span className="px-2">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-1 border rounded bg-gray-800 text-white hover:bg-gray-700"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="px-3 py-1 border rounded bg-gray-800 text-white hover:bg-gray-700"
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
