"use strict";

return tasks.reduce((promiseChain, currentTask) => {
  return promiseChain.then(chain =>
    currentTask.then(result => [...chain, result]);
  );
}, Promise.resolve([])).then(arrayOfResults => {
  ....
});
