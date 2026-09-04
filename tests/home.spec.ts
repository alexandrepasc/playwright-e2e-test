import Home from '../pages/home';
import Intro from '../pages/docs/intro';
import test, { expect, Page } from '@playwright/test';

test.describe('Home Page Test Suite', () => {
	let home: Home;

	test.beforeEach(async ({ page }: { page: Page }) => {
		await page.goto('/');
	});

	test('Render elements', async ({ page }: { page: Page }) => {
		home = new Home(page);

		await expect(home.brandBtn())
			.toBeVisible();
	});

	test('TC-HOME-001: Homepage loads with correct title and hero content', async ({ page }: { page: Page }) => {
		home = new Home(page);

		await expect(page)
			.toHaveTitle(/Playwright/);

		await expect(home.heroContainer())
			.toBeVisible();

		await expect(home.heroLogoLabel())
			.toHaveText('Playwright');

		await expect(home.heroContainer())
			.toContainText('Playwright enables reliable web automation for testing, scripting, and AI agents');
	});

	test('TC-HOME-002: Get started button navigates to Installation page', async ({ page }: {page: Page }) => {
		home = new Home(page);

		const intro: Intro = new Intro(page);

		await home.heroStartBtn()
			.click();

		await expect(page)
			.toHaveURL(/\/docs\/intro/);

		await expect(intro.titleLabel())
			.toHaveText('Installation');
	});

	test('TC-HOME-003: GitHub Star button links to correct repository', async ({ page }: { page: Page }) => {
		home = new Home(page);

		await expect(home.heroGithubBtn())
			.toHaveAttribute('href', home.gitUrl);

		// TODO: test if we can add some number validation to the attributes
		await expect(home.heroGitStarBtn())
			.toHaveAttribute('aria-label', /k+/);
	});
});
