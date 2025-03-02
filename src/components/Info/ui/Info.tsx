import { classNames } from '@/utils/classNames/classNames';
import cls from './Info.module.css';
import { Ref, forwardRef } from 'react';

interface IInfoData {
  className?: string;
  ref: Ref<HTMLDivElement>;
}

export const Info = forwardRef<HTMLDivElement, IInfoData>(({ className }, ref) => {
  return (
    <section ref={ref} className={classNames(cls.section, {}, [className || ''])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.info, {}, [])}>
          <h2 className={classNames(cls.about, {}, [])}>
            About Flexit!
          </h2>
          <p className={classNames(cls.subtitle, {}, [])}>
            Everything started small once—first steps, simple ideas. 
            But that's exactly how great stories are built!
            Flexit Coin is a token that symbolizes progress.
            We believe that anyone can achieve more by starting small.
          </p>
        </div>
        <div className={classNames(cls.links, {}, [])}>
          <p className={classNames(cls.te, {}, [])}>Available on</p>
          <a className={classNames(cls.blum, {}, [])}></a>
        </div>
      </div>
    </section>
  );
});