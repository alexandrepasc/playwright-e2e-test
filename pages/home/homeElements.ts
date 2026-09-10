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

	productTestCard = () => this.page.locator('div[class*="pathCard_"]:nth-child(1)');
	productTestTitleLabel = () => this.page.locator('div[class*="pathCard_"]:nth-child(1) > h3');
	productTestInfoLabel = () => this.page.locator('div[class*="pathCard_"]:nth-child(1) > p');
	productTestCodeLabel = () => this.page.locator('div[class*="pathCard_"]:nth-child(1) > code');
	productCliCard = () => this.page.locator('div[class*="pathCard_"]:nth-child(2)');
	productCliTitleLabel = () => this.page.locator('div[class*="pathCard_"]:nth-child(2) > h3');
	productCliInfoLabel = () => this.page.locator('div[class*="pathCard_"]:nth-child(2) > p');
	productCliCodeLabel = () => this.page.locator('div[class*="pathCard_"]:nth-child(2) > code');
	productMcpCard = () => this.page.locator('div[class*="pathCard_"]:nth-child(3)');
	productMcpTitleLabel = () => this.page.locator('div[class*="pathCard_"]:nth-child(3) > h3');
	productMcpInfoLabel = () => this.page.locator('div[class*="pathCard_"]:nth-child(3) > p');
	productMcpCodeLabel = () => this.page.locator('div[class*="pathCard_"]:nth-child(3) > code');

	builtTestSection = () => this.page.locator('section[class*="featureSection_"]:nth-child(2)');
	builtTestTitleLabel = () => this.page.locator('section[class*="featureSection_"]:nth-child(2) h2');
	builtTestSubTitleList = () => this.page.locator('section[class*="featureSection_"]:nth-child(2) div.row div.col h4');

	builtAiSection = () => this.page.locator('section[class*="featureSection_"]:nth-child(3)');
	builtAiTitleLabel = () => this.page.locator('section[class*="featureSection_"]:nth-child(3) h2');
	// = () => this.page.locator('');
}
