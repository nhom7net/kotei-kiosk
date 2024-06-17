const concurrently = require("concurrently");

concurrently(
    [
        { command: "ng serve", name: "Server", prefix: "Server" },
        { command: "wait-on http://localhost:4200 && npm run app-start", name: "UX", prefix: "UX" },
    ],
    {
        killOthers: ["failure", "success"],
        restartTries: 3,
    }
);
