import { classNames } from '@/utils/classNames/classNames';
import cls from './Header.module.css';
import { Circle } from '@/components/CIrcle';

export const Header = () => {
  return (
    <div className={cls.area}>
      <div className={cls.context}>
        <div className={classNames(cls.block, {}, [])}>
          <span className={classNames(cls.text, {}, [])}>F</span>
          <span className={classNames(cls.text, {}, [])}>L</span>
          <span className={classNames(cls.text, {}, [])}>X</span>
          <span className={classNames(cls.text, {}, [])}>T</span>
        </div>
        <h1 className={classNames(cls.title, {}, [])}>
          Start small — get to the big one!
        </h1>
      </div>
      <ul className={cls.circles}>
        {Array.from({ length: 10 }, (_, index) => (
          <Circle key={index} i={index + 1} />
        ))}
      </ul>
      <div className={classNames(cls.line, {}, [])}>
        <div className={classNames(cls.circl, {}, [])}></div>
      </div>
    </div>
  );
};

export default Header;