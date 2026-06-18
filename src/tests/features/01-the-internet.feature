@TheInternet
Feature: Pruebas sobre el sitio The Internet

    Portal de pruebas con ejemplos de funcionalidades web.
    Utilizado como portafolio de automatización QA.

    Background: Navegar al sitio The Internet
        Given se ingresa al sitio The Internet

    @smoke
    Scenario: Ejemplo A B Testing
        When se hace clic en A B Testing
        Then se visualiza el título A B Test
