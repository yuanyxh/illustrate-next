import Link from 'next/link';
import Image from 'next/image';
import style from './Grid.module.css';

const title = style.title + ' doubleline-substring';

interface GridProps {
  page: { path: string; title: string; image?: string };
}

export default function Grid({ page }: Readonly<GridProps>) {
  return (
    <div className={style.grid}>
      <Link href={page.path}>
        <div className={style.media}>
          {page.image && <Image src={page.image} alt="演示封面" />}
        </div>
      </Link>
      <Link href={page.path}>
        <h4 className={title}>{page.title}</h4>
      </Link>
    </div>
  );
}
