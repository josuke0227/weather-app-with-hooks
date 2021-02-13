import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn:
      "https://b118e40662be4e958e8f56feaf255b9b@o421001.ingest.sentry.io/5559834",
    release: "weather-app@" + process.env.npm_package_version,
    integrations: [new Integrations.BrowserTracing()],

    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
