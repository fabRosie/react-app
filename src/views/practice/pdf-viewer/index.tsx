import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '@/assets/test.pdf'


const PDF = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }:any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset:any) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div style={{width: 300, height: 500}}>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= (numPages as number)}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export const Component = PDF
