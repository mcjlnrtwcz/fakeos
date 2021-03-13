import dashboardIcon from 'pixelarticons/svg/dashbaord.svg';

import Button from '../Button/Button';

import styles from './Tasks.module.scss';

export default function Tasks({ tasks }) {
  // TODO: display app "header" icon
  return (
    <div>
      <Button icon={dashboardIcon} customClass={styles.dashboard} />
      {tasks.map((app) => (
        <Button icon={app.icon} />
      ))}
    </div>
  );
}
