const axios = require("axios");
const moment = require("moment");

// Lokiのエンドポイント
const LOKI_BASE_URL = "http://localhost:3100/loki/api/v1/push";

// 複数のログエントリを含むログデータの構築
const logData = {
  streams: [
    {
      stream: {
        app: "your-app-name",
        level: "info",
      },
      values: [[(moment().valueOf() * 1000000).toString(), "ログメッセージ1"]],
    },
  ],
};

// Lokiへのログ送信
axios
  .post(LOKI_BASE_URL, logData)
  .then((response) => console.log("ログが正常に送信されました"))
  .catch((error) => console.error("ログの送信に失敗しました", error));
