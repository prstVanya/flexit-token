import { classNames } from '@/utils/classNames/classNames';
import cls from './Footer.module.css';

interface IFooterData {
  className?: string;
}

export const Footer = ({ className }: IFooterData) => {
  return (
    <footer className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.icons, {}, [])}>
          <a 
            target='_blank'
            className={classNames(cls.svg, {}, [cls.twitter])}
            href='https://x.com/flexittoken'
          ></a>
          <a
            target='_blank'
            className={classNames(cls.svg, {}, [cls.youtube])}
            href='#'
          ></a>
          <a 
            target='_blank'
            className={classNames(cls.svg, {}, [cls.telegram])}
            href='https://t.me/+k-PtchtSzONhOTM6'  
          ></a>
        </div>
      </div>
    </footer>
  );
};