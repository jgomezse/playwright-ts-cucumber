@TheInternet
Feature: Pruebas sobre el sitio The Internet

    Portal de pruebas con ejemplos de funcionalidades web.
    Utilizado como portafolio de automatización QA.

    Background: Navegar al sitio The Internet
        Given se ingresa al sitio The Internet

    @smoke
    Scenario: Ejemplo A & B Testing
        When se hace clic en A & B Testing
        Then se visualiza el título A & B Test

    @smoke
    Scenario: Ejemplo Add & Remove Elements
        When se hace clic en Add & Remove Elements
        Then se visualiza el título Add & Remove Elements
        When se hace clic en Add Element
        Then se visualiza el botón Delete
        When se hace clic en Delete
        Then no se visualiza el botón Delete

    @smoke
    Scenario: Ejemplo Basic Auth
        When se hace clic en Basic Auth
        Then se visualiza el mensaje de autenticación exitosa

    @smoke
    Scenario: Ejemplo Broken Images
        When se hace clic en Broken Images
        Then se visualiza la página de Broken Images
        And al menos una imagen está rota

    @smoke
    Scenario: Ejemplo Challenging DOM
        When se hace clic en Challenging DOM
        Then se visualiza la página de Challenging DOM
        And se visualizan los 3 botones
        And la tabla tiene 10 filas
        And la tabla tiene 7 columnas

    @smoke
    Scenario: Ejemplo Checkboxes
        When se hace clic en Checkboxes
        Then se visualiza la página de Checkboxes
        Then checkbox 1 está destildado
        And checkbox 2 está tildado
        When se tilde checkbox 1
        Then checkbox 1 está tildado
        When se destilde checkbox 2
        Then checkbox 2 está destildado

    @smoke
    Scenario: Ejemplo Context Menu
        When se hace clic en Context Menu
        Then se visualiza la página de Context Menu
        When se hace clic derecho en el cuadro
        Then se visualiza el mensaje del menú contextual
