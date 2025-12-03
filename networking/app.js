const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// 루트 경로에 대한 GET 요청 처리 
app.get("/", (req, res) => {
    res.send(`Hello from ${process.env.NAME}`);
});

// 서버 시작 
app.listen(port, () => {
    console.log(`[APP] ${process.env.NAME} running on port ${port}`);
});