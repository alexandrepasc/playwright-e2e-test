import { Page } from '@playwright/test';

export default class Elements {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	brandBtn = () => this.page.locator('a.navbar__brand');
	heroContainer = () => this.page.locator('h1.hero__title');
	heroLogoLabel = () => this.page.locator('h1.hero__title > span');
	heroStartBtn = () => this.page.locator('a.getStarted_Sjon');
	heroGithubBtn = () => this.page.locator('a.gh-btn');
	heroGitStarBtn = () => this.page.locator('a.gh-count');
}
