// /lib/gtm.js
export const pushToDataLayer = (eventName, params = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
};
