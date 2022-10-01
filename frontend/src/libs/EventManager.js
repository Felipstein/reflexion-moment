class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  emit(event, payload) {
    if (!this.listeners.has(event)) {
      return;
    }

    const listeners = this.listeners.get(event);

    listeners.forEach((listener) => {
      listener(payload);
    });
  }

  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  removeListener(event, listenerToRemove) {
    if (!this.listeners.has(event)) {
      return;
    }

    const listenersFiltered = this.listeners.get(event).filter((listener) => (
      listener !== listenerToRemove
    ));

    this.listeners.set(event, listenersFiltered);
  }
}

export default new EventManager();
