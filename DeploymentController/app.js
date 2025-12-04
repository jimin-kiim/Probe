const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || "v1";

// 루트 경로로 들어온 GET 요청 처리 
app.get("/", (req, res) => {
    if (version == "v2") {
        res.send("Hello from v2");
    } else {
        res.send("Hello from v1");
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`[APP] ${version} running on port ${port}`);
});