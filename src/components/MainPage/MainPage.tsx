import cls from './MainPage.module.css';
import { classNames } from '@/utils/classNames/classNames';
import { Header } from '../Header';
import { Section } from '../Section';
import { Footer } from '../Footer';
import { Info } from '../Info';
import { useRef, RefObject } from 'react';

const MainPage = () => {
  const scrollToAboutProject: RefObject<HTMLDivElement> = useRef(null);
  const scrollToTechs: RefObject<HTMLDivElement> = useRef(null);

  const handleScroll = (ref: RefObject<HTMLDivElement>) => () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header 
        scrollButtons={{
          toAbout: handleScroll(scrollToAboutProject), 
          toPath: handleScroll(scrollToTechs) // Исправил "toPath" на "toTechs" для консистентности
        }}
      />
      <main className={classNames(cls.main, {}, [])}>
        <Info ref={scrollToAboutProject} />
        <Section ref={scrollToTechs} />
      </main>
      <Footer />
    </>
  )
}

export default MainPage;