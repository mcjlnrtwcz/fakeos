import zapIcon from 'pixelarticons/svg/zap.svg';

import Button from '../Button/Button';

import styles from './Apps.module.scss';

export default function Apps({ apps }) {
  // TODO: display app "header" icon
  return (
    <div>
      <Button icon={zapIcon} customClass={styles.zap} />
      {apps.Favorites.map((app) => (
        <Button icon={app.icon} />
      ))}
    </div>
  );
}
