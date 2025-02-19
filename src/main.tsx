import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { PostHogProvider } from "posthog-js/react";

const options = {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
};

const root = createRoot(document.getElementById("root"));
root.render(
  <PostHogProvider
    apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY}
    options={options}
  >
    <App />
  </PostHogProvider>
);
