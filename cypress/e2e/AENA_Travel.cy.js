describe('AENA Travel Web - Login Test', () => {
    const email = 'daniell.tec@entelgy.com';
    const password = 'Arbust0@EN@1';

    it('Debe permitir escribir en los campos de correo electrónico y contraseña', () => {

        // Ignorar excepciones relacionadas con el error 'Cannot redefine property: cookie'
        cy.on('uncaught:exception', (e) => {
            if (e.message.includes('Cannot redefine property: cookie')) {
                return false; // Ignorar este error y continuar con la prueba
            }
        });

        // Ignorar el error relacionado con 'screen'
        cy.ignoreScreenError();

        // 1. Limpiar cookies previas para evitar conflictos
        cy.clearCookies();

        // 2. Configurar interceptación de la respuesta HTTP para verificar un código de estado 200
        cy.intercept('GET', 'https://clubcliente.aena.es/AenaClub/es/sessionFinished').as('sessionPageRequest');

        // 3. Visitar la página principal
        cy.visit('https://clubcliente.aena.es/AenaClub/es/sessionFinished');

        // 4. Esperar y verificar la respuesta HTTP 200
        cy.wait('@sessionPageRequest').its('response.statusCode').should('eq', 200).then((response) => {
            cy.log('Response status:', response.statusCode);
            console.log('Respuesta 200 recibida correctamente en la URL https://clubcliente.aena.es/AenaClub/es/sessionFinished');
        });

        // 5. Aceptar las cookies si aparece el banner
        cy.get('body').then(($body) => {
            if ($body.find('button:contains("Aceptar todas")').length) {
                cy.get('button:contains("Aceptar todas")').click(); // Aceptar todas las cookies
                cy.log('Cookies aceptadas');
            }
        });

        // 6. Verificar y hacer clic en el enlace "Iniciar sesión"
        cy.contains('a', 'Iniciar sesión') // Busca el enlace <a> que contiene "Iniciar sesión"
            .should('be.visible') // Verifica que el enlace es visible
            .then(() => {
                console.log('Se comprueba y se accede al login');

                // Usamos cy.visit directamente en el dominio de destino
                cy.visit("https://usuarios.aena.es/?gig_ssoToken=eu1_tk1.yWnV0zbXBAHMuvWep3Njl6MddZPTENw9oPGxLREA_Yw&gig_originSite=clubCliente");

                // Verificar que la URL es la correcta después de la redirección
                cy.url().should('include', 'usuarios.aena.es');
            });

        cy.reload();

        // 7. Escribir en los campos de correo electrónico y contraseña
        cy.get('#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-textbox > input') // Selecciona el input con name="username"
            .type(email); // Escribe el correo electrónico en el campo

        cy.get('#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-password > input') // Selecciona el input con name="password"
            .type(password); // Escribe la contraseña en el campo con un retraso de 100ms entre cada tecla

        cy.get('#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-submit.is-centered.is-aena-green-button > input')
            .click();




    });
});
