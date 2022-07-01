import { expect, test } from "@playwright/test";
import type { FASTAnchor } from "./anchor.js";
import { AnchorTarget } from "./anchor.options.js";

test.describe("Anchor", () => {
    const fixtureUrl = `http://localhost:6006/iframe.html?args=&id=anchor--anchor&viewMode=story`;
    test.beforeEach(async ({ page }) => {
        await page.goto(fixtureUrl);
    });

    test("should load the fixture correctly", async ({ page }) => {
        await expect(page).toHaveURL(fixtureUrl);
    });

    test("should set the `download` attribute on the internal anchor equal to the value provided", async ({
        page,
    }) => {
        const element = page.locator("fast-anchor");
        const download = "foo";

        await element.evaluate(
            (node: FASTAnchor, download) => (node.download = download),
            download
        );

        await expect(element.locator("a")).toHaveAttribute("download", download);
    });

    test("should set the `href` attribute on the internal anchor equal to the value provided", async ({
        page,
    }) => {
        const element = page.locator("fast-anchor");
        const href = "https://www.fast.design/";

        await element.evaluate((node: FASTAnchor, href) => {
            node.href = href;
        }, href);

        await expect(element.locator("a")).toHaveAttribute("href", href);
    });

    test("should set the `hreflang` attribute on the internal anchor equal to the value provided", async ({
        page,
    }) => {
        const element = page.locator("fast-anchor");
        const hreflang = "en-GB";

        await element.evaluate((node: FASTAnchor, hreflang) => {
            node.hreflang = hreflang;
        }, hreflang);

        await expect(element.locator("a")).toHaveAttribute("hreflang", hreflang);
    });

    test("should set the `ping` attribute on the internal anchor equal to the value provided", async ({
        page,
    }) => {
        const element = page.locator("fast-anchor");
        const ping = "https://fast.design/trackingthepings";

        await element.evaluate((node: FASTAnchor, ping) => {
            node.ping = ping;
        }, ping);

        await expect(element.locator("a")).toHaveAttribute("ping", ping);
    });

    test("should set the `referrerpolicy` attribute on the internal anchor equal to the value provided", async ({
        page,
    }) => {
        const element = page.locator("fast-anchor");
        const referrerpolicy = "no-referrer";

        await element.evaluate((node: FASTAnchor, referrerpolicy) => {
            node.referrerpolicy = referrerpolicy;
        }, referrerpolicy);

        await expect(element.locator("a")).toHaveAttribute(
            "referrerpolicy",
            referrerpolicy
        );
    });

    test("should set the `rel` attribute on the internal anchor equal to the value provided", async ({
        page,
    }) => {
        const element = page.locator("fast-anchor");
        const rel = "external";

        await element.evaluate((node: FASTAnchor, rel) => {
            node.rel = rel;
        }, rel);

        await expect(element.locator("a")).toHaveAttribute("rel", rel);
    });

    test("should set the `target` attribute on the internal anchor equal to the value provided", async ({
        page,
    }) => {
        const element = page.locator("fast-anchor");
        const target = AnchorTarget._self;

        await element.evaluate((node: FASTAnchor, target) => {
            node.target = target;
        }, target);

        await expect(element.locator("a")).toHaveAttribute("target", target);
    });

    test("should set the `type` attribute on the internal anchor equal to the value provided", async ({
        page,
    }) => {
        const element = page.locator("fast-anchor");
        const type = "text/html";

        await element.evaluate((node: FASTAnchor, type) => {
            node.type = type;
        }, type);

        await expect(element.locator("a")).toHaveAttribute("type", type);
    });

    test.describe("Delegates ARIA link", () => {
        test("should set the `aria-atomic` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaAtomic = "true";

            await element.evaluate((node: FASTAnchor, ariaAtomic) => {
                node.ariaAtomic = ariaAtomic;
            }, ariaAtomic);

            await expect(element.locator("a")).toHaveAttribute("aria-atomic", ariaAtomic);
        });

        test("should set the `aria-busy` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaBusy = "false";

            await element.evaluate((node: FASTAnchor, ariaBusy) => {
                node.ariaBusy = ariaBusy;
            }, ariaBusy);

            await expect(element.locator("a")).toHaveAttribute("aria-busy", ariaBusy);
        });

        test("should set the `aria-controls` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaControls = "testId";

            await element.evaluate((node: FASTAnchor, ariaControls) => {
                node.ariaControls = ariaControls;
            }, ariaControls);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-controls",
                ariaControls
            );
        });

        test("should set the `aria-current` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaCurrent = "page";

            await element.evaluate((node: FASTAnchor, ariaCurrent) => {
                node.ariaCurrent = ariaCurrent;
            }, ariaCurrent);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-current",
                ariaCurrent
            );
        });

        test("should set the `aria-describedby` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaDescribedby = "testId";

            await element.evaluate((node: FASTAnchor, ariaDescribedby) => {
                node.ariaDescribedby = ariaDescribedby;
            }, ariaDescribedby);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-describedby",
                ariaDescribedby
            );
        });

        test("should set the `aria-details` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaDetails = "text/html";

            await element.evaluate((node: FASTAnchor, ariaDetails) => {
                node.ariaDetails = ariaDetails;
            }, ariaDetails);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-details",
                ariaDetails
            );
        });

        test("should set the `aria-disabled` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaDisabled = "text/html";

            await element.evaluate((node: FASTAnchor, ariaDisabled) => {
                node.ariaDisabled = ariaDisabled;
            }, ariaDisabled);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-disabled",
                ariaDisabled
            );
        });

        test("should set the `aria-errormessage` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaErrormessage = "test";

            await element.evaluate((node: FASTAnchor, ariaErrormessage) => {
                node.ariaErrormessage = ariaErrormessage;
            }, ariaErrormessage);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-errormessage",
                ariaErrormessage
            );
        });

        test("should set the `aria-expanded` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaExpanded = "true";

            await element.evaluate((node: FASTAnchor, ariaExpanded) => {
                node.ariaExpanded = ariaExpanded;
            }, ariaExpanded);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-expanded",
                ariaExpanded
            );
        });

        test("should set the `aria-flowto` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaFlowto = "testId";

            await element.evaluate((node: FASTAnchor, ariaFlowto) => {
                node.ariaFlowto = ariaFlowto;
            }, ariaFlowto);

            await expect(element.locator("a")).toHaveAttribute("aria-flowto", ariaFlowto);
        });

        test("should set the `aria-haspopup` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaHaspopup = "true";

            await element.evaluate((node: FASTAnchor, ariaHaspopup) => {
                node.ariaHaspopup = ariaHaspopup;
            }, ariaHaspopup);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-haspopup",
                ariaHaspopup
            );
        });

        test("should set the `aria-hidden` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaHidden = "true";

            await element.evaluate((node: FASTAnchor, ariaHidden) => {
                node.ariaHidden = ariaHidden;
            }, ariaHidden);

            await expect(element.locator("a")).toHaveAttribute("aria-hidden", ariaHidden);
        });

        test("should set the `aria-invalid` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaInvalid = "spelling";

            await element.evaluate((node: FASTAnchor, ariaInvalid) => {
                node.ariaInvalid = ariaInvalid;
            }, ariaInvalid);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-invalid",
                ariaInvalid
            );
        });

        test("should set the `aria-keyshortcuts` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaKeyshortcuts = "F4";

            await element.evaluate((node: FASTAnchor, ariaKeyshortcuts) => {
                node.ariaKeyshortcuts = ariaKeyshortcuts;
            }, ariaKeyshortcuts);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-keyshortcuts",
                ariaKeyshortcuts
            );
        });

        test("should set the `aria-label` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaLabel = "Foo label";

            await element.evaluate((node: FASTAnchor, ariaLabel) => {
                node.ariaLabel = ariaLabel;
            }, ariaLabel);

            await expect(element.locator("a")).toHaveAttribute("aria-Label", ariaLabel);
        });

        test("should set the `aria-labelledby` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaLabelledby = "testId";

            await element.evaluate((node: FASTAnchor, ariaLabelledby) => {
                node.ariaLabelledby = ariaLabelledby;
            }, ariaLabelledby);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-labelledby",
                ariaLabelledby
            );
        });

        test("should set the `aria-live` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaLive = "testId";

            await element.evaluate((node: FASTAnchor, ariaLive) => {
                node.ariaLive = ariaLive;
            }, ariaLive);

            await expect(element.locator("a")).toHaveAttribute("aria-live", ariaLive);
        });

        test("should set the `aria-owns` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaOwns = "testId";

            await element.evaluate((node: FASTAnchor, ariaOwns) => {
                node.ariaOwns = ariaOwns;
            }, ariaOwns);

            await expect(element.locator("a")).toHaveAttribute("aria-owns", ariaOwns);
        });

        test("should set the `aria-relevant` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaRelevant = "removals";

            await element.evaluate((node: FASTAnchor, ariaRelevant) => {
                node.ariaRelevant = ariaRelevant;
            }, ariaRelevant);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-relevant",
                ariaRelevant
            );
        });

        test("should set the `aria-roledescription` attribute on the internal anchor when provided", async ({
            page,
        }) => {
            const element = page.locator("fast-anchor");
            const ariaRoledescription = "slide";

            await element.evaluate((node: FASTAnchor, ariaRoledescription) => {
                node.ariaRoledescription = ariaRoledescription;
            }, ariaRoledescription);

            await expect(element.locator("a")).toHaveAttribute(
                "aria-roledescription",
                ariaRoledescription
            );
        });
    });
});
