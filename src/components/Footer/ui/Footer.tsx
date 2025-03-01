import { classNames } from '@/utils/classNames/classNames';
import cls from './Footer.module.css';

interface IFooterData {
  className?: string;
}

export const Footer = ({ className }: IFooterData) => {
  return (
    <div className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.icons, {}, [])}>
          <a 
            target='_blank'
            className={classNames(cls.svg, {}, [cls.twitter])}
            href='#'  
          ></a>
          <a
            target='_blank'
            className={classNames(cls.svg, {}, [cls.youtube])}
            href='#'
          ></a>
          <a 
            target='_blank'
            className={classNames(cls.svg, {}, [cls.telegram])}
            href='#'  
          ></a>
        </div>
      </div>
    </div>
  );
};