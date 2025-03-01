import { classNames } from '@/utils/classNames/classNames';
import '@/index.css';
import { AppRouter } from './AppRouter';

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
