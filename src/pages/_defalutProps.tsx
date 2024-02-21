import {
    ChromeFilled,
    CrownFilled,
    SmileFilled,
    TabletFilled,
  } from '@ant-design/icons';
  
  export default {
    route: {
      path: '/',
      routes: [
        {
          path: '/welcome',
          name: '欢迎',
          icon: <SmileFilled />,
          component: './Welcome',
        },
        {
          path: '/admin',
          name: '介绍',
          icon: <CrownFilled />,
          access: 'canAdmin',
          component: './Admin',
          routes: [
            {
              path: '/admin/sub-page1',
              name: '虎戏',
              icon: <CrownFilled />,
              component: './Welcome',
            },
            {
              path: '/admin/sub-page2',
              name: '鹿戏',
              icon: <CrownFilled />,
              component: './Welcome',
            },
            {
              path: '/admin/sub-page3',
              name: '熊戏',
              icon: <CrownFilled />,
              component: './Welcome',
            },
            {
              path: '/admin/sub-page4',
              name: '猿戏',
              icon: <CrownFilled />,
              component: './Welcome',
            },
            {
              path: '/admin/sub-page5',
              name: '鸟戏',
              icon: <CrownFilled />,
              component: './Welcome',
            },
          ],
        },
      ],
    },
    location: {
      pathname: '/',
    },
  };