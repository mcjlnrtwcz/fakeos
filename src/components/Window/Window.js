import styles from "./Window.module.scss";

import classnames from "classnames";

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
      <div class={styles.text}>{children}</div>
      <Controls />
    </div>
  );
}

function Controls() {
  return (
    <>
      <div class={styles.close}>x</div>
    </>
  );
}
