import EventManager from '../libs/EventManager';

export default function toast({ type, content, duration }) {
  EventManager.emit('addtoast', { type, content, duration });
}
