'use client';

import Tip from '@/_components/Tip/Tip';
import style from './_style/page.module.css';

// --title: 测试页面--

export default function Test() {
  return (
    <div className={style['test']}>
      <Tip type="primary">
        {{
          header() {
            return 'TIP';
          },
          body() {
            return <span>Test content</span>;
          }
        }}
      </Tip>
    </div>
  );
}
