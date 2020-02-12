import React, { ReactNode, InputHTMLAttributes } from "react"
import {
	fieldset,
	label,
	labelWithSupportingText,
	checkbox,
	labelText,
	labelTextWithSupportingText,
	supportingText,
	tick,
	tickWithLabelText,
	tickWithSupportingText,
	errorCheckbox,
} from "./styles"
import { InlineError } from "@guardian/src-inline-error"
export {
	checkboxDefault,
	checkboxBrand,
} from "@guardian/src-foundations/themes"

const CheckboxGroup = ({
	name,
	error,
	children,
	...props
}: {
	name: string
	error?: string
	children: JSX.Element | JSX.Element[]
}) => {
	return (
		<fieldset css={fieldset} {...props}>
			{typeof error === "string" && <InlineError>{error}</InlineError>}
			{React.Children.map(children, child => {
				return React.cloneElement(
					child,
					Object.assign(error ? { error: true } : {}, {
						name,
					}),
				)
			})}
		</fieldset>
	)
}

const LabelText = ({
	hasSupportingText,
	children,
}: {
	hasSupportingText?: boolean
	children: ReactNode
}) => {
	return (
		<div
			css={theme => [
				labelText(theme.checkbox && theme),
				hasSupportingText ? labelTextWithSupportingText : "",
			]}
		>
			{children}
		</div>
	)
}

const SupportingText = ({ children }: { children: ReactNode }) => {
	return (
		<div css={theme => supportingText(theme.checkbox && theme)}>
			{children}
		</div>
	)
}

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: ReactNode
	supporting?: ReactNode
	indeterminate: boolean
	error: boolean
}

const Checkbox = ({
	label: labelContent,
	value,
	checked,
	supporting,
	defaultChecked,
	error,
	indeterminate,
	...props
}: CheckboxProps) => {
	const isChecked = (): boolean | "mixed" => {
		// Note: the indeterminate prop takes precedence over the checked prop
		if (indeterminate) {
			return "mixed"
		}

		if (checked != null) {
			return checked
		}

		return !!defaultChecked
	}
	const setCheckboxState = (el: HTMLInputElement | null): void => {
		if (el) {
			el.indeterminate = indeterminate
			if (checked != null) {
				el.checked = checked
			}
		}
	}

	const Box = () => (
		<>
			<input
				css={theme => [
					checkbox(theme.checkbox && theme),
					error ? errorCheckbox(theme.checkbox && theme) : "",
				]}
				value={value}
				aria-invalid={error}
				aria-checked={isChecked()}
				ref={setCheckboxState}
				{...props}
			/>
			<span
				css={theme => [
					tick(theme.checkbox && theme),
					labelContent ? tickWithLabelText : "",
					supporting ? tickWithSupportingText : "",
				]}
			/>
		</>
	)

	const LabelledBox = () => (
		<label
			css={theme => [
				label(theme.checkbox && theme),
				supporting ? labelWithSupportingText : "",
			]}
		>
			<Box />
			{supporting ? (
				<div>
					<LabelText hasSupportingText={true}>
						{labelContent}
					</LabelText>
					<SupportingText>{supporting}</SupportingText>
				</div>
			) : (
				<LabelText>{labelContent}</LabelText>
			)}
		</label>
	)

	// Note: if no label is passed, supporting text will not
	// be displayed either
	return <>{labelContent ? <LabelledBox /> : <Box />}</>
}

const checkboxDefaultProps = {
	disabled: false,
	type: "checkbox",
	defaultChecked: false,
	indeterminate: false,
	error: false,
}

Checkbox.defaultProps = { ...checkboxDefaultProps }

export { CheckboxGroup, Checkbox }