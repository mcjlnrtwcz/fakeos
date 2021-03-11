import AppLauncher from '../AppLauncher/AppLauncher';

import styles from './Desktop.module.scss';

export default function Desktop({ children }) {
  return (
    <div class={styles.desktop}>
      <div class={styles.windows}>{children}</div>
      <AppLauncher />
    </div>
  );
}
