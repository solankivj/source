export * from "./accordion"
export * from "./button"
export * from "./checkbox"
export * from "./choice-card"
export * from "./footer"
export * from "./inline-error"
export * from "./label"
export * from "./link"
export * from "./radio"
export * from "./select"
export * from "./text-input"
export * from "./user-feedback"

import { buttonBrand, buttonDefault, buttonBrandAlt } from "./button"
import { checkboxBrand, checkboxDefault } from "./checkbox"
import { choiceCardDefault } from "./choice-card"
import { footerBrand } from "./footer"
import { inlineErrorBrand, inlineErrorDefault } from "./inline-error"
import { labelDefault, labelBrand } from "./label"
import { linkBrand, linkDefault, linkBrandAlt } from "./link"
import { radioBrand, radioDefault } from "./radio"
import { textInputDefault } from "./text-input"
import { userFeedbackDefault, userFeedbackBrand } from "./user-feedback"

export const defaultTheme = {
	...buttonDefault,
	...checkboxDefault,
	...choiceCardDefault,
	...inlineErrorDefault,
	...labelDefault,
	...linkDefault,
	...radioDefault,
	...textInputDefault,
	...userFeedbackDefault,
}

export const brand = {
	...buttonBrand,
	...checkboxBrand,
	...footerBrand,
	...inlineErrorBrand,
	...labelBrand,
	...linkBrand,
	...radioBrand,
	...userFeedbackBrand,
}

export const brandAlt = {
	...buttonBrandAlt,
	...linkBrandAlt,
}
