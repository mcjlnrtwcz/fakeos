import Apps from './Apps/Apps';
import Tasks from './Tasks/Tasks';

export default function Controls({ tasks, apps }) {
  return (
    <div>
      <Tasks tasks={tasks} />
      <Apps apps={apps} />
    </div>
  );
}
