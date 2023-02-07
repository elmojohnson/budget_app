import AppContext from "@/contexts/AppContext";
import useApp from "@/hooks/useApp";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }: AppProps) {
  const app = useApp();
  return (
    <AppContext.Provider value={app}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
