import { postOpenApi } from "@/request/request";
import { DeviceInfo } from "@/types";
import { useQuery } from "@tanstack/react-query";

import { memo, useState } from "react";
import { playImg } from "./playImg";
import { css } from "@emotion/css";
import { Loading } from "@/components/Loading";
import { get } from "lodash-es";
import { jessibucaHtml } from "./jessibucaHtml";

export interface DeviceType4Props extends DeviceInfo {
  jessibucaUrl?: string;
  decoderUrl?: string;
}

export const DeviceType4Main = memo(
  ({
    projectId,
    deviceSn,
    jessibucaUrl = `${location.origin}/public/js/jessibuca.js`,
    decoderUrl = `${location.origin}/public/js/decoder.js`,
  }: DeviceType4Props) => {
    const [enabled, setEnabled] = useState(false);

    const { data, isLoading } = useQuery({
      enabled: enabled,
      queryKey: ["/openapi/iotopen/api/videos/play", projectId, deviceSn],
      queryFn: () =>
        postOpenApi("/openapi/iotopen/api/videos/play", {
          projectId,
          sn: deviceSn,
        }),
    });

    const httpFlv = get(data, "httpFlv", "");

    return (
      <div
        className={css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          background-color: rgba(13, 14, 27, 0.7);
          justify-content: center;
          font-size: 14px;
          position: relative;
        `}
      >
        {isLoading && <Loading />}
        {enabled ? null : (
          <img
            src={playImg}
            onClick={() => {
              setEnabled(true);
            }}
            className={css`
              cursor: pointer;
              width: 100px;
              height: 100px;
            `}
          />
        )}
        {enabled && data && httpFlv ? (
          <iframe
            className={css`
              width: 100%;
              height: 100%;
              border: 0;
            `}
            srcDoc={jessibucaHtml({
              httpFlv,
              jessibucaUrl,
              decoderUrl,
            })}
          />
        ) : null}
      </div>
    );
  }
);

export const DeviceType4 = (props: DeviceType4Props) => {
  return <DeviceType4Main {...props} />;
};
