# Playwright Pokémon Team Builder Workshop

Este proyecto es un **workshop** que automatiza la creación de equipos de Pokémon en **Pokémon Showdown** utilizando **Playwright** con **TypeScript**. El objetivo es mostrar cómo usar Playwright para interactuar con una aplicación web, aplicando técnicas como el manejo de locators, interacciones con formularios, y cómo realizar pruebas de validación de equipos de Pokémon basadas en datos.

## Tecnologías Utilizadas
- **Playwright**
- **TypeScript**
- **Node.js**
- **Mocha** (framework de pruebas)
- **Chai** (aserciones en pruebas)
- **JSON** (para el manejo de datos)

## Requisitos
- **Node.js** (versión 16 o superior)
- **npm** o **yarn** como gestor de paquetes

## Instalación

### Paso 1: Clonar el repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/jhonarias91/playwright_pokemon_teambuilder_workshop.git

## Paso 2: Instalar las dependencias
Navega al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias:

```bash npm install 
```

## Paso 3: Instalar navegadores de Playwright
Playwright requiere que descargues los navegadores para la automatización. Ejecuta el siguiente comando para instalarlos:

```bash npx playwright install 
```
Esto descargará y configurará los navegadores Chromium, Firefox, y WebKit.

## Estructura del Proyecto
El proyecto sigue una estructura organizada en módulos para manejar las diferentes páginas y componentes de la aplicación web Pokémon Showdown:

pages/: Aquí encontrarás las clases que representan las diferentes páginas con las que interactúan las pruebas:

MainPage.ts: Página principal de Pokémon Showdown.
TeamBuilderPage.ts: Página de creación de equipos.
MovePage.ts: Página donde se asignan los movimientos, habilidades y objetos.
StatPage.ts: Página donde se asignan las estadísticas EV.
PokemonSearchPage.ts: Página para buscar Pokémon por nombre.
tests/: Contiene los archivos de prueba que interactúan con las páginas y validan el comportamiento esperado.

data/: Archivos JSON que contienen datos de entrada como configuraciones de equipo de Pokémon, movimientos, habilidades, y estadísticas.

Explicación:
La prueba sigue un flujo de creación de equipo de Pokémon utilizando los datos cargados desde el archivo teamData.json.
Usa Playwright para interactuar con la interfaz web y Chai para validar los resultados esperados.
Data-Driven Testing con JSON
El proyecto utiliza archivos JSON para manejar datos dinámicos que alimentan las pruebas. Esto permite que diferentes combinaciones de equipos, formatos y generaciones sean probadas sin modificar el código de prueba.

Ventaja: Permite añadir más configuraciones de equipos y pruebas con solo actualizar el archivo JSON, lo que hace el proceso más escalable.


# Flujo de Prueba:

1. Navega a la página de Pokémon Showdown.
2. Crea un nuevo equipo.
3. Selecciona la generación y el formato (por ejemplo, [Gen 7] Ubers).
4. Agrega Pokémon al equipo, junto con sus movimientos, habilidades y estadísticas.
5. Valida que el equipo cumple con las reglas del formato.
6. Data-Driven con JSON
7. El archivo pokemon_data_driven.json se utiliza para definir los equipos de Pokémon, con los nombres, objetos, habilidades, movimientos y estadísticas (EVs).
8. Este archivo se carga al inicio de la prueba (@BeforeAll), lo que permite ejecutar las pruebas para diferentes configuraciones de equipos sin necesidad de modificar el código de prueba.

# Notas Finales
Autor: Jhon Arias

```javascript
Este `README.md` cubre los aspectos principales del proyecto: cómo configurarlo, cómo funciona el data-driven testing con JSON, 
y el uso de Page Object Model para gestionar las interacciones con las páginas web. 
```

Una implementación de esta prueba usando Java 17 la puede encontrar en:
[Playwright Java](https://github.com/jhonarias91/playwright_pokemon_teambuilder_java)
