import calculatorIcon from 'pixelarticons/svg/calculator.svg';
import drawIcon from 'pixelarticons/svg/edit.svg';
import helpIcon from 'pixelarticons/svg/book-open.svg';
import terminalIcon from 'pixelarticons/svg/frame.svg';
import { useState } from 'preact/hooks';

import AppLauncher from '../AppLauncher/AppLauncher';
import AppManager from '../AppManager/AppManager';
import Controls from '../Controls/Controls';
import useEvent from '../../hooks/useEvent';

import styles from './Desktop.module.scss';

// TODO: improve storing icons
const APPS = {
  Favorites: [
    { name: 'Calculator', icon: calculatorIcon },
    { name: 'Terminal', icon: terminalIcon },
  ],
  Utilities: [
    { name: 'Calculator', icon: calculatorIcon },
    { name: 'Draw', icon: drawIcon },
  ],
  System: [
    { name: 'Terminal', icon: terminalIcon },
    { name: 'Help', icon: helpIcon },
  ],
};

const TASKS = [
  { name: 'Draw', icon: drawIcon },
  { name: 'Help', icon: helpIcon },
];

export default function Desktop({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Collapse launcher by pressing "super" key
  // TODO: debounce?
  useEvent(window, 'keydown', ({ key }) => {
    if (key === 'Meta') {
      setIsCollapsed((current) => !current);
    }
  });

  return (
    <div class={styles.desktop}>
      <div class={styles.windows}>{children}</div>
      <Controls tasks={TASKS} apps={APPS} />
      {!isCollapsed && (
        <div class={styles.panel}>
          {/* TODO: switch between the two with Controls */}
          <AppLauncher apps={APPS} />
          <AppManager tasks={TASKS} />
        </div>
      )}
    </div>
  );
}
