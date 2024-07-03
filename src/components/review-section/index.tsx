import { PlusCircleOutlined, RollbackOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Descriptions, Image, Space } from 'antd';
import Title from 'antd/es/skeleton/Title';
import styles from './index.module.css';
// import WordSelectTool from '@/components/word-select-tool';
import TagItem from '../tag-item';
import { FC, useState } from 'react';
import ApprovePop from '../approve-pop';
import ReviewImage from '../review-image';
import ProblemDescriptionModal from '../problem-description';
import ReviewSubmitModal from '../review-submit';
import WordSelectTool from '../word-select-tool';

const tagItems = [
  {
    key: '1',
    title: '砍杀无辜群众',
    tags: '涉暴涉恐',
  },
  {
    key: '2',
    title: '砍杀无辜群众',
    tags: '涉暴涉恐',
  },
  {
    key: '3',
    title: '砍杀无辜群众',
    tags: '涉暴涉恐',
  },
  {
    key: '4',
    title: '砍杀无辜群众',
    tags: '涉暴涉恐',
  },
  {
    key: '5',
    title: '砍杀无辜群众',
    tags: '涉暴涉恐',
  },
  {
    key: '6',
    title: '砍杀无辜群众',
    tags: '涉暴涉恐',
  },
  {
    key: '7',
    title: '砍杀无辜群众',
    tags: '涉暴涉恐',
  },
  {
    key: '8',
    title: '砍杀无辜群众',
    tags: '涉暴涉恐',
  },
  {
    key: '9',
    title: '砍杀无辜群众',
    tags: '涉暴涉恐',
  },
];

type IActive = 'text' | 'pic';

type IProblemModalType = 'single' | 'batch' | 'none';

const Review = () => {
  const [active, setActive] = useState<IActive>('pic');
  const [problemModalOpen, setProblemModalOpen] = useState<IProblemModalType>('none');
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  return (
    <Card
      title={<TabButtons active={active} setActive={setActive} />}
      extra={
        <Space>
          <Button type="primary" ghost>
            {' '}
            下一条{' '}
          </Button>
          {active === 'text' && (
            <Button type="primary" ghost>
              <SearchOutlined />
              全文检索
            </Button>
          )}
          {active === 'text' && (
            <Button type="primary" onClick={() => setReviewModalOpen(true)}>
              审读提交
            </Button>
          )}
          {active === 'pic' && (
            <Button type="primary" onClick={() => setProblemModalOpen('batch')}>
              批量审读
            </Button>
          )}
        </Space>
      }
      classNames={{ body: styles.articlecard }}
      styles={{ body: { padding: 0 } }}
    >
      {active === 'text' && (
        <>
          <div className={styles.articles} id="review-article">
            <div className={styles.artitle}>广东饶平3死6伤枪杀案侦破背后：警方调动千余警力抓捕疑犯</div>
            <div className={styles.article}>
              017年11月21日晚 广东潮州市饶平县汫洲镇发生一宗因争抢赌场而引发的3死6伤枪杀案。 11月24日晚
              经过连续6个昼夜不眠不休的艰苦奋战，潮州警方在汕头市抓获涉案人员林某中、林某弟和黄某龙（均为饶平县汫洲镇人），缴获美制式AR15半自动步枪一支、意大利制伯莱塔霰弹枪一支、苏制654K改装手枪一支、子弹59发。
              11月26日晚 警方在东莞市成功抓获头号犯罪嫌疑人林某宏，成功破获该起潮州史上最严重枪杀案。
              近日，记者对专案民警进行了独家采访，揭开悍匪林某宏鲜为人知的一面。
              {/* <WordSelectTool content="号" /> */}
            </div>
          </div>
          <div className={styles.tags}>
            <div className={styles.tagtitle}>标签</div>
            <div className={styles.tag}>
              {tagItems.map((item) => (
                <TagItem data={item} key={item.key} />
              ))}
            </div>
          </div>
        </>
      )}
      {active === 'pic' && (
        <div style={{ width: '100%' }}>
          <div className={styles.pic_total}>共 6 项</div>
          <div className={styles.pics}>
            {new Array(7).fill('1').map((item, index) => (
              <ReviewImage addDescription={() => setProblemModalOpen('single')} title={`图片${index}`} key={index} />
            ))}
          </div>
        </div>
      )}
      <ProblemDescriptionModal
        title={problemModalOpen === 'single' ? '问题描述' : '批量审读'}
        open={problemModalOpen !== 'none'}
        onCancel={() => setProblemModalOpen('none')}
      />
      、
      <ReviewSubmitModal open={reviewModalOpen} />
    </Card>
  );
};

export default Review;

interface ITabButton {
  active: IActive;
  setActive: (active: IActive) => void;
}

const TabButtons: FC<ITabButton> = ({ active, setActive }) => {
  return (
    <div style={{ display: 'flex' }}>
      <a
        style={{
          display: 'flex',
          alignItems: 'center',
          color: active === 'text' ? '#0066FF' : 'rgba(0, 0, 0, 0.4)',
          marginRight: 40,
        }}
        onClick={() => setActive('text')}
      >
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3441"
          width="18"
          height="18"
          fill={active === 'text' ? '#0066FF' : 'rgba(0, 0, 0, 0.4)'}
        >
          <path
            d="M213.333333 640v170.666667h170.666667v85.333333H128v-256h85.333333z m682.666667 0v256h-256v-85.333333h170.666667v-170.666667h85.333333z m-341.376-384l187.733333 469.333333h-91.946666l-51.242667-128h-174.506667l-51.157333 128H281.6l187.690667-469.333333h85.333333z m-42.666667 123.093333L458.752 512h106.325333l-53.12-132.906667zM384 128v85.333333H213.333333v170.666667H128V128h256z m512 0v256h-85.333333V213.333333h-170.666667V128h256z"
            p-id="3442"
          ></path>
        </svg>
        <span style={{ paddingLeft: 8 }}>文本</span>
      </a>
      <a
        style={{
          display: 'flex',
          alignItems: 'center',
          color: active === 'pic' ? '#0066FF' : 'rgba(0, 0, 0, 0.4)',
        }}
        onClick={() => setActive('pic')}
      >
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3441"
          width="18"
          height="18"
          fill={active === 'pic' ? '#0066FF' : 'rgba(0, 0, 0, 0.4)'}
        >
          <path
            d="M213.333333 473.6l85.333334-85.333333 234.666666 234.666666 149.333334-149.333333 128 128V213.333333H213.333333v260.266667z m0 120.704V810.666667h132.266667l127.402667-127.36L298.666667 508.970667l-85.333334 85.333333zM466.304 810.666667H810.666667v-88.362667l-128-128L466.304 810.666667zM170.666667 128h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m490.666666 298.666667a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
            p-id="3442"
          ></path>
        </svg>
        <span style={{ paddingLeft: 8 }}>图片</span>
      </a>
    </div>
  );
};
