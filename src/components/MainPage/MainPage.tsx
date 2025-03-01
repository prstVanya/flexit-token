import cls from './MainPage.module.css';
import { classNames } from '@/utils/classNames/classNames';
import { Header } from '../Header';
import { Section } from '../Section';
import { Footer } from '../Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <main className={classNames(cls.main, {}, [])}>
        <Section />
      </main>
      <Footer />
    </>
  )
}

export default MainPage;