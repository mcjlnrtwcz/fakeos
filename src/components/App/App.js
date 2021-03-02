import styles from './App.module.scss';

export default function App({ icon, children }) {
  return (
    <div class={styles.app}>
      <img src={icon} class={styles['app-icon']} />
      <span>{children}</span>
    </div>
  );
}
