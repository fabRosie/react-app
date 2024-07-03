import { Tooltip } from 'antd';
import { FC, useEffect, useState } from 'react';
import styles from './index.module.css';
import './index.module.css';
import TranslateModal from '../translate-modal';
import ProblemDescModal from '../problem-description-modal';

interface ISelectedTranslationProps {
  contentSelector?: string;
  // content: string;
}

export interface IPosition {
  x: number;
  y: number;
}

const WordSelectTool: FC<ISelectedTranslationProps> = ({contentSelector = 'body'}) => {
  const [isTranslateModalOpen, setIsTranslateModalOpen] = useState(false);
  const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const [toolbarPosition, setToolbarPosition] = useState<IPosition>({ x: -100, y: -100 });
  const [selection, setSelection] = useState<string>('');

  // 选中区域
  const handleMouseUp = (event: any, element: HTMLElement | null, selectArea: Element | null) => {
    const selection = window.getSelection();

    if (selection && selection.toString().length > 0) {
      setSelection(selection.toString());
      const range = selection.getRangeAt(0);

      if (!range.collapsed && selectArea) {
        const rangeRect = range.getBoundingClientRect();
        const parentRect = selectArea.getBoundingClientRect();
        setToolbarPosition({
          x: rangeRect.left - parentRect.left,
          y: rangeRect.top - parentRect.top - 50, // 显示在选区上方
        });
        setVisible(true);
        return;
      }
    } else {
      if (event.target !== element) {
        setVisible(false);
        setIsTranslateModalOpen(false);
      }
    }
  };

  useEffect(() => {
    const toolBar = document.getElementById('toolbar');
    const selectArea = document.querySelector(contentSelector);

    document.addEventListener('mouseup', (e) => handleMouseUp(e, toolBar, selectArea));
    return () => {
      document.removeEventListener('mouseup', (e) => handleMouseUp(e, toolBar, selectArea));
    };
  }, []);

  return (
    <div
      className={styles.toolbar}
      style={{
        left: toolbarPosition.x,
        top: toolbarPosition.y,
        display: visible ? 'flex' : 'none',
      }}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      id="toolbar"
    >
      <Tooltip title="划词翻译">
        <div
          className={styles.button}
          onClick={() => {
            setIsProblemModalOpen(false);
            setIsTranslateModalOpen(true);
          }}
        >
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6151" width="200" height="200">
            <path
              d="M789.376 426.688L977.088 896h-91.904l-51.264-128h-174.528l-51.136 128H516.352l187.712-469.312h85.312zM426.688 85.312v85.376h256V256H598.72a777.472 777.472 0 0 1-154.432 268.8c30.72 27.52 64.128 51.84 99.648 72.896L512 677.76A726.08 726.08 0 0 1 384 585.6a711.552 711.552 0 0 1-264.576 151.36l-22.912-82.304a627.2 627.2 0 0 0 227.328-129.792 771.328 771.328 0 0 1-120.448-183.552h95.552c23.808 43.904 52.288 85.12 85.056 122.752 53.312-61.44 95.36-131.84 124.16-208L85.376 256V170.688h256V85.312h85.312z m320 464.448l-53.184 132.928h106.304l-53.12-132.928z"
              p-id="6152"
            ></path>
          </svg>
        </div>
      </Tooltip>
      <Tooltip title="问题描述">
        <div
          className={styles.button}
          onClick={() => {
            setIsProblemModalOpen(false);
            setIsProblemModalOpen(true);
          }}
        >
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6151" width="200" height="200">
            <path
              d="M789.376 426.688L977.088 896h-91.904l-51.264-128h-174.528l-51.136 128H516.352l187.712-469.312h85.312zM426.688 85.312v85.376h256V256H598.72a777.472 777.472 0 0 1-154.432 268.8c30.72 27.52 64.128 51.84 99.648 72.896L512 677.76A726.08 726.08 0 0 1 384 585.6a711.552 711.552 0 0 1-264.576 151.36l-22.912-82.304a627.2 627.2 0 0 0 227.328-129.792 771.328 771.328 0 0 1-120.448-183.552h95.552c23.808 43.904 52.288 85.12 85.056 122.752 53.312-61.44 95.36-131.84 124.16-208L85.376 256V170.688h256V85.312h85.312z m320 464.448l-53.184 132.928h106.304l-53.12-132.928z"
              p-id="6152"
            ></path>
          </svg>
        </div>
      </Tooltip>

      <TranslateModal open={isTranslateModalOpen} text={selection} onCancel={() => setIsTranslateModalOpen(false)} left={0} top={70} />
      <ProblemDescModal open={isProblemModalOpen} text={selection} onCancel={() => setIsProblemModalOpen(false)} left={0} top={70} />
    </div>
  );
};

export default WordSelectTool;
