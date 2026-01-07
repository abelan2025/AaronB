import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Aaron Belanger/);
});

test('get in touch section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
});
