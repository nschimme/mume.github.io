import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 960})

        # Educator Hub
        await page.goto('http://localhost:4173/community/educators/')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='/home/jules/verification/educator_hub_ux.png', full_page=True)

        # CS Lab 1
        await page.goto('http://localhost:4173/community/educators/cs/lab-1-aliases')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='/home/jules/verification/educator_lab1_ux.png', full_page=True)

        await browser.close()

asyncio.run(run())
