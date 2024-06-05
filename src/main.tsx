import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <App
    {...{
      positionType: 1,
      deviceId: "426484487627472924",
      deviceSn: "AD02",
      deviceName: "AD02",
      deviceType: 4,
      projectId: "424688111633563724",
    }}
  />
);
