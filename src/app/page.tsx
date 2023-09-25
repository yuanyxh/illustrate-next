import Grid from './_components/Grid';
import { getAllMenu } from '@/_libs/generateMenus';
import styles from './_style/page.module.css';

export default function Home() {
  const menus = getAllMenu();

  return (
    <div className={styles.home}>
      {menus.map((menu) => (
        <Grid key={menu.path} page={menu} />
      ))}
    </div>
  );
}
