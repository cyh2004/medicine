import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProCard,
    ProConfigProvider,
    ProLayout,
} from '@ant-design/pro-components';
import React, { useState } from 'react';
import defaultProps from "./_defalutProps";
import { Space, Typography, List, Image } from 'antd';
import pic from '../images/home.jpg';
import pic1 from '../images/hu.png';

const { Text, Title } = Typography;

export default () => {
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
      fixSiderbar: true,
      layout: 'mix',
      splitMenus: true,
    });
  
    const [pathname, setPathname] = useState('/welcome');
    const [num, setNum] = useState(40);

    const data = [
        "一、模仿五禽,神形兼备 五禽戏以模仿动物的形态动作,以动为主,通过形体动作的导引,引动气机的升降开合,并且将动物的神韵寓于外形动作中,使之具有虎之威猛、鹿之安适、熊之沉稳、鸟之轻捷、猿之灵巧。",
        "二、活动全面,大小兼顾 五禽戏动作中躯体动作导引全面完善,躯干运动包括前俯、后仰、侧屈、拧转、开合、缩放等不同的姿势,对脊柱、督脉及背部脑穴有较好的运动调节作用。同时本功法还特别注重手指、脚趾等小关节的运动,以达到加强未端血液循环的目的,并且兼顾了平时活动较少部位的锻炼。",
        "三、动静结合,练养相兼 五禽戏虽以动功为主,舒展形体、活动筋骨、畅通经络但同时在功法的起势和收势,以及每一戏结束后,配以短暂的静功站桩,以诱导练功者进人相对平稳的状态和“五禽”的意境,以此来调整气息、宁静心神。"
    ];

    const MultiCard = () => {
        if (pathname === '/welcome') {
            return (
                <>
                    <img 
                        src={pic.src} height={200} 
                    />
                    <ProCard>
                        <Space direction="vertical">
                            <Title level={3}>五禽戏介绍</Title>
                            <Text>
                                五禽戏功法是中国重要的传统养生康复手段之一,由东汉末年名医华佗所创,至今已有一千八百年的历史。此功法首见于《三国志·华佗传》记载,故又名“华佗五禽戏”。最早在南朝时期陶弘景《养性延命录·导引按摩》中有详细文字描述:“吾有一术,名曰五禽戏:一曰虎,二曰鹿,三曰熊,四曰猿,五日鸟,亦以除疾,兼利手足,以常导引。”全套功法通过模仿虎、鹿、熊、猿、鸟五种不同动物的动作,在进行肢体锻炼的同时,注重内气运行、意念导引以调整身心。国内研究者对五禽戏功法进行了一系列研究,内容涉及对免疫系统、心血管系统、心理健康、抗衰老等方面的影响。目前流传较广的五禽戏有《养性延命录》《万寿仙书》所记载的五禽戏以及国家体育总局新编的健身气功五禽戏三种版本。
                            </Text>
                            <Text>
                                本器材参考八段锦来源为国家体育总局健身气功管理中心收集、整编的“健身气功·八段锦”和国家体育总局新编健身气功五禽戏。
                            </Text>
                            <Title level={4}>功法特点</Title>
                            <List
                                dataSource={data}
                                split={false}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                            <Title level={4}>常习益处</Title>
                            <Text>
                                适当运动可增强骨密度。
                                骨密度降低会造成危害性极大的骨质疏松性骨折。人体的骨密度受多种因素的影响,其中运动是重要的影响因素之一。近年研究发现,不同类型、不同强度的运动对骨密度的影响不同,中长期的大强度运动训练并不能增强骨密度，相反还可导致骨量减少、骨密度降低。安徽中医药大学张庆武等在“华佗五禽戏对大学生骨密度的影响”的研究中发现,长期进行华佗五禽戏锻炼,能够明显提高受试大学生腰椎、股骨颈及股骨大转子等处的骨密度,有效预防骨质疏松的发生。
                                华佗五禽戏作为一种中小强度的有氧运动，以腰为主轴和枢纽,带动上下肢向各个方向运动,通过前俯、后仰、侧屈、环转、折叠、提落、开阖、缩放等各种不同的姿势,进行全身性锻炼,牵拉关节韧带和肌肉,疏通经络、调和气血、活动筋骨.滑利关节,起到增强骨密度的作用。 
                            </Text>
                        </Space>
                    </ProCard>
                </>
            );
        } else {
            if (pathname == '/admin/sub-page1') {
              //虎戏
              return (
                <ProCard>
                    <Space direction="vertical">
                        <Title level={3}>虎戏</Title>
                        <Text>
                          	虎戏体现虎的威猛。神发于目,虎视眈眈;威生于爪,伸缩有力;神威并重,气势凌人。动作变化要做到刚中有柔、柔中生刚、外刚内柔、刚柔相济,具有动如雷霆无阻挡、静如泰山不可摇的气势。
                        </Text>
                        <Title level={4}>动作</Title>
						<img src={pic1.src} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} height={300}/>
						<Text>
							动作一:两腿开立,与肩同宽,两手自然下垂于体侧,掌心向下,十指撑开,再弯曲成虎爪状;目视两掌。
						</Text>
						<Text>
							动作二:随后,两手外旋,由小指先弯曲,其余四指依次弯曲握拳两拳沿体前缓慢上提。至肩前时,十指撑开,举至头上方再弯曲成虎爪状:目视两掌。
						</Text>
						<Text>
							动作三:两掌外旋握拳,拳心相对;目视两拳。
						</Text>
						<Text>
							动作四:两拳下拉至肩前时,变掌下按。沿体前下落至腹前,十指撑开,掌心向下;目视两掌
						</Text>
						<Text>
							重复一至四动作3 遍后,两手自然垂于体侧;目视前方。
						</Text>
                        <Title level={4}>功效</Title>
                        <Text>
                          虎戏主肝,威生于爪,要力达指尖,神发于目,要虎视眈眈。爪甲与目皆属肝,用力时气血所至,可以起到舒筋、养肝、明目的作用;加上做虎举与虎扑的动作时身体舒展两臂向上拔伸,身体两侧得到锻炼,使得肝胆经脉循行部位气血通畅。经常练习自然使肝气舒畅,肝系疾病与不适得到缓解。
                        </Text>
                        <div>
							<video src={`${process.env.PUBLIC_URL}/videos/a.mp4`} controls />

						</div>
                    </Space>
                </ProCard>
              );
            // } else if (pathname == '/admin/sub-page2') {
            //   //鹿戏
            // } else if (pathname == '/admin/sub-page3') {
            //   //熊戏
            // } else if (pathname == '/admin/sub-page4') {
            //   //猿戏
            // } else if (pathname == '/admin/sub-page5') {
            //   //鸟戏
            } else {
              return null;
            }
        }
    };

    return (
      <div
        id="test-pro-layout"
        style={{
          height: '100vh',
          overflow: 'auto',
        }}
      >
            <ProLayout
              prefixCls="my-prefix"
              {...defaultProps}
              location={{
                pathname,
              }}
              token={{
                header: {
                  colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
                },
              }}
              siderMenuType="group"
              menu={{
                collapsedShowGroupTitle: true,
              }}
              title="五禽戏"
              logo="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              menuItemRender={(item, dom) => (
                <div
                  onClick={() => {
                    setPathname(item.path || '/welcome');
                  }}
                >
                  {dom}
                </div>
              )}
              {...settings}
            >
                <MultiCard />
            </ProLayout>
      </div>
    );
  };
