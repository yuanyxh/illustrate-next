import { getAllMenu } from '@/_libs/generateMenus';
import Navbar from './_components/Navbar';
import Sidebar from './_components/Sidebar';
import Main from './_components/Main';
import styles from './_style/layout.module.css';

/**
 * @description 网站整体布局
 */
export default async function Layout({ children }: ChildProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Sidebar menus={getAllMenu()} />
      <Main>{children}</Main>
    </div>
  );
}
