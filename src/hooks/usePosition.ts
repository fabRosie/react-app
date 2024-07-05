import { useEffect, useState } from 'react';

export interface IPosition {
  x: number;
  y: number;
}

// export const usePosition: () => [Range, boolean, IPosition, string] = () => {

//   const [toolbarPosition, setToolbarPosition] = useState<IPosition>();
//   const [selection, setSelection] = useState<string>('');
//   const [visible, setVisible] = useState(false);
//   const [range, setRange] = useState<Range>()

//   useEffect(()=>{
//     const targetElement = document.getElementById('toolbar');
//     document.addEventListener('click', function(event) {
//     const clickedElement = event.target as HTMLElement | null;

//       // 检查点击的元素是否是目标元素的子孙元素
//       const isClickedInside = targetElement?.contains(clickedElement);

//       // 如果点击的位置不在目标元素内部，则隐藏目标元素
//       if (!isClickedInside && !!targetElement) {
//         setVisible(false)
//       }
//     });
//     },[])

//   const handleMouseUp = (event: any) => {
//     const selection = window.getSelection();
//     if (selection && selection.toString().length > 0) {
//       setVisible(true);
//       setSelection(selection.toString());
//       const range = selection.getRangeAt(0)
//       selection.addRange(range);
//       setRange(range)
//       if (!range.collapsed) {
//         const rect = range.getBoundingClientRect();
//         setToolbarPosition({
//           x: rect.right + window.scrollX - 70,
//           y: rect.top + window.scrollY - 50, // 显示在选区上方
//         });
//         return;
//       }
//     }
//     setVisible(false);
//   };

//   useEffect(() => {
//     document.addEventListener('mouseup', handleMouseUp);
//     return () => {
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, []);

//   return [range, visible, toolbarPosition, selection];
// };
