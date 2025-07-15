const logEvent = (eventName, data) => {
  // Example logging function (store logs to local storage or a custom array)
  const logs = JSON.parse(localStorage.getItem('logs')) || [];
  logs.push({ eventName, data, time: new Date().toLocaleString() });
  localStorage.setItem('logs', JSON.stringify(logs));
};

export default logEvent;