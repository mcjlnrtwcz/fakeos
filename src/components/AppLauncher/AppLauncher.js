import searchIcon from 'pixelarticons/svg/search.svg';

import App from '../App/App';

import styles from './AppLauncher.module.scss';

export default function AppLauncher({ apps }) {
  const [favorites, ...rest] = Object.entries(apps);

  return (
    <>
      <div class={styles.header}>Applications</div>
      {/* TODO: focus on search bar after this is un-collapsed  */}
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
    </>
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
