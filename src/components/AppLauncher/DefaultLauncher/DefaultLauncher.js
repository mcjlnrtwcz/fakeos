import searchIcon from 'pixelarticons/svg/search.svg';

import App from '../../App/App'; // TODO: still used in AppManager

import styles from './DefaultLauncher.module.scss';

export default function DefaultLauncher({ apps }) {
  const [favorites, ...rest] = Object.entries(apps);

  return (
    <div class={styles.panel}>
      <div class={styles.header}>Applications</div>
      <div class={styles.search}>
        <span>Search</span>
        <img src={searchIcon} class={styles['search-icon']} />
      </div>
      <div class={styles.apps}>
        <AppGroup name={'Favorites'} customClass={styles.favorites}>
          {favorites[1].map((app) => (
            <App icon={app.icon}>{app.name}</App>
          ))}
        </AppGroup>
        {rest.map(([group, groupApps]) => (
          <AppGroup name={group}>
            {groupApps.map((app) => (
              <App icon={app.icon}>{app.name}</App>
            ))}
          </AppGroup>
        ))}
      </div>
      {/* TODO: place clock at the bottom? */}
    </div>
  );
}

function AppGroup({ name, customClass, children }) {
  return (
    <div class={customClass}>
      <span class={styles['app-group']}>{name}</span>
      {/* TODO: groups should be collapsible */}
      {children}
    </div>
  );
}
