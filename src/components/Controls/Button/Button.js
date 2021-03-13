import classnames from 'classnames';

import styles from './Button.module.scss';

export default function Button({ icon, customClass }) {
  // TODO: tooltip with button desctiption (e.g. app/folder name)
  return (
    <div class={classnames(styles['button'], customClass)}>
      <img src={icon} />
    </div>
  );
}
