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
	builtAiSubTitleList = () => this.page.locator('section[class*="featureSection_"]:nth-child(3) div.row div.col h4');

	toolingSection = () => this.page.locator('section[class*="featureSection_"]:nth-child(4)');
	toolingTitleLabel = () => this.page.locator('section[class*="featureSection_"]:nth-child(4) h2');
	toolingSubTitleList = () => this.page.locator('section[class*="featureSection_"]:nth-child(4) div.row div.col h4');

	logosSection = () => this.page.getByRole('heading', { name: /Chosen by companies/ })
		.locator('xpath=..');
	logosTitleLabel = () => this.page.getByRole('heading', { name: /Chosen by companies/ });
	logosVsCodeLink = () => this.page.getByRole('link', { name: 'VS Code', exact: true });
	logosVsCodeImg = () => this.page.getByRole('link', { name: 'VS Code', exact: true })
		.locator('..');
	logosBingLink = () => this.page.getByRole('link', { name: 'Bing', exact: true });
	logosBingImg = () => this.page.getByRole('link', { name: 'Bing', exact: true })
		.locator('..');
	logosOutlookLink = () => this.page.getByRole('link', { name: 'Outlook', exact: true });
	logosOutlookImg = () => this.page.getByRole('link', { name: 'Outlook', exact: true })
		.locator('..');
	logosDisneyLink = () => this.page.getByRole('link', { name: 'Disney+ Hotstar', exact: true });
	logosDisneyImg = () => this.page.getByRole('link', { name: 'Disney+ Hotstar', exact: true })
		.locator('..');
	logosMaterialUiLink = () => this.page.getByRole('link', { name: 'Material UI', exact: true });
	logosMaterialUiImg = () => this.page.getByRole('link', { name: 'Material UI', exact: true })
		.locator('..');
	logosIngLink = () => this.page.getByRole('link', { name: 'ING', exact: true });
	logosIngImg = () => this.page.getByRole('link', { name: 'ING', exact: true })
		.locator('..');
	logosAdobeLink = () => this.page.getByRole('link', { name: 'Adobe', exact: true });
	logosAdobeImg = () => this.page.getByRole('link', { name: 'Adobe', exact: true })
		.locator('..');
	logosReactNavigationLink = () => this.page.getByRole('link', { name: 'React Navigation', exact: true });
	logosReactNavigationImg = () => this.page.getByRole('link', { name: 'React Navigation', exact: true })
		.locator('..');
	logosAccInsightsLink = () => this.page.getByRole('link', { name: 'Accessibility Insights', exact: true });
	logosAccInsightsImg = () => this.page.getByRole('link', { name: 'Accessibility Insights', exact: true })
		.locator('..');
}
