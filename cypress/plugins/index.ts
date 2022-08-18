import cypressFailFast = require("cypress-fail-fast/plugin");

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Cypress.PluginConfigOptions => {
  cypressFailFast(on, config);
  return config;
};
