const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false, // Desactiva restricciones de seguridad (CORS)
    experimentalSessionAndOrigin: true, // Permite pruebas en múltiples orígenes
    setupNodeEvents(on, config) {
      // Implementar eventos de Node si es necesario
    },
  },
});
