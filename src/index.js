import Desktop from './components/Desktop/Desktop';
import ExampleWindow from './components/ExampleWindow/ExampleWindow';

import './styles/global.scss';

export default function OperatingSystem() {
  return (
    <Desktop>
      <ExampleWindow />
      <ExampleWindow />
      <ExampleWindow />
      <ExampleWindow />
    </Desktop>
  );
}
