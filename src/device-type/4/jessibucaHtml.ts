

export const jessibucaHtml = ({

  httpFlv,
  jessibucaUrl,
  decoderUrl,
}: {
  httpFlv: string;
  jessibucaUrl?: string
  decoderUrl?: string
}) => {
  return `
<!doctype html>
<html lang="en">
  <head>
    <script src="${jessibucaUrl}"></script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html,
      body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        overflow: hidden;
      }

      #jes-container {
        background: rgba(13, 14, 27, 0.7);
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="jes-container"></div>

    <script>
      var $container = document.getElementById("jes-container");

      var showOperateBtns = true; // 是否显示按钮
      var forceNoOffscreen = true; //
      var jessibuca = null;

      function create() {
        jessibuca = new Jessibuca({
          container: $container,
          decoder: "${decoderUrl}",
          videoBuffer: 0.2, // 缓存时长
          isResize: false,
          text: "",
          loadingText: "加载中",
          useMSE: false,
          showBandwidth: showOperateBtns, // 显示网速
          operateBtns: {
            fullscreen: true,
            screenshot: showOperateBtns,

            play: true,
            audio: showOperateBtns,
          },
          forceNoOffscreen: forceNoOffscreen,
          isNotMute: false,
        });

        setTimeout(() => {
          setPlayUrl();
        }, 0);
      }

      create();

      function setPlayUrl() {
       

        let href = "${httpFlv}"

        if (href) {
          jessibuca.play(href);
        }
      }
    </script>
  </body>
</html>

`
}