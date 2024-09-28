import { test, expect } from '@playwright/test';

test('addFirstPokemon', async ({ page }) => {
  await page.goto('https://play.pokemonshowdown.com/');
  await page.getByRole('button', { name: 'Teambuilder' }).click();
  await page.locator('.selectFolder > .fa').first().click();
  await page.getByPlaceholder('Search formats').fill('Ubers');
  await page.getByPlaceholder('Search formats').press('Enter');
  await page.getByRole('button', { name: 'Ubers ', exact: true }).click();
  await page.getByRole('button', { name: ' New Box' }).click();
  await page.getByRole('button', { name: ' Add Pokémon' }).click();
  await page.getByRole('textbox').fill('ARCEUS');
  await page.getByRole('textbox').press('Enter');
  await page.locator('input[name="item"]').fill('aguav Berry');
  await page.locator('input[name="item"]').press('Home');
  await page.locator('input[name="item"]').press('ArrowRight');
  await page.locator('input[name="item"]').fill('Aguav Berry');
  await page.locator('input[name="item"]').press('End');
  await page.locator('input[name="move1"]').click();
  await page.locator('input[name="move1"]').fill('agility');
  await page.locator('input[name="move1"]').press('Home');
  await page.locator('input[name="move1"]').press('ArrowRight');
  await page.locator('input[name="move1"]').fill('Agility');
  await page.locator('input[name="move2"]').click();
  await page.locator('input[name="move2"]').fill('Body Slam');
  await page.locator('input[name="move2"]').press('Tab');
  await page.locator('input[name="move3"]').fill('Bulk Up');
  await page.locator('input[name="move3"]').press('Tab');
  await page.locator('input[name="move4"]').fill('Dragon Tail');
  await page.locator('input[name="move4"]').press('Tab');
  await page.locator('input[name="stat-hp"]').fill('210');
  await page.locator('input[name="stat-hp"]').press('Tab');
  await page.locator('input[name="stat-atk"]').fill('200');
  await page.locator('input[name="stat-atk"]').press('Tab');
  await page.locator('input[name="stat-def"]').fill('30');
  await page.locator('input[name="stat-def"]').press('Tab');
  await page.locator('input[name="stat-spa"]').fill('20');
  await page.locator('input[name="stat-spa"]').press('Tab');
  await page.locator('input[name="stat-spd"]').fill('16');
  await page.locator('input[name="stat-spd"]').press('Tab');
  await page.locator('input[name="stat-spd"]').fill('32');
  await page.locator('input[name="stat-spd"]').press('Tab');
  await page.locator('input[name="stat-spe"]').fill('16');
  await page.locator('input[name="stat-spe"]').press('Tab');
  await expect(page.locator('#room-teambuilder')).toContainText('0');
  await page.getByRole('button', { name: ' Team' }).click();
});