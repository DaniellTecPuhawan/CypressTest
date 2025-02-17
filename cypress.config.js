const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,  // Permite el acceso a múltiples dominios
    experimentalSessionAndOrigin: true, // Habilita el soporte para múltiples orígenes
    setupNodeEvents(on, config) {
      // Agregar eventos si es necesario
    },
  },
});
