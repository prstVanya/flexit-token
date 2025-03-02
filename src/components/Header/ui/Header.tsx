import { classNames } from '@/utils/classNames/classNames';
import cls from './Header.module.css';
import { Circle } from '@/components/CIrcle';

type ScrollButtons = {
  toAbout: () => void;
  toPath: () => void;
};

interface IHeaderData {
  scrollButtons: ScrollButtons;
}

export const Header = ({ scrollButtons }: IHeaderData) => {
  return (
    <header className={cls.area}>
      <div className={classNames(cls.header, {}, [])}>
        <div className={classNames(cls.nav, {}, [])}>
          <div className={classNames(cls.flex, {}, [])}>
            <div className={classNames(cls.logo, {}, [])}></div>
            <p className={classNames(cls.t, {}, [])}>flexit</p>
          </div>
          <nav className={classNames(cls.list, {}, [])}>
            <button 
              className={classNames(cls.to, {}, [])}
              onClick={scrollButtons.toAbout}
            >About</button>
            <button 
              className={classNames(cls.to, {}, [])}
              onClick={scrollButtons.toPath}  
            >Path</button>
          </nav>
        </div>
      </div>
      <div className={cls.context}>
        <div className={classNames(cls.block, {}, [])}>
          <span className={classNames(cls.text, {}, [])}>F</span>
          <span className={classNames(cls.text, {}, [])}>L</span>
          <span className={classNames(cls.text, {}, [])}>X</span>
          <span className={classNames(cls.text, {}, [])}>T</span>
        </div>
        <h1 className={classNames(cls.title, {}, [])}>
          Start small — get to the big one! 
          <button 
            className={classNames(cls.button, {}, [])}
            onClick={scrollButtons.toAbout}
          >
            learn more
          </button>
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
    </header>
  );
};

export default Header;