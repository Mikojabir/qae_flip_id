import config from "../config";

class homepage {

    visit() {
        cy.visit(config.baseURL);
    };
    
    view(){
        cy.viewport(1920, 1080);
    };


    /**
     * Header Menu
     */
    headerBantuan(){
        const button = cy.get('a[class="btn-grey-flip"]')
        button.contains('Bantuan')
        button.should('be.visible')
        button.click()
    };

    headerKarir(){
        const button = cy.get('a[class="btn-grey-flip"]')
        button.contains('Karir')
        button.should('be.visible')
        button.click()
    };

    headerBiaya(){
        const button = cy.get('a[class=" btn-grey-flip"]')
        button.contains('Biaya')
        button.should('be.visible')
        button.click()
    };

    headerMasukBtn(){
        const button = cy.get('a[class="border-round btn-grey-flip btn-register-daftar"]')
        button.should('be.visible')
        button.click()
    };
};

export default homepage;