import { Tooltip } from 'antd';
import { FC, useEffect, useState } from 'react';
import styles from './index.module.css';
import './index.module.css';
import { usePosition } from 'src/hooks/usePosition';
import Translate from './components/tranlate';

interface ISelectedTranslationProps {
}
const WordSelection: FC<ISelectedTranslationProps> = ({}) => {
  const [range, visible, selectPosition, text] = usePosition();
  const [isTranslateModalOpen, setIsTranslateModalOpen] = useState(false);
  const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);
  const [show, setShow] = useState(false)

  useEffect(()=>{
  const targetElement = document.getElementById('toolbar');
  document.addEventListener('click', function(event) {
  const clickedElement = event.target as HTMLElement | null;

    // 检查点击的元素是否是目标元素的子孙元素
    const isClickedInside = targetElement?.contains(clickedElement);

    // 如果点击的位置不在目标元素内部，则隐藏目标元素
    if (!isClickedInside && !!targetElement) {
      setShow(false)
    }
  });
  },[])

  return (
    <div className={styles.toolbar} style={{ left: selectPosition.x, top: selectPosition.y,
    // display: visible? 'flex':'none'
    }} id='toolbar'>
      <Tooltip title="划词翻译">
        <div className={styles.button} onClick={() => {
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
          setIsTranslateModalOpen(true)
          }}>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6151" width="200" height="200">
            <path
              d="M789.376 426.688L977.088 896h-91.904l-51.264-128h-174.528l-51.136 128H516.352l187.712-469.312h85.312zM426.688 85.312v85.376h256V256H598.72a777.472 777.472 0 0 1-154.432 268.8c30.72 27.52 64.128 51.84 99.648 72.896L512 677.76A726.08 726.08 0 0 1 384 585.6a711.552 711.552 0 0 1-264.576 151.36l-22.912-82.304a627.2 627.2 0 0 0 227.328-129.792 771.328 771.328 0 0 1-120.448-183.552h95.552c23.808 43.904 52.288 85.12 85.056 122.752 53.312-61.44 95.36-131.84 124.16-208L85.376 256V170.688h256V85.312h85.312z m320 464.448l-53.184 132.928h106.304l-53.12-132.928z"
              p-id="6152"
            ></path>
          </svg>
        </div>
      </Tooltip>
      <Tooltip title="问题描述">
        <div className={styles.button} onClick={() => setIsProblemModalOpen(true)}>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6151" width="200" height="200">
            <path
              d="M789.376 426.688L977.088 896h-91.904l-51.264-128h-174.528l-51.136 128H516.352l187.712-469.312h85.312zM426.688 85.312v85.376h256V256H598.72a777.472 777.472 0 0 1-154.432 268.8c30.72 27.52 64.128 51.84 99.648 72.896L512 677.76A726.08 726.08 0 0 1 384 585.6a711.552 711.552 0 0 1-264.576 151.36l-22.912-82.304a627.2 627.2 0 0 0 227.328-129.792 771.328 771.328 0 0 1-120.448-183.552h95.552c23.808 43.904 52.288 85.12 85.056 122.752 53.312-61.44 95.36-131.84 124.16-208L85.376 256V170.688h256V85.312h85.312z m320 464.448l-53.184 132.928h106.304l-53.12-132.928z"
              p-id="6152"
            ></path>
          </svg>
        </div>
      </Tooltip>

      <Translate
        open={isTranslateModalOpen}
        text={text}
        onCancel={() => setIsTranslateModalOpen(false)}
        style={{
          left: selectPosition.x,
          top: selectPosition.y + 70,
        }}
      />
      {/* <ProblemDescModal
        open={isProblemModalOpen}
        text={text}
        onCancel={() => setIsProblemModalOpen(false)}
        style={{
          left: selectPosition.x,
          top: selectPosition.y + 70,
        }}
      /> */}
    </div>
  );
};

export default WordSelection;
