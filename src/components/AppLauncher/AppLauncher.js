import App from '../App/App';
import calculatorIcon from 'pixelarticons/svg/calculator.svg';
import helpIcon from 'pixelarticons/svg/book-open.svg';
import searchIcon from 'pixelarticons/svg/search.svg';
import terminalIcon from 'pixelarticons/svg/frame.svg';

import styles from './AppLauncher.module.scss';

export default function AppLauncher() {
  return (
    <div>
      <div class={styles.header}>Applications</div>
      <div class={styles.search}>
        <span>Search</span>
        <img src={searchIcon} class={styles['search-icon']} />
      </div>
      <div class={styles.apps}>
        <AppGroup name="Favorites" customClass={styles.favorites}>
          <App icon={calculatorIcon}>Calculator</App>
          <App icon={terminalIcon}>Terminal</App>
        </AppGroup>
        <AppGroup name="Utilities">
          <App icon={calculatorIcon}>Calculator</App>
        </AppGroup>
        <AppGroup name="System">
          <App icon={terminalIcon}>Terminal</App>
          <App icon={helpIcon}>Help</App>
        </AppGroup>
        {/* TODO: apps should be in some app repository with respective icons */}
      </div>
      {/* TODO: place clock at the bottom? */}
    </div>
  );
}

function AppGroup({ name, customClass, children }) {
  return (
    <div class={customClass}>
      <span class={styles['app-category']}>{name}</span>
      {/* TODO: groups should be collapsible */}
      {children}
    </div>
  );
}
