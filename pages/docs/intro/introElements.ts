import { Page } from '@playwright/test';

export default class Elements {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	titleLabel = () => this.page.locator('header > h1');
}
