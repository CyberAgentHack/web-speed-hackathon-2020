function timeoutInternal(interval) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('timeout');
    }, interval || 0);
  });
}

function RaceTimeout(longTask, interval) {
  var longTask = Array.isArray(longTask) ? longTask : [longTask];

  if (interval && typeof interval === 'number') {
    longTask = longTask.concat(timeoutInternal(interval));
  }

  try {
    return Promise.race(longTask);
  } catch (err) {
    console.log(err.stack);
  }
}

export const timeout = RaceTimeout;
