describe('HomePage Buton Kontrolleri', () => {
    beforeEach(() => {
        // Uygulama adresini değiştirin
        cy.visit('http://localhost:5173');
    });

    it('ACIKTIM butonunu kontrol et', () => {
        // ACIKTIM butonunun görünür ve doğru çalıştığını kontrol et
        cy.get('.order-button')
            .should('be.visible')
            .and('contain.text', 'ACIKTIM')
            .click();

        // "order" sayfasına yönlendirme olduğunu kontrol et
        cy.url().should('include', '/OrderForm');
    });

    it('Menü butonlarını kontrol et', () => {
        // Menü bileşenindeki butonların varlığını kontrol et
        cy.get('button.menu-item') // Eğer menü butonları bu sınıfa sahipse kontrol et
            .should('have.length.at.least', 1); // En az bir menü elemanı olduğunu doğrula
    });


    it('Pizza kartlarındaki butonları kontrol et', () => {
        // Pizza kartlarındaki butonları kontrol et
        cy.get('.card')
            .should('exist') // Pizza kartlarının var olduğunu doğrula
            .and('have.length.at.least', 1) // En az bir pizza kartı olduğunu doğrula
            .each((card) => {
                // Kart içerisindeki butonları seç ve kontrol et
                cy.wrap(card).find('button')
                    .should('exist') // Kart içindeki butonların var olduğunu doğrula
                    .and('be.enabled') // Butonların etkin olduğunu doğrula
                    .click(); // Karttaki butona tıkla
            });
    });
});
