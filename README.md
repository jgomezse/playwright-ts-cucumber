# Playwright + TypeScript + Cucumber (BDD)

Proyecto de testing automatizado con **Playwright**, **TypeScript** y **Cucumber (BDD)**, con reportes HTML, Allure y Cucumber, y CI integrado via GitHub Actions.

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
├── Dockerfile                          # Imagen Docker para ejecutar tests
├── docker-compose.yml                  # Orquestación del contenedor
├── .dockerignore
├── src/
│   └── tests/
│       ├── features/                   # Archivos .feature (Gherkin)
│       ├── steps/                      # Step definitions
│       │   └── the-internet/
│       └── pages/                      # Page Object Models
│           └── the-internet/
├── playwright.config.ts                # Configuración de Playwright
├── package.json
└── pnpm-lock.yaml
```

## Requisitos

- Node.js LTS
- pnpm `^11.7.0`
- Docker (opcional, solo para ejecución en contenedor)

## Ejecución

### Con pnpm

```bash
pnpm run setup:test
```

O en Docker (sin instalar dependencias localmente):

```bash
pnpm run docker
```

### Con Docker

```bash
docker compose up --build
docker compose down --rmi all
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
