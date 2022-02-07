const logger = require("../utils/logger");
const config = require("../config");
const fs = require("fs");
const path = require("path")
let useDevSettings = false;
if(config.envName === "development" && fs.existsSync(path.join(__dirname, "../config/settings.development.js"))) {
  useDevSettings = true;
}
const settings = useDevSettings ? require("../config/settings.development") : require("../config/settings");
const User = require("../db/models/user");
const VerificationRequest = require("../db/models/verificationRequest");

class StatsController {
  constructor() {
    let verificationConfig = settings.rules.find(r => r.name === "Lizard Hands");
    this.roleConfiguration = verificationConfig.executor.config.roles;
  }
  async getTotal(req, res) {
    const result = await User.count().exec();
    res
      .status(200)
      .json({
        count: result,
      })
      .end();
  }


  async getVerifications(req, res) {
    const result = await VerificationRequest.count({});
    res
      .status(200)
      .json({
        count: result,
      })
      .end();
  }
}

module.exports = new StatsController();
