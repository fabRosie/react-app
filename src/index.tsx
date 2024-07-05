import React from 'react'
import ReactDOM from 'react-dom/client';
import { Router } from './router';
import "./index.css"
import { pdfjs } from 'react-pdf';

// 设置 workerSrc
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router />
);

