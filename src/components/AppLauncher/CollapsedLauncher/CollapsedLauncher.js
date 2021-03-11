import styles from './CollapsedLauncher.module.scss';

export default function CollapsedLauncher({ apps }) {
  return (
    <div>
      {apps.Favorites.map((app) => (
        <CollapsedApp app={app} />
      ))}
    </div>
  );
}

function CollapsedApp({ app }) {
  // TODO: tooltip with app name
  return (
    <div class={styles['collapsed-app']}>
      <img src={app.icon} class={styles['app-icon']} title={app.name} />
    </div>
  );
}
