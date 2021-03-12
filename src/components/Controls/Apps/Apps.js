import styles from './Apps.module.scss';

export default function Apps({ apps }) {
  // TODO: display app "header" icon
  return (
    <div>
      {apps.Favorites.map((app) => (
        <App app={app} />
      ))}
    </div>
  );
}

function App({ app }) {
  // TODO: tooltip with app name
  return (
    <div class={styles['app']}>
      <img src={app.icon} class={styles['app-icon']} title={app.name} />
    </div>
  );
}
