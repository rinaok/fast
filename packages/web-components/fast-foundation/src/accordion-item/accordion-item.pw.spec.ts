import { expect, test } from "@playwright/test";
import type { FASTAccordionItem } from "./accordion-item.js";

test.describe("Accordion item", () => {
    const fixtureUrl = `http://localhost:6006/iframe.html?args=&id=accordion-accordion-item--accordion-item&viewMode=story`;
    test.beforeEach(async ({ page }) => {
        await page.goto(fixtureUrl);
    });

    test("should load the fixture correctly", async ({ page }) => {
        await expect(page).toHaveURL(fixtureUrl);
    });

    test("should set an `aria-level` to the heading when provided", async ({ page }) => {
        const element = page.locator("fast-accordion-item");

        await element.evaluate((node: FASTAccordionItem) => {
            node.headinglevel = 4;
        });

        await expect(element).toHaveJSProperty("headinglevel", 4);

        await expect(element.locator(`[role="heading"]`)).toHaveAttribute(
            "aria-level",
            "4"
        );
    });

    test("should set a default heading level of 2 when NOT provided a `headinglevel`", async ({
        page,
    }) => {
        const element = page.locator("fast-accordion-item");

        await expect(element).toHaveJSProperty("headinglevel", 2);

        await expect(element.locator(`[role="heading"]`)).toHaveAttribute(
            "aria-level",
            "2"
        );
    });

    test("should add a class of `expanded` when expanded is true", async ({ page }) => {
        const element = page.locator("fast-accordion-item");

        await element.evaluate((node: FASTAccordionItem) => {
            node.expanded = true;
        });

        await expect(element).toHaveClass("expanded");
    });

    test("should NOT add a class of `expanded` when expanded is false", async ({
        page,
    }) => {
        const element = page.locator("fast-accordion-item");

        await element.evaluate((node: FASTAccordionItem) => {
            node.expanded = false;
        });

        await expect(element).not.toHaveClass("expanded");
    });

    test("should set `aria-expanded` value to false on the button when expanded is false", async ({
        page,
    }) => {
        const element = page.locator("fast-accordion-item");

        await element.evaluate((node: FASTAccordionItem) => {
            node.expanded = false;
        });

        await expect(element.locator("button")).toHaveAttribute("aria-expanded", "false");
    });

    test("should set `aria-expanded` value to true on the button when expanded is true", async ({
        page,
    }) => {
        const element = page.locator("fast-accordion-item");

        await element.evaluate((node: FASTAccordionItem) => {
            node.expanded = true;
        });

        await expect(element.locator("button")).toHaveAttribute("aria-expanded", "true");
    });

    test("should set `aria-expanded` value to false on the button when expanded is undefined", async ({
        page,
    }) => {
        const element = page.locator("fast-accordion-item");

        await expect(element.locator("button")).toHaveAttribute("aria-expanded", "false");
    });

    test("should set internal properties to match the id when provided", async ({
        page,
    }) => {
        const element = page.locator("fast-accordion-item");

        const id = "testId";

        await element.evaluate((node, id) => {
            node.id = id;
        }, id);

        await expect(element.locator(`[role="region"]`)).toHaveAttribute(
            "aria-labelledby",
            id
        );

        await expect(element.locator("button")).toHaveId(id);
    });
});
