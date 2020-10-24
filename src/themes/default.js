import { css } from "styled-components"

const theme = {}

theme.colors = {
  foreground: "#7D63FF",
  foregroundDisabled: "#ACA1E1",
  background: "#1B1B26",
  textStandard: "#E2E2E2",
  textDisabled: "BEBEBE",
}

theme.textStyles = {
  h1: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 140.62%;
    /* or 101px */
    letter-spacing: 0.03em;
  `,
  h2: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 140.62%;
    /* identical to box height, or 79px */
    letter-spacing: 0.0125em;
  `,
  h3: css`
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 140.62%;
    /* identical to box height, or 67px */
    letter-spacing: 0.01em;
  `,
  h4: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 140.62%;
    /* or 53px */
    letter-spacing: 0.01em;
  `,
  h5: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 140.62%;
    /* or 42px */
    letter-spacing: 0.01em;
  `,
  h6: css`
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 140.62%;
    /* or 28px */
    letter-spacing: 0.07em;
  `,
  text: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140.62%;
    /* identical to box height, or 22px */
    letter-spacing: 0.01em;
  `,
  smallText: css`
    font-family: GilroyRegular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140.62%;
    /* identical to box height, or 20px */
    letter-spacing: 0.01em;
  `,
  button: css`
    font-family: GilroyMedium;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140.62%;
    /* identical to box height, or 20px */
    letter-spacing: 0.06em;
    text-transform: uppercase;
  `,
}

export default theme
