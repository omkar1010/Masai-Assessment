function createTimer(duration, onComplete) {
    setTimeout(() => {
      onComplete("Timer of " + duration + "ms has finished.");
    }, duration);
  }
  
  