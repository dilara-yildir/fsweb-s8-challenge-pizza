describe('HomePage Buton Kontrolleri', () => {
    beforeEach(() => {
        // Uygulama adresini değiştirin
        cy.visit('http://localhost:5173');
    });

    it('ACIKTIM butonunu kontrol et', () => {
        // ACIKTIM butonunun görünür ve doğru çalıştığını kontrol et
        cy.get('.order-button')
            .should('be.visible')
            .and('contain', 'ACIKTIM')
            .click();

        // "order" sayfasına yönlendirme olduğunu kontrol et
        cy.url().should('include', '/order-form');
    });

    it('Menü butonlarını kontrol et', () => {
        // Menü bileşenindeki butonları kontrol et
        cy.get('button.menu-item') // Eğer menü butonları bu sınıfa sahipse kontrol et
            .should('have.length.at.least', 1) // En az bir menü elemanı olduğunu doğrula
            .each((button) => {
                cy.wrap(button).click(); // Tüm menü butonlarını sırayla tıkla
                cy.wrap(button).should('have.class', 'active'); // Aktif sınıfı eklendi mi kontrol et
            });
    });

    it('Pizza kartlarındaki butonları kontrol et', () => {
        // Pizza kartlarındaki butonları kontrol et
        cy.get('.card button') // Eğer pizza kartlarındaki buton bu şekilde tanımlıysa
            .should('have.length.at.least', 1) // En az bir pizza kartı olduğunu doğrula
            .each((button) => {
                cy.wrap(button).click(); // Tüm pizza kartlarındaki butonları sırayla tıkla
                cy.wrap(button).should('be.enabled'); // Butonların etkin olduğunu doğrula
            });
    });
});
