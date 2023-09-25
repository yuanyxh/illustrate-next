'use client';

import { useSelectedLayoutSegment, usePathname } from 'next/navigation';
import Link from 'next/link';
import { classnames } from '@/_libs';
import style from './Sidebar.module.css';

interface SidebarProps extends Props {
  menus: Menus[];
}

const generateClass = classnames(style);

/**
 * @description 网站侧边栏
 */
export default function Sidebar({ menus }: Readonly<SidebarProps>) {
  const segment = useSelectedLayoutSegment();

  const active = generateClass(['link', 'active']);
  const side = generateClass(
    { 'visible-side': true, sidebar: true },
    'scroll-y'
  );

  return (
    <>
      <aside className={side}>
        {menus.map((page, i) => (
          <Link
            key={i}
            href={`${page.path}`}
            className={page.path.endsWith(segment || '') ? active : style.link}
          >
            <span className="doubleline-substring">{page.title}</span>
          </Link>
        ))}
      </aside>
    </>
  );
}
