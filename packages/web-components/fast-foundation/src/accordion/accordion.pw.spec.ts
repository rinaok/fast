import { expect, test } from "@playwright/test";
import type { FASTAccordion } from "./accordion.js";
import { AccordionExpandMode } from "./accordion.options.js";

test.describe("Accordion", () => {
    const fixtureUrl = `http://localhost:6006/iframe.html?args=&id=accordion--accordion&viewMode=story`;
    test.beforeEach(async ({ page }) => {
        await page.goto(fixtureUrl);
    });

    test("should load the fixture correctly", async ({ page }) => {
        await expect(page).toHaveURL(fixtureUrl);
    });

    test("should set an expand mode of `multi` when passed to the `expand-mode` attribute", async ({
        page,
    }) => {
        const element = page.locator("fast-accordion");

        await element.evaluate((node: FASTAccordion, expandmode) => {
            node.expandmode = expandmode;
        }, AccordionExpandMode.multi);

        await expect(element).toHaveAttribute("expand-mode", AccordionExpandMode.multi);
    });

    test("should set an expand mode of `single` when passed to the `expand-mode` attribute", async ({
        page,
    }) => {
        const element = page.locator("fast-accordion");

        await element.evaluate((node: FASTAccordion, expandmode) => {
            node.expandmode = expandmode;
        }, AccordionExpandMode.single);

        await expect(element).toHaveAttribute("expand-mode", AccordionExpandMode.single);
    });

    test("should set a default expand mode of `multi` when `expand-mode` attribute is not passed", async ({
        page,
    }) => {
        const element = page.locator("fast-accordion");

        await expect(element).toHaveJSProperty("expandmode", AccordionExpandMode.multi);

        await expect(element).toHaveAttribute("expand-mode", AccordionExpandMode.multi);
    });
});
