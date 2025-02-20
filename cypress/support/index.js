beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Cannot redefine property: cookie')) {
        return false;  // Ignora el error
      }
      return true;  // Permite que otros errores no sean ignorados
    });

});
  