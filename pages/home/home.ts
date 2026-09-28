import Elements from './homeElements';
import { Page } from '@playwright/test';

export default class Home extends Elements {
	readonly page: Page;
	readonly url: string = '/';
	readonly gitUrl: string = 'https://github.com/microsoft/playwright';

	readonly txts = {
		BuiltTestTitle:     'Built for testing',
		BuiltTestSubTitle1: 'Auto-wait and web-first assertions',
		BuiltTestSubTitle2: 'Test isolation',
		BuiltTestSubTitle3: 'Resilient locators',
		BuiltTestSubTitle4: 'Parallelism and sharding',
		BuiltAiTitle:       'Built for AI agents',
		BuiltAiSubTitle1:   'Accessibility snapshots, not screenshots',
		BuiltAiSubTitle2:   'MCP server',
		BuiltAiSubTitle3:   'CLI for coding agents',
		BuiltAiSubTitle4:   'Session monitoring',
		ToolingTitle:       'Powerful tooling',
		ToolingSubTitle1:   'Test generator',
		ToolingSubTitle2:   'Trace Viewer',
		ToolingSubTitle3:   'VS Code extension',
		LogosTitle:         'Chosen by companies and open source projects'
	} as const;

	constructor(page: Page) {
		super(page);

		this.page = page;
	}
}
