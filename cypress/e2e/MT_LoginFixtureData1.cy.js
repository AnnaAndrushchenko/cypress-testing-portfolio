describe('Authorization check with fixture data', () => {
    let userData;

    before(() => {
        // Загружаем данные из файла фикстуры
        cy.fixture('userData.json').then((data) => {
            userData = data;
        });
    });

    it('Logs in and checks user profile', () => {
        // Посещаем страницу входа
        cy.visit('https://demoqa.com/login');

        // Вводим данные из fixture data
        cy.get('#userName').type(userData.username);
        cy.get('#password').type(userData.password);

        // Получаем текущий URL перед кликом на кнопку входа
        cy.url().then((beforeUrl) => {
            // Кликаем на кнопку входа
            cy.get('#login').click();

            // Проверяем, что произошел переход на другую страницу после входа
            cy.url().should('not.equal', beforeUrl);

            // Проверяем, что мы находимся на странице профиля
            cy.url().should('include', 'https://demoqa.com/profile');

            // Проверяем, что на странице профиля отображается имя пользователя
            cy.get('#userName-value').should('contain.text', userData.expectedUsername);
        });
    });
});
