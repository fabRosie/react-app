import { useState } from 'react';
import styles from './index.module.css';

const levelButtons = [
  {
    key: 0,
    label: '0 级',
    color: '#0FC6C2',
  },
  {
    key: 1,
    label: '1 级',
    color: '#FADC19',
  },
  {
    key: 2,
    label: '2 级',
    color: '#F7BA1E',
  },
  {
    key: 3,
    label: '3 级',
    color: '#F77234',
  },
  {
    key: 4,
    label: '4 级',
    color: '#E64A3C',
  },
];

const LevelButtonGroup = () => {
  const [level, setLevel] = useState<number>(0);
  return (
    <div className={styles.level_button}>
      {levelButtons.map((item) => (
        <div
          key={item.key}
          style={level === item.key ? { background: item.color, color: '#fff', border: 'none' } : {}}
          onClick={() => setLevel(item.key)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default LevelButtonGroup;
