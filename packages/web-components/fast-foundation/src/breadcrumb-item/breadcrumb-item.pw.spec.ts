import { expect, test } from "@playwright/test";
import { spinalCase } from "@microsoft/fast-web-utilities";
import { AnchorTarget } from "../anchor/anchor.options.js";
import type { FASTBreadcrumbItem } from "./breadcrumb-item.js";

test.describe("Breadcrumb item", () => {
    const fixtureUrl = `http://localhost:6006/iframe.html?id=breadcrumb-breadcrumb-item--breadcrumb-item&viewMode=story`;
    const href = "https://www.fast.design/";

    test.beforeEach(async ({ page }) => {
        await page.goto(fixtureUrl);
    });

    test("should load the fixture correctly", async ({ page }) => {
        await expect(page).toHaveURL(fixtureUrl);
    });

    test("should include a `role` of `listitem`", async ({ page }) => {
        const element = page.locator("fast-breadcrumb-item");
        const listitem = element.locator(`[role="listitem"]`);

        await expect(listitem).toBeVisible();
    });

    test("should add an element with a class of `separator` when `separator` is true", async ({
        page,
    }) => {
        const element = page.locator("fast-breadcrumb-item");
        const separator = element.locator(".separator");

        element.evaluate((node: FASTBreadcrumbItem) => {
            node.separator = true;
        });

        await separator.waitFor({ state: "attached" });

        await expect(separator).toHaveCount(1);
    });

    test("should render `anchor` when `href` is provided", async ({ page }) => {
        const element = page.locator("fast-breadcrumb-item");
        const anchor = element.locator("a");

        element.evaluate((node: FASTBreadcrumbItem, href) => {
            node.href = href;
        }, href);

        await expect(element).toHaveJSProperty("href", href);

        await expect(anchor).toHaveCount(1);
    });

    test("should render `anchor` when `href` is not provided", async ({ page }) => {
        const element = page.locator("fast-breadcrumb-item");
        const anchor = element.locator("a");

        await expect(anchor).toHaveCount(1);
    });

    test.describe("when expressed as an anchor", () => {
        const attributes = {
            ariaAtomic: "true",
            ariaBusy: "false",
            ariaControls: "testId",
            ariaCurrent: "page",
            ariaDescribedby: "testId",
            ariaDetails: "testId",
            ariaDisabled: "true",
            ariaErrormessage: "test",
            ariaExpanded: "true",
            ariaFlowto: "testId",
            ariaHaspopup: "true",
            ariaHidden: "true",
            ariaInvalid: "spelling",
            ariaKeyshortcuts: "F4",
            ariaLabel: "foo",
            ariaLabelledby: "testId",
            ariaLive: "polite",
            ariaOwns: "testId",
            ariaRelevant: "removals",
            ariaRoledescription: "slide",
            download: "foo",
            hreflang: "en-GB",
            ping: "#",
            referrerpolicy: "no-referrer",
            rel: "external",
            target: AnchorTarget._blank,
            type: "text/html",
        };

        Object.entries(attributes).forEach(([key, value]) => {
            const keyAttribute = spinalCase(key);
            test(`should set the \`${keyAttribute}\` attribute on the internal anchor equal to the value provided`, async ({
                page,
            }) => {
                const element = page.locator("fast-breadcrumb-item");
                const anchor = element.locator("a");

                await element.evaluate(
                    (node: FASTBreadcrumbItem, { href, key, value }) => {
                        node.href = href;
                        node[key] = value;
                    },
                    { href, key, value }
                );

                await expect(anchor).toHaveAttribute("href", href);

                await expect(anchor).toHaveAttribute(keyAttribute, value);
            });
        });
    });
});
