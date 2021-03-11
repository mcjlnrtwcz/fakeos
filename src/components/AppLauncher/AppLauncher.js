import calculatorIcon from 'pixelarticons/svg/calculator.svg';
import helpIcon from 'pixelarticons/svg/book-open.svg';
import terminalIcon from 'pixelarticons/svg/frame.svg';
import { useState } from 'preact/hooks';

import CollapsedLauncher from './CollapsedLauncher/CollapsedLauncher';
import DefaultLauncher from './DefaultLauncher/DefaultLauncher';
import useEvent from '../../hooks/useEvent';

// TODO: improve storing icons
const APPS = {
  Favorites: [
    { name: 'Calculator', icon: calculatorIcon },
    { name: 'Terminal', icon: terminalIcon },
  ],
  Utilities: [{ name: 'Calculator', icon: calculatorIcon }],
  System: [
    { name: 'Terminal', icon: terminalIcon },
    { name: 'Help', icon: helpIcon },
  ],
};

export default function AppLauncher() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Collapse launcher by pressing "super" key
  useEvent(window, 'keydown', ({ key }) => {
    if (key === 'Meta') {
      setIsCollapsed((current) => !current);
    }
  });

  return isCollapsed ? (
    <DefaultLauncher apps={APPS} />
  ) : (
    <CollapsedLauncher apps={APPS} />
  );
}
