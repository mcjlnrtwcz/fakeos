import App from '../App/App';
import appIcon from 'pixelarticons/svg/frame.svg';

import styles from './AppManager.module.scss';

export default function AppManager() {
  return (
    <div>
      <div class={styles.header}>Running</div>
      <div class={styles.apps}>
        <App icon={appIcon}>Foo</App>
        <App icon={appIcon}>Bar</App>
        <App icon={appIcon}>Baz</App>
      </div>
    </div>
  );
}
