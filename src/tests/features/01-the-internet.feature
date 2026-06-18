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

    @smoke
    Scenario: Ejemplo Digest Authentication
        When se hace clic en Digest Authentication
        Then se visualiza el mensaje de autenticación digest exitosa

    @smoke
    Scenario: Ejemplo Disappearing Elements
        When se hace clic en Disappearing Elements
        Then se visualiza la página de Disappearing Elements

    @smoke
    Scenario: Ejemplo Drag and Drop
        When se hace clic en Drag and Drop
        Then se visualiza la página de Drag and Drop
        When se arrastra la columna A sobre la columna B
        Then la columna A está a la derecha de la columna B

    @smoke
    Scenario: Ejemplo Dropdown
        When se hace clic en Dropdown
        Then se visualiza la página de Dropdown
        When se selecciona Option 1 en el dropdown
        Then Option 1 está seleccionado en el dropdown

    @smoke
    Scenario: Ejemplo Dynamic Content
        When se hace clic en Dynamic Content
        Then se visualiza la página de Dynamic Content
        And se visualizan 3 filas de contenido

    @smoke
    Scenario: Ejemplo Dynamic Controls
        When se hace clic en Dynamic Controls
        Then se visualiza la página de Dynamic Controls
        When se hace clic en Remove
        Then el checkbox desaparece
        When se hace clic en Add
        Then el checkbox aparece
        When se hace clic en Enable
        Then el input está habilitado

    @smoke
    Scenario: Ejemplo Dynamic Loading
        When se hace clic en Dynamic Loading
        Then se visualiza la página de Dynamic Loading
        When se hace clic en Example 1
        When se hace clic en Start
        Then se visualiza el elemento Hello World

    @smoke
    Scenario: Ejemplo Entry Ad
        When se hace clic en Entry Ad
        Then se visualiza el modal de Entry Ad
        When se cierra el modal
        Then el modal no está visible

    @smoke
    Scenario: Ejemplo Exit Intent
        When se hace clic en Exit Intent
        Then se visualiza la página de Exit Intent
        When se mueve el mouse fuera del viewport
        Then se visualiza el modal de Exit Intent

    @smoke
    Scenario: Ejemplo File Download
        When se hace clic en File Download
        Then se visualiza la página de File Download
        When se descarga el archivo "some-file.txt"
