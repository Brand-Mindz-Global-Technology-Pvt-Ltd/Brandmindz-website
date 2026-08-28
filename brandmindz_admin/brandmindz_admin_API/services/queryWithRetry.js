const TRANSIENT_CONNECTION_ERRORS = new Set([
  'PROTOCOL_CONNECTION_LOST',
  'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR',
  'ECONNRESET',
  'ETIMEDOUT',
  'EPIPE'
]);

function queryWithRetry(execute, queryArgs, callback, options = {}) {
  const maxRetries = options.maxRetries ?? 2;
  const retryDelayMs = options.retryDelayMs ?? 150;
  let retryCount = 0;

  const run = () => execute(...queryArgs, (err, ...resultArgs) => {
    const shouldRetry =
      err &&
      TRANSIENT_CONNECTION_ERRORS.has(err.code) &&
      retryCount < maxRetries;

    if (!shouldRetry) {
      callback(err, ...resultArgs);
      return;
    }

    retryCount += 1;
    console.warn(
      `[MySQL] Connection interrupted (${err.code}); retrying query ${retryCount}/${maxRetries}.`
    );
    setTimeout(run, retryDelayMs * retryCount);
  });

  return run();
}

module.exports = {
  TRANSIENT_CONNECTION_ERRORS,
  queryWithRetry
};
