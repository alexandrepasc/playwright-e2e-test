import Elements from './introElements';
import { Page } from '@playwright/test';

export default class Intro extends Elements {
	readonly page: Page;
	readonly url: string = '/docs/intro';

	constructor(page: Page) {
		super(page);

		this.page = page;
	}
}
