describe('Pizza Sipariş Testi', () => {
    beforeEach(() => {
        //başlangıç adresi
        cy.visit('http://localhost:5173'); 
    });

    it('Başarılı bir şekilde pizza siparişi oluşturulmalı', () => {
        // Sipariş sayfasına git
        cy.contains('ACIKTIM') 
            .click();

        // Boyut seçimi 
        cy.get('input[name="size"][value="Büyük"]').check();


        // Hamur seçimi 
        cy.get('select[name="dough"]').select('İnce');


        
        cy.get('form')
            .find('input[type="checkbox"]')
            .should('have.length.gte', 10); 

        
        cy.get('form')
            .find('input[type="checkbox"]')
            .check([
                'Pepperoni',
                'Domates',
                'Biber',
                'Sucuk',
                'Mısır',
                'Jalepeno',
                'Soğan',
                'Ananas',
                'Kanada Jambonu',
                'Tavuk Izgara',
            ]);

       
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


