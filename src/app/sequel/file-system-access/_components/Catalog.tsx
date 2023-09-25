import { CatalogConfig } from '../_config';
import Dialog from '@/_components/Dialog/Dialog';
import Button from '@/_components/Button/Button';
import Text from '@/_components/Text/Text';
import style from './Catalog.module.css';

interface CatalogProps extends Props {
  show: boolean;
  change: React.Dispatch<React.SetStateAction<boolean>>;
  config: (typeof CatalogConfig)['copy'];
}

export default function Catalog(props: CatalogProps) {
  const { show, change, config } = props;

  return (
    <Dialog
      className={style['catalog']}
      modal={false}
      closeOnClickModal={false}
      show={show}
      change={change}
      title={config.TITLE}
    >
      {{
        body() {
          return (
            <div>
              <div className={style['desc']}>
                <Text type="info">{config.DESC}</Text>
              </div>

              <div className={style['directory-select']}></div>
            </div>
          );
        },
        footer() {
          return (
            <div className={style['operate']}>
              <Button className={style['create-dierctory']}>新建文件夹</Button>

              <div className={style['resolve']}>
                <Button type="primary">{config.BUTTON_TEXT}</Button>
                <Button>取消</Button>
              </div>
            </div>
          );
        }
      }}
    </Dialog>
  );
}
