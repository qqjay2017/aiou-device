import "./base.css";
import { DeviceType4, DeviceType4Props } from "./device-type/4/DeviceType4";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface AppProps extends DeviceType4Props {}

const AppInner = (props: AppProps) => {
  if (props.deviceType === undefined) {
    return null;
  }
  if (props.deviceType === 4) {
    return <DeviceType4 {...props} />;
  }
  return <div></div>;
};

const App = (props: AppProps) => (
  <QueryClientProvider
    client={
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      })
    }
  >
    <AppInner {...props} />
  </QueryClientProvider>
);

export default App;
