import home from "../flip_pretest/pageObjects/homepage";
// import config from "../config";

describe("Flip Automation Test", function () {
  const hPage = new home();

  beforeEach(() => {
    // hPage.view();
    hPage.visit();

  });

  it("Header Menu Test", function () {

    //Check Label
    cy.get('div[class="navbar-header pull-right"]').should(($getText) => {
      expect($getText).to.contain("Bantuan");
      expect($getText).to.contain("Karir");
      expect($getText).to.contain("Biaya");
      expect($getText).to.contain("Masuk");
    });


    //Click Menu Bantuan
    hPage.headerBantuan()
    cy.getCookies();
    cy.setCookie('_gat', 'value: 1');
    console.log('Go To Bantuan Page');

    cy.go(-1)
    //Click Karir
    hPage.headerKarir();
    console.log('Go To Karir Page');

    cy.go(-1)
    //Click Biaya
    hPage.headerBiaya();
    console.log('Go To Biaya Page');

    cy.go(-1)
    //click tombol masuk
    hPage.headerMasukBtn();
    console.log('Go To Login Page');

    



  });
});
