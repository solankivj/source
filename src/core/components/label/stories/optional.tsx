import React from "react"
import { Label, labelBrand } from "../index"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"

export const optionalLight = () => <Label text="Middle name" optional={true} />

optionalLight.story = {
	name: "optional light",
}

export const optionalBlue = () => (
	<ThemeProvider theme={labelBrand}>
		<Label text="Middle name" optional={true} />
	</ThemeProvider>
)

optionalBlue.story = {
	name: "optional blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}
