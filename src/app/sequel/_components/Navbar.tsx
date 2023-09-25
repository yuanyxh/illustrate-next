import Link from 'next/link';
import Text from '@/_components/Text/Text';
import style from './Navbar.module.css';

/**
 * @description 导航栏
 */
export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style['left']}>
        <Link style={{ height: '100%' }} href={'/'}>
          <h1 className={style['logo-container']} title="yuanyxh">
            <img className={style['logo']} src="/logo.png" alt="logo" />

            <Text className={style['logo-text']} block size="large">
              yuanyxh
            </Text>
          </h1>
        </Link>
      </div>

      <div className={style['right']}>
        <ul className={style['list']}>
          <li className={style['list-item']} title="light">
            <i
              className="iconfont icon-light"
              style={{ color: 'var(--color-primary)' }}
            ></i>
          </li>

          <li className={style['list-item']} title="blog">
            <Link href="https://yuanyxh.com/" target="_blank">
              <i
                className="iconfont icon-blog"
                style={{
                  color: 'var(--color-primary)',
                  fontSize: 'calc(var(--font-size-extra-large) * 1)'
                }}
              ></i>
            </Link>
          </li>
          <li className={style['list-item']} title="github">
            <Link href="https://github.com/yuanyxh/illustrate" target="_blank">
              <i
                className="iconfont icon-github-fill"
                style={{ color: 'var(--color-info-dark-2)' }}
              ></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
