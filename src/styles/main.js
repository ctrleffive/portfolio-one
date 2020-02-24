import { css } from '@emotion/core'
import { darken, lighten } from 'polished'
import * as variables from './variables.json'

export const Colors = variables.default.colors

const BrandDarken = darken(0.3, Colors.brand)
const MainLightsOn = `#ececec`

export const ColorsAdvanced = {
  main: BrandDarken,
  mainLightsOn: MainLightsOn,
  secondary: lighten(0.6, BrandDarken),
  secondaryLightsOn: darken(0.7, MainLightsOn),
  accentLightsOn: Colors.brand,
}
export const Fonts = {
  body: variables.default.font,
}

export const GlobalStyles = css`
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }
  ::selection,
  mark {
    background-color: ${Colors.accent};
    color: ${ColorsAdvanced.main};
  }
  body {
    overflow-y: scroll;
  }
  * {
    outline: none !important;
  }

  body,
  html {
    font-family: ${Fonts.body}, sans-serif;
    font-size: 16px;
  }
  body {
    transition: background-color 0.3s;
    color: ${ColorsAdvanced.secondary};
    background-color: ${ColorsAdvanced.main};
    user-select: none;
    overflow-x: hidden;
    &.lights-on {
      color: ${ColorsAdvanced.secondaryLightsOn};
      background-color: ${ColorsAdvanced.mainLightsOn};
    }
    @media print {
      background-color: #fff !important;
    }
  }

  .highlight {
    user-select: text;
  }

  .pad-wrap {
    padding: 3rem;
    transition-duration: 0.3s;
    max-width: 1000px;

    @media screen and (max-width: 766px) {
      margin-left: -3rem;
      margin-right: -3rem;
      border-radius: 0 !important;
      width: calc(100% - -5rem);
    }
    @media print {
      border: 1px solid;
    }
  }

  .blinker {
    animation: blink 1s infinite;
    margin-left: 0.2rem;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  app-root {
    &:empty:before {
      filter: invert(0);
    }
  }

  .badge-brand {
    color: #000;
    background-color: ${Colors.accent};
  }

  a {
    color: inherit;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

  .high {
    color: ${Colors.accent};
    .lights-on & {
      color: ${ColorsAdvanced.accentLightsOn};
    }
  }

  .h1 {
    line-height: 3.5rem;
  }

  .h3 {
    line-height: 2.4rem;
  }

  .content-wrap {
    position: absolute;
    margin: 8rem 10rem 0;
    padding-bottom: 3rem;
    width: calc(100% - 20rem);

    @media screen and (max-width: 1000px) {
      margin-left: 8.5rem;
      margin-right: 8.5rem;
      width: calc(100% - 17rem);
    }
    @media screen and (max-width: 766px) {
      margin-left: 2rem;
      margin-right: 2rem;
      width: calc(100% - 4rem);
    }
  }

  .brand-light {
    color: #fff;
    transition: color 0.5s;
    .lights-on & {
      color: #000;
    }
  }

  .no-bullets {
    padding-left: 0.2rem;
    list-style: none;
  }
`
