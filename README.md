# Playwright + TypeScript + Cucumber (BDD)

Proyecto de portafolio de automatización QA con **Playwright**, **TypeScript** y **Cucumber (BDD)**, reportes HTML, Allure y Cucumber, y CI con GitHub Actions.

## Stack

- **Playwright** — Test runner y automatización de navegadores
- **TypeScript** — Tipado estático
- **Cucumber (BDD)** — Pruebas en lenguaje Gherkin
- **Page Object Model** — Patrón de diseño para mantenibilidad
- **Allure** — Reportes visuales de resultados
- **pnpm** — Gestor de paquetes
- **Docker** — Ejecución containerizada de tests
- **GitHub Actions** — CI/CD

## Páginas bajo prueba

- [the-internet.herokuapp.com](https://the-internet.herokuapp.com/)

## Estructura del proyecto

```
├── .github/workflows/playwright.yml   # CI pipeline
├── Dockerfile                          # Imagen Docker
├── docker-compose.yml                  # Orquestación del contenedor
├── src/
│   └── tests/
│       ├── features/                   # Archivos .feature
│       ├── steps/                      # Step definitions
│       │   └── the-internet/
│       └── pages/                      # Page Objects
│           └── the-internet/
├── playwright.config.ts
├── package.json
└── pnpm-lock.yaml
```

## Requisitos

- Node.js LTS
- pnpm `^11.7.0`
- Docker (opcional)

## Ejecución

### Local

```bash
pnpm run test
```

Ejecutar un escenario específico:

```bash
pnpm exec bddgen && pnpm exec playwright test --grep "Checkboxes"
```

### Con Docker

```bash
pnpm run docker
```

## Reportes

| Reporte | Cómo verlo |
|---|---|
| Playwright HTML | `pnpm run show-html` |
| Allure | `allure serve allure-results` |
| Cucumber JSON | `cucumber-report/cucumber.json` |

## CI

El workflow se ejecuta en push a `main` o manualmente (`workflow_dispatch`). Sube 3 artefactos: Playwright HTML, Allure y Cucumber JSON.
