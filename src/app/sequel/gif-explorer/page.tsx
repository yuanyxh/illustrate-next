'use client';

import ExtraInformation from '@/_components/ExtraInformation/ExtraInformation';
import GIFVideo from './_component/GIFVideo';
import GIFPicture from './_component//GIFPicture';
import GIFPlayer from './_component/GIFPlayer';
import style from './_style/page.module.css';

// --title: GIF 编解码--

export default function GIFExplorer() {
  return (
    <div className={style['gif-explorer']}>
      <ExtraInformation
        platform={{
          blog: {
            title: '深入浅出 GIF',
            url: 'https://yuanyxh.com/posts/produce/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BA%20GIF.html'
          },
          juejin: { url: 'https://juejin.cn/post/7277831097391775755' },
          zhihu: { url: 'https://zhuanlan.zhihu.com/p/655933856' },
          csdn: {
            url: 'https://blog.csdn.net/yuanfgbb/article/details/132845424?spm=1001.2014.3001.5502'
          }
        }}
      />

      <GIFVideo />

      <GIFPicture />

      <GIFPlayer />
    </div>
  );
}
