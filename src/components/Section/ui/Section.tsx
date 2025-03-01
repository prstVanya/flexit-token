import { classNames } from '@/utils/classNames/classNames';
import cls from './Section.module.css';

interface ISectionData {
  className?: string;
}

export const Section = ({ className }: ISectionData) => {
  return (
    <div className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
       <ul className={classNames(cls.list, {}, [])}>
        <li className={classNames(cls.item, {}, [])}>
          <h2 className={classNames(cls.heading, {})}>Start small</h2>
          <p className={classNames(cls.subtitle, {}, [])}>
            It doesn't matter where you start — 
            what matters is where you're heading.
          </p>
          <div className={classNames(cls.svg, {}, [])}></div>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <h2 className={classNames(cls.heading, {})}>Step by step to success</h2>
          <p className={classNames(cls.subtitle, {}, [])}>
            Every step brings you closer to your goal.
          </p>
          <div className={classNames(cls.svg, {}, [cls.second])}></div>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <h2 className={classNames(cls.heading, {})}>Moving forward with confidence</h2>
          <p className={classNames(cls.subtitle, {}, [])}>
            Start now, achieve more.
          </p>
          <div className={classNames(cls.svg, {}, [cls.third])}></div>
        </li>
        <li className={classNames(cls.item, {}, [])}>
          <h2 className={classNames(cls.heading, {})}>Your path to success</h2>
          <p className={classNames(cls.subtitle, {}, [])}>
            Start small — move towards bigger goals.
          </p>
          <div className={classNames(cls.svg, {}, [cls.fourth])}></div>
        </li>
       </ul>
      </div>
    </div>
  );
};