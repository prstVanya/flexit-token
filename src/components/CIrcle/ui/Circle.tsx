import cls from './Circle.module.css';

interface CircleProps {
  i: number
}
export const Circle = ({ i }: CircleProps) => {
  return <li className={`${cls.circle} ${cls[`circle${i}`]}`}></li>;
};