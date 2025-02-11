## API Report File for "@microsoft/fast-ssr"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Binding } from '@microsoft/fast-element';
import { ComposableStyles } from '@microsoft/fast-element';
import { Constructable } from '@microsoft/fast-element';
import { DOMContainer } from '@microsoft/fast-element/di';
import { ExecutionContext } from '@microsoft/fast-element';
import { FASTElement } from '@microsoft/fast-element';
import { ViewBehaviorFactory } from '@microsoft/fast-element';
import { ViewTemplate } from '@microsoft/fast-element';

// @beta
export type ComponentDOMEmissionMode = "shadow";

// @beta (undocumented)
export type ConstructableElementRenderer = (new (tagName: string, renderInfo: RenderInfo) => ElementRenderer) & typeof ElementRenderer;

// @beta (undocumented)
export abstract class ElementRenderer {
    constructor(tagName: string, renderInfo: RenderInfo);
    // (undocumented)
    abstract attributeChangedCallback(name: string, prev: string | null, next: string | null): void;
    // (undocumented)
    abstract connectedCallback(): void;
    // (undocumented)
    dispatchEvent(event: Event): boolean;
    // (undocumented)
    abstract readonly element?: HTMLElement;
    // (undocumented)
    elementChanged(): void;
    // Warning: (ae-forgotten-export) The symbol "AttributesMap" needs to be exported by the entry point exports.d.ts
    static matchesClass(ctor: typeof HTMLElement, tagName: string, attributes: AttributesMap): boolean;
    renderAttributes(): IterableIterator<string>;
    // (undocumented)
    abstract renderShadow(renderInfo: RenderInfo): IterableIterator<string>;
    setAttribute(name: string, value: string): void;
    setProperty(name: string, value: unknown): void;
    // (undocumented)
    readonly tagName: string;
}

// @beta
export abstract class FASTElementRenderer extends ElementRenderer {
    constructor(tagName: string, renderInfo: RenderInfo);
    attributeChangedCallback(name: string, old: string | null, value: string | null): void;
    connectedCallback(): void;
    readonly element: FASTElement;
    static matchesClass(ctor: typeof HTMLElement): boolean;
    renderLight(renderInfo: RenderInfo): IterableIterator<string>;
    renderShadow(renderInfo: RenderInfo): IterableIterator<string>;
    protected abstract styleRenderer: StyleRenderer;
    protected abstract templateRenderer: TemplateRenderer;
}

// @beta
function fastSSR(): {
    templateRenderer: TemplateRenderer;
    elementRenderer: typeof FASTElementRenderer;
    defaultRenderInfo: RenderInfo;
};
export default fastSSR;

// @beta
export type Middleware = (req: any, res: any, next: () => any) => void;

// @beta (undocumented)
export type RenderInfo = {
    elementRenderers: ConstructableElementRenderer[];
    customElementInstanceStack: ElementRenderer[];
    customElementHostStack: ElementRenderer[];
};

// @beta
export const RequestStorage: Readonly<{
    readonly container: DOMContainer;
    set(key: any, value: any): any;
    get: typeof getItem;
    clear(): void;
    delete(key: any): boolean;
    has(key: any): boolean;
}>;

// @beta
export const RequestStorageManager: Readonly<{
    installDOMShim(): void;
    installDIContextRequestStrategy(): void;
    createStorage(options?: StorageOptions): Map<any, any>;
    run<T = unknown>(storage: Map<any, any>, callback: () => T): T;
    middleware(options?: StorageOptions): Middleware;
}>;

// @beta
export type StorageOptions = {
    createWindow?: () => {
        [key: string]: unknown;
    };
    storage?: Map<any, any>;
};

// @beta
export interface StyleRenderer {
    render(styles: ComposableStyles): string;
}

// @beta
export class TemplateRenderer {
    readonly componentDOMEmissionMode: ComponentDOMEmissionMode;
    render(template: ViewTemplate | string, renderInfo: RenderInfo, source?: unknown, context?: ExecutionContext): IterableIterator<string>;
    // Warning: (ae-forgotten-export) The symbol "Op" needs to be exported by the entry point exports.d.ts
    //
    // @internal
    renderOpCodes(codes: Op[], renderInfo: RenderInfo, source: unknown, context: ExecutionContext): IterableIterator<string>;
    // @internal
    withViewBehaviorFactoryRenderers(...renderers: ViewBehaviorFactoryRenderer<any>[]): void;
}

// @beta
export interface ViewBehaviorFactoryRenderer<T extends ViewBehaviorFactory> {
    matcher: Constructable<T>;
    render(behavior: T, renderInfo: RenderInfo, source: any, renderer: TemplateRenderer, context: ExecutionContext): IterableIterator<string>;
}

// Warnings were encountered during analysis:
//
// dist/dts/request-storage.d.ts:31:5 - (ae-forgotten-export) The symbol "getItem" needs to be exported by the entry point exports.d.ts

// (No @packageDocumentation comment for this package)

```
