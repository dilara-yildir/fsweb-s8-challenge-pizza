describe('Pizza Sipariş Testi', () => {
    beforeEach(() => {
        // Uygulamanın başlangıç adresine gidin
        cy.visit('http://localhost:5173'); // Projenin çalıştığı yerel adresi kontrol edin
    });

    it('Başarılı bir şekilde pizza siparişi oluşturulmalı', () => {
        // Sipariş sayfasına git
        cy.contains('ACIKTIM') // Sipariş sayfasına yönlendiren bağlantıyı seç
            .click();

        // Boyut seçimi yap
        cy.get('input[name="size"][value="Büyük"]').check();


        // Hamur seçimi yap
        cy.get('select[name="dough"]').select('İnce');


        // Checkbox'ların mevcut olduğunu kontrol edin
        cy.get('form')
            .find('input[type="checkbox"]')
            .should('have.length.gte', 10); // En az 10 checkbox var mı kontrol edin

        // 10 malzeme seç
        cy.get('form')
            .find('input[type="checkbox"]')
            .check([
                'Pepperoni',
                'Domates',
                'Biber',
                'Sucuk',
                'Mısır',
                'Jalepeno',
                'soğan',
                'Ananas',
                'Kanada Jambonu',
                'Tavuk Izgara',
            ]);

        // Seçilen checkbox sayısını doğrula
        cy.get('form')
            .find('input[type="checkbox"]:checked')


        // Daha fazla seçim yapılamadığını kontrol et
        cy.get('form')
            .find('input[type="checkbox"]:not(:checked)')
            .first()
            
        cy.get('input[name="name"]')
            .type('Dilara Yıldır');

        cy.get('textarea[name="specialInstructions"]')
            .type('Az acı olsun lütfen!');


        // Siparişi tamamla
        cy.get('button[type="submit"]').click();
        cy.contains('Sipariş Ver').should('be.visible');
    });
});



