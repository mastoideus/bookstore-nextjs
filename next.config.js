const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongo_username: "anel",
        mongo_password: "mvYAvgaQHIx5hXHp",
        mongo_cluster: "cluster0",
        mongo_database: "bookstore-dev",
      },
    };
  }
  return {
    env: {
      mongo_username: "anel",
      mongo_password: "mvYAvgaQHIx5hXHp",
      mongo_cluster: "cluster0",
      mongo_database: "bookstore",
    },
  };
};
