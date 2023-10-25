'use client';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  displayRange?: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, displayRange = 10 }) => {
  const router = useRouter();
  const [displayedPages, setDisplayedPages] = useState<number[]>([]);
  useEffect(() => {
    updateDisplayedPages();
  }, [currentPage, totalPages, displayRange]);

  const updateDisplayedPages = () => {
    const totalPagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

    // Display the first few pages, then an ellipsis, and finally the last few pages
    let start = 0;
    let end = displayRange;

    if (currentPage > Math.floor(displayRange / 2)) {
      start = Math.max(currentPage - Math.floor(displayRange / 2), 0);
      end = Math.min(start + displayRange, totalPages);
    }

    setDisplayedPages(totalPagesArray.slice(start, end));
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
    router.push(`?page=${page}`);
    updateDisplayedPages();
  };

  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)} className="pagination-button">
          <Image src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/prev-double.svg" alt="" width={11} height={11 } />
        </button>
      )}
      {/* {displayedPages[0] > 1 && (
        <>
          <button onClick={() => handlePageChange(1)} className="pagination-button">
            1
          </button>
          {displayedPages[0] > 2 && <span className="pagination-button">...</span>}
        </>
      )} */}
      {displayedPages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`pagination-button ${currentPage === page ? 'pagination-button-active' : ''}`}
        >
          {page}
        </button>
      ))}
      {/* {displayedPages[displayedPages.length - 1] < totalPages && (
        <>
          {displayedPages[displayedPages.length - 1] < totalPages - 1 && (
            <span className="pagination-button">...</span>
          )}
          <button onClick={() => handlePageChange(totalPages)} className="pagination-button">
            {totalPages}
          </button>
        </>
      )} */}
      {currentPage < totalPages && (
        <button onClick={() => handlePageChange(currentPage + 1)} className="pagination-button">
          <Image src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/next-double.svg" alt="" width={11} height={11 } />
        </button>
      )}
    </div>
  );
};

export default Pagination;
