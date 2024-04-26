import { test as base } from '@playwright/test'
import { getJSFiles } from "../utils"
import esbuild from 'esbuild'

export type Fixtures = {
    modules: Record<string, FileModule>
}

export type FileModule = {
    path: string
    code: string
    loadToPage(): Promise<void>
}

export const test = base.extend<Fixtures>({

    modules: [
        async ({ page }, use) => {
            console.log('bundling modules...')
            const results = await esbuild.build({
                bundle: true,
                outdir: 'out/modules',
                entryPoints: getJSFiles('tests/modules'),
                write: false,
            })
            const modules = Object.fromEntries(
                results.outputFiles.map(file => [
                    file.path.split(/[\\/]/).pop()!.split('.')[0],
                    ({
                        path: file.path,
                        code: file.text,
                        loadToPage: async () => {
                            await page.addScriptTag({ content: file.text, type: 'module' })
                        }
                    })
                ])
            )
            console.log(`loaded ${Object.keys(modules).length} modules`)
            await use(modules)
        },
        { timeout: 0 }
    ],

    page: async ({ page }, use) => {
        await page.goto('https://www.bilibili.com/')
        await use(page)
        await page.close()
    },

})

export const expect = test.expect


test.beforeEach(async ({ context }) => {
    context.on('console', console.log)
})

test.afterEach(async ({ page, context }) => {
    await page.close()
    await context.close()
})