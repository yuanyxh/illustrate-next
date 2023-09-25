'use client';
import 'client-only';
import { FEEDBACK_ADDRESS } from '@/_config';
import Link from 'next/link';
import Text from '@/_components/Text/Text';
import style from './PageNotFound.module.css';

/**
 * @description 404 page not found
 */
export default function PageNotFound() {
  return (
    <div className={style['page-not-found']}>
      <h1 className={style['title']}>Not Found</h1>

      <Text className={style['error']} block>
        哎呀！好像不存在这个页面哦！请检查输入地址。
      </Text>

      <Text className={style['desc']} type="info" block size="small">
        如果你确认这是一个错误，请前往{' '}
        <Link
          className={style['feedback']}
          href={FEEDBACK_ADDRESS}
          target="_black"
        >
          Github
        </Link>{' '}
        反馈
      </Text>
    </div>
  );
}
