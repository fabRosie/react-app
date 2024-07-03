import { PlusCircleOutlined } from '@ant-design/icons';
import { FC, useState } from 'react';
import ApprovePop from '../approve-pop';
import { Checkbox } from 'antd';

interface IReviewImageProps {
  title: string;
  addDescription: () => void;
}

const ReviewImage: FC<IReviewImageProps> = ({ title, addDescription }) => {
  const [showMask, setShowMask] = useState(false);

  const onCheck = () => {
    console.log('oncheck')
  }

  return (
    <div className="pic-box" onMouseEnter={() => setShowMask(true)} onMouseLeave={() => setShowMask(false)}>
      <img
        width={280}
        height={210}
        style={{ objectFit: 'cover' }}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div className="mask" style={{ display: showMask ? 'flex' : 'none' }}>
        <div style={{ color: '#fff', cursor: 'pointer' }}>
          <PlusCircleOutlined />
          <span style={{ paddingLeft: 5 }} onClick={addDescription}>
            问题描述
          </span>
        </div>
      </div>
      <div className="title">{title}</div>
      <ApprovePop
        tagName="涉恐，涉暴"
        triggerNode={
          <div className="tag" style={{ cursor: 'pointer' }}>
            涉恐，涉暴
          </div>
        }
      />
    </div>
  );
};

export default ReviewImage;
