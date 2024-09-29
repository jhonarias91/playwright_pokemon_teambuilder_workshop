# playwright_pokemon_teambuilder_workshop

# Set up

### Init project
 - npm init playwright@latest
    TypeScript
    end-to-end test? tests
    github actions: false
    install browsers: true

- start recording
npx playwright codegen https://play.pokemonshowdown.com

- run test 
npx playwright test addFirstPokemon --headed

- enabled trace
npx playwright test --trace on