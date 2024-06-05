import { css } from "@emotion/css";

export function Loading() {
  return (
    <div
      className={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        className={css`
          width: 48px;
          height: 48px;
          border: 5px solid #fff;
          border-bottom-color: #64e3ff;
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;

          @keyframes rotation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      />
    </div>
  );
}
