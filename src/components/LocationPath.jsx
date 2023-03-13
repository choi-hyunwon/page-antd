import React from 'react';
import { Breadcrumb } from 'antd';

import '../assets/scss/LocationPath.scss';

const menuItems = [
    {
        key: '1',
        label: (
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            General
        </a>
        ),
    },
    {
        key: '2',
        label: (
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            Layout
        </a>
        ),
    },
    {
        key: '3',
        label: (
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Navigation
        </a>
        ),
    },
];

function LocationPath(props) {
    return (
        <div className='LocationPath'>
              <Breadcrumb
    items={[
      {
        title: 'Ant Design',
      },
      {
        title: <a href="">Component</a>,
      },
      {
        title: <a href="">General</a>,
        menu: {
          items: menuItems,
        },
      },
      {
        title: 'Button',
      },
    ]}
  />
        </div>
    );
}

export default LocationPath;
