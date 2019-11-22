import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds, Appearance } from "@guardian/src-helpers"
import { space } from "@guardian/src-foundations"
import { TextInput, textInputLight } from "./index"

export default {
	title: "TextInput",
}

const appearances: {
	name: Appearance
	theme: {}
}[] = [
	{
		name: "light",
		theme: textInputLight,
	},
]

const constrainedWith = css`
	width: 30em;
`

const [defaultLight] = appearances.map(
	({ name, theme }: { name: Appearance; theme: {} }) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<div css={constrainedWith}>
					<TextInput label="First name" />
				</div>
			</ThemeProvider>
		)

		story.story = {
			name: `default ${name}`,
			parameters: {
				backgrounds: [
					Object.assign(
						{},
						{ default: true },
						storybookBackgrounds[name],
					),
				],
			},
		}

		return story
	},
)

const [optionalLight] = appearances.map(
	({ name, theme }: { name: Appearance; theme: {} }) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<div css={constrainedWith}>
					<TextInput label="First name" optional={true} />
				</div>
			</ThemeProvider>
		)

		story.story = {
			name: `optional ${name}`,
			parameters: {
				backgrounds: [
					Object.assign(
						{},
						{ default: true },
						storybookBackgrounds[name],
					),
				],
			},
		}

		return story
	},
)
const [supportingTextLight] = appearances.map(
	({ name, theme }: { name: Appearance; theme: {} }) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<div css={constrainedWith}>
					<TextInput label="Email" supporting="alex@example.com" />
				</div>
			</ThemeProvider>
		)

		story.story = {
			name: `supporting text ${name}`,
			parameters: {
				backgrounds: [
					Object.assign(
						{},
						{ default: true },
						storybookBackgrounds[name],
					),
				],
			},
		}

		return story
	},
)

const spacer = css`
	margin-bottom: ${space[3]}px;
`
const [widthsLight] = appearances.map(
	({ name, theme }: { name: Appearance; theme: {} }) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<div css={spacer}>
					<TextInput label="First name" width={30} />
				</div>
				<div css={spacer}>
					<TextInput label="Postcode" width={10} />
				</div>
				<div css={spacer}>
					<TextInput label="Year of birth" width={4} />
				</div>
			</ThemeProvider>
		)

		story.story = {
			name: `widths ${name}`,
			parameters: {
				backgrounds: [
					Object.assign(
						{},
						{ default: true },
						storybookBackgrounds[name],
					),
				],
			},
		}

		return story
	},
)

const [errorWithMessageLight] = appearances.map(
	({ name, theme }: { name: Appearance; theme: {} }) => {
		const story = () => (
			<ThemeProvider theme={theme}>
				<div css={constrainedWith}>
					<TextInput
						label="First name"
						error="Enter your first name below"
					/>
				</div>
			</ThemeProvider>
		)

		story.story = {
			name: `error with message ${name}`,
			parameters: {
				backgrounds: [
					Object.assign(
						{},
						{ default: true },
						storybookBackgrounds[name],
					),
				],
			},
		}

		return story
	},
)

export {
	defaultLight,
	optionalLight,
	supportingTextLight,
	widthsLight,
	errorWithMessageLight,
}
