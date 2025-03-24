class AENA_VIP_Test { 

    elements = { 
      clickLogin:'.header__top__nav__links__item--user.header__top__nav__links__item--session a'
      //loginButton: 'body > main > header > div > div > div.header__top__nav > div > div.header__top__nav__links__item.header__top__nav__links__item--user.header__top__nav__links__item--session > a',
      //usernameInput: '#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-textbox > input', 
      //passwordInput: '#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-password > input', 
      //submitButton: '#gigya-login-form > div.gigya-layout-row.with-divider > div.gigya-layout-cell.responsive.with-site-login > div.gigya-composite-control.gigya-composite-control-submit.is-centered.is-aena-green-button' 
    }; 
  
    navigate() { 
      cy.viewport(1280, 720); 
      cy.visit('https://serviciosvip.aena.es/vip/es'); 
      cy.wait(5000); // Espera para que cargue la página
    } 
  
  
    clickLogin() { 
    cy.get(this.clickLogin).click()
  
    }
  
  } 
  
  module.exports = new AENA_VIP_Test(); 
  