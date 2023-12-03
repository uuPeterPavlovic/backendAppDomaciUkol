"use strict";
const DomaciukolMainAbl = require("../../abl/domaciukol-main-abl.js");

class DomaciukolMainController {
  init(ucEnv) {
    return DomaciukolMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return DomaciukolMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return DomaciukolMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new DomaciukolMainController();
