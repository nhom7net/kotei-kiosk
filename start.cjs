let concurrently = require("concurrently");

concurrently(
  [
    { command: "ng serve", name: "AngularService" },
    { command: "npm run api-start", name: "APIService" },
    {
      command:
        "wait-on http://localhost:4200 && wait-on http://localhost:6900 && npm run app-start",
      name: "UXClientService",
    },
  ],
  {
    killOthers: ["failure", "success"],
  }
);
