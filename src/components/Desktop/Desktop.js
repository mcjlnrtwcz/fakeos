import AppLauncher from '../AppLauncher/AppLauncher';
import AppManager from '../AppManager/AppManager';

import styles from './Desktop.module.scss';

export default function Desktop({ children }) {
  return (
    <div class={styles.desktop}>
      <div class={styles.panel}>
        <AppLauncher />
        <AppManager />
      </div>
      <div class={styles.windows}>{children}</div>
    </div>
  );
}
