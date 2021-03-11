import { useEffect } from 'preact/hooks';

/**
 * Add event listener
 * @param  {} target origin of events
 * @param  {} event event name (string)
 * @param  {} handler function that will be passed event object
 * @param  {} passive if true, indicates that the function specified by listener will never call preventDefault()
 */
export default function useEvent(target, event, handler, passive = true) {
  useEffect(() => {
    target.addEventListener(event, handler, passive);

    return () => target.removeEventListener(event, handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
