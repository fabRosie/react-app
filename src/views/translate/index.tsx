import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import SideMenuList from "src/components/SideMenuList";
// import WordSelection from "src/components/word-selection-tool";
import ProblemDescriptionModal from "src/components/problem-description";
import ReviewSubmitModal from "src/components/review-submit";

const headerStyle: React.CSSProperties = {
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  height: '100%',
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  // textAlign: "center",
  // lineHeight: "120px",
  // color: "#fff",
  backgroundColor: "#fff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  height: '100vh'
  // width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
};
const { Header, Footer, Sider, Content } = Layout;
type IProblemModalType = 'single' | 'batch' | 'none';

const Translate = () => {
  const [problemModalOpen, setProblemModalOpen] = useState<IProblemModalType>('none');
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  return (
    <div style={{width: 500, marginLeft:200, marginTop: 500}}>
        <Button type="primary" onClick={() => setProblemModalOpen('batch')}>
              批量审读
            </Button>
            <Button type="primary" onClick={() => setReviewModalOpen(true)}>
              审读提交
            </Button>
      017年11月21日晚
      广东潮州市饶平县汫洲镇发生一宗因争抢赌场而引发的3死6伤枪杀案。
      11月24日晚
      经过连续6个昼夜不眠不休的艰苦奋战，潮州警方在汕头市抓获涉案人员林某中、林某弟和黄某龙（均为饶平县汫洲镇人），缴获美制式AR15半自动步枪一支、意大利制伯莱塔霰弹枪一支、苏制654K改装手枪一支、子弹59发。
      11月26日晚
      警方在东莞市成功抓获头号犯罪嫌疑人林某宏，成功破获该起潮州史上最严重枪杀案。
      近日，记者对专案民警进行了独家采访，揭开悍匪林某宏鲜为人知的一面。
      {/* <WordSelection /> */}
      <ProblemDescriptionModal
        title={problemModalOpen === 'single' ? '问题描述' : '批量审读'}
        open={problemModalOpen !== 'none'}
        onCancel={() => setProblemModalOpen('none')}
      />
      、
      <ReviewSubmitModal open={reviewModalOpen} />
    </div>
  );
};

export default Translate;
