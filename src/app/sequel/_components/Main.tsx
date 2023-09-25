import React, { memo } from 'react';
import style from './Main.module.css';

/**
 * @description 网站主体内容
 */
export default memo(function Main({ children }: { children: React.ReactNode }) {
  return <main className={style.main}>{children}</main>;
});
