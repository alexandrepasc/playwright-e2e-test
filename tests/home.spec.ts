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

	test('TC-HOME-004: Product cards display correct products and install commands', async ({ page }: { page: Page }) => {
		home = new Home(page);

		await expect(home.productTestCard())
			.toBeVisible();

		await expect(home.productTestTitleLabel())
			.toHaveText('Playwright Test');

		await expect(home.productTestInfoLabel())
			.toContainText('Full-featured test runner');

		await expect(home.productTestCodeLabel())
			.toContainText('npm init playwright@latest');

		// playwright cli
		await expect(home.productCliCard())
			.toBeVisible();

		await expect(home.productCliTitleLabel())
			.toHaveText('Playwright CLI');

		await expect(home.productCliInfoLabel())
			.toContainText('Token-efficient browser automation');

		await expect(home.productCliCodeLabel())
			.toContainText('npm i -g @playwright/cli@latest');

		//  playwright mcp
		await expect(home.productMcpCard())
			.toBeVisible();

		await expect(home.productMcpTitleLabel())
			.toHaveText('Playwright MCP');

		await expect(home.productMcpInfoLabel())
			.toContainText('Model Context Protocol server');

		await expect(home.productMcpCodeLabel())
			.toContainText('npx @playwright/mcp@latest');
	});

	test('TC-HOME-005: Feature sections are present and correct', async ({ page }: { page: Page }) => {
		home = new Home(page);

		// testing
		await expect(home.builtTestSection())
			.toBeVisible();

		await expect(home.builtTestTitleLabel())
			.toHaveText(home.txts.BuiltTestTitle);

		await expect(home.builtTestSubTitleList()
			.nth(0))
			.toHaveText(home.txts.BuiltTestSubTitle1);

		await expect(home.builtTestSubTitleList()
			.nth(1))
			.toHaveText(home.txts.BuiltTestSubTitle2);

		await expect(home.builtTestSubTitleList()
			.nth(2))
			.toHaveText(home.txts.BuiltTestSubTitle3);

		await expect(home.builtTestSubTitleList()
			.nth(3))
			.toHaveText(home.txts.BuiltTestSubTitle4);

		// ai
		await expect(home.builtAiSection())
			.toBeVisible();

		await expect(home.builtAiTitleLabel())
			.toHaveText(home.txts.BuiltAiTitle);

		await expect(home.builtAiSubTitleList()
			.nth(0))
			.toHaveText(home.txts.BuiltAiSubTitle1);

		await expect(home.builtAiSubTitleList()
			.nth(1))
			.toHaveText(home.txts.BuiltAiSubTitle2);

		await expect(home.builtAiSubTitleList()
			.nth(2))
			.toHaveText(home.txts.BuiltAiSubTitle3);

		await expect(home.builtAiSubTitleList()
			.nth(3))
			.toHaveText(home.txts.BuiltAiSubTitle4);

		// tooling
		await expect(home.toolingSection())
			.toBeVisible();

		await expect(home.toolingTitleLabel())
			.toHaveText(home.txts.ToolingTitle);

		await expect(home.toolingSubTitleList()
			.nth(0))
			.toHaveText(home.txts.ToolingSubTitle1);

		await expect(home.toolingSubTitleList()
			.nth(1))
			.toHaveText(home.txts.ToolingSubTitle2);

		await expect(home.toolingSubTitleList()
			.nth(2))
			.toHaveText(home.txts.ToolingSubTitle3);
	});

	// test('', async ({ page }: { page: Page }), => {});
});
