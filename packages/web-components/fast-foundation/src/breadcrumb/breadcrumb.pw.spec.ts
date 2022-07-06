import { expect, test } from "@playwright/test";
import type { FASTBreadcrumbItem } from "../breadcrumb-item/breadcrumb-item.js";

test.describe("Breadcrumb", () => {
    const fixtureUrl = `http://localhost:6006/iframe.html?id=breadcrumb--breadcrumb&viewMode=story`;
    test.beforeEach(async ({ page }) => {
        await page.goto(fixtureUrl);
    });

    test("should load the fixture correctly", async ({ page }) => {
        await expect(page).toHaveURL(fixtureUrl);
    });

    test("should include a `role` of `navigation`", async ({ page }) => {
        const element = page.locator("fast-breadcrumb");

        await expect(element).toHaveAttribute("role", "navigation");
    });

    test("should include a `role` of `list`", async ({ page }) => {
        const element = page.locator("fast-breadcrumb");

        const list = element.locator(".list");

        await expect(list).toHaveAttribute("role", "list");
    });

    test("should not render a separator on last item", async ({ page }) => {
        const element = page.locator("fast-breadcrumb");

        const items = element.locator("fast-breadcrumb-item");

        await expect(items).toHaveCount(3);

        await expect(items.last()).toHaveJSProperty("separator", false);
    });

    test("should set `aria-current` on the internal anchor of the last node when `href` is present", async ({
        page,
    }) => {
        const element = page.locator("fast-breadcrumb");

        const items = element.locator("fast-breadcrumb-item");

        await page.waitForTimeout(0);

        await expect(items.last().locator("a")).toHaveAttribute("aria-current", "page");
    });

    test("should remove aria-current from any prior Breadcrumb Item children with child anchors when a new node is appended", async ({
        page,
    }) => {
        const element = page.locator("fast-breadcrumb");

        const items = element.locator("fast-breadcrumb-item");

        await expect(items.last().locator("a")).toHaveAttribute("aria-current", "page");

        await element.evaluate(node => {
            node.append(document.createElement("fast-breadcrumb-item"));
        });

        await expect(items.nth(2).locator("a")).not.toHaveAttribute(
            "aria-current",
            "page"
        );

        // await expect(items.last().locator("a")).toHaveAttribute("aria-current", "page");
    });
});
