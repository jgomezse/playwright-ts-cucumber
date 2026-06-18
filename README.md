# Playwright + TypeScript + Cucumber (BDD)

Proyecto de testing automatizado con **Playwright**, **TypeScript** y **Cucumber (BDD)**, con reportes HTML, Allure y Cucumber, y CI integrado via GitHub Actions.

## Stack

- **Playwright** — Test runner y automatización de navegadores
- **TypeScript** — Tipado estático
- **Cucumber (BDD)** — Pruebas en lenguaje Gherkin
- **Page Object Model** — Patrón de diseño para mantenibilidad
- **Allure** — Reportes visuales de resultados
- **pnpm** — Gestor de paquetes
- **GitHub Actions** — CI/CD

## Estructura del proyecto

```
├── .github/workflows/playwright.yml   # CI pipeline
├── src/
│   ├── tests/
│   │   ├── features/                   # Archivos .feature (Gherkin)
│   │   ├── steps/                      # Step definitions
│   │   └── pages/                      # Page Object Models
├── playwright.config.ts                # Configuración de Playwright
├── package.json
└── pnpm-lock.yaml
```

## Requisitos

- Node.js LTS
- pnpm `^11.7.0`

## Instalación y ejecución

```bash
# Instalar dependencias y navegadores
pnpm run setup

# Ejecutar tests
pnpm run test

# Todo en uno
pnpm run setup:test
```

## Reportes

| Reporte | Cómo verlo |
|---|---|
| Playwright HTML | `pnpm run show-html` |
| Allure | `allure serve allure-results` |
| Cucumber JSON | `cucumber-report/cucumber.json` |

## CI

El workflow se ejecuta en:
- Push a `main`
- Manual (`workflow_dispatch`)

Genera y sube como artefactos: Playwright HTML, Allure y Cucumber JSON.
