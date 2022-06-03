import {
    fastAnchor,
    fastBadge,
    fastButton,
    fastCard,
    fastCheckbox,
    fastDesignSystemProvider,
    fastDivider,
    fastFlipper,
    fastListbox,
    fastMenu,
    fastMenuItem,
    fastOption,
    fastProgress,
    fastRadio,
    fastRadioGroup,
    fastSlider,
    fastSwitch,
    fastTab,
    fastTabPanel,
    fastTabs,
    fastTextField,
    fastTreeItem,
    fastTreeView,
    provideFASTDesignSystem,
} from "@microsoft/fast-components";
import { fastToolingColorPicker } from "../app/components/color-picker";
import { App } from "./app";
import { appComponents } from "./custom-elements";

import "./base.css";

provideFASTDesignSystem()
    .register(
        fastAnchor(),
        fastBadge(),
        fastButton(),
        fastCard(),
        fastCheckbox(),
        fastDesignSystemProvider(),
        fastDivider(),
        fastFlipper(),
        fastListbox(),
        fastMenu(),
        fastMenuItem(),
        fastOption(),
        fastProgress(),
        fastRadio(),
        fastRadioGroup(),
        fastSlider(),
        fastSwitch(),
        fastTab(),
        fastTabPanel(),
        fastTabs(),
        fastTextField(),
        fastTreeItem(),
        fastTreeView()
    )
    .withPrefix("fast-tooling")
    .register(fastToolingColorPicker())
    .withPrefix("app")
    .register(appComponents);

App;
