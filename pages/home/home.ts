import Elements from './homeElements';
import { Page } from '@playwright/test';

export default class Home extends Elements {
	readonly page: Page;
	readonly url: string = '/';
	readonly gitUrl: string = 'https://github.com/microsoft/playwright';

	constructor(page: Page) {
		super(page);

		this.page = page;
	}
}
