import classnames from 'classnames';
import Close from 'pixelarticons/svg/close.svg';

import styles from './Window.module.scss';

export default function Window({ customClass, title, children }) {
  return (
    <div class={classnames(styles.window, customClass)}>
      <Title>{title}</Title>
      <div class={styles.contents}>{children}</div>
    </div>
  );
}

function Title({ children }) {
  return (
    <div class={styles.title}>
      <div class={styles['title-text']}>{children}</div>
      <Controls />
    </div>
  );
}

function Controls() {
  return (
    <div class={styles.close}>
      <img src={Close} class={styles['close-icon']} />
    </div>
  );
}
