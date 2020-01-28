import { css } from '@emotion/core'
import { darken, lighten } from 'polished'

export const Colors = {
  brand: `#5d49d3`,
  accent: `#FFEB3B`,
}

const BrandDarken = darken(0.3, Colors.brand)
const MainLightsOn = `#ececec`

export const ColorsAdvanced = {
  main: BrandDarken,
  mainLightsOn: MainLightsOn,
  secondary: lighten(0.6, BrandDarken),
  secondaryLightsOn: darken(0.3, MainLightsOn),
  accentLightsOn: Colors.brand,
}
export const Fonts = {
  body: `Raleway`,
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
    margin: 8rem 12rem 0;
    padding-bottom: 8rem;
    max-width: calc(100% - 16rem);

    @media screen and (max-width: 1000px) {
      margin-left: 6.5rem;
      margin-right: 6.5rem;
      max-width: calc(100% - 13rem);
    }
    @media screen and (max-width: 500px) {
      margin-left: 2rem;
      margin-right: 2rem;
      max-width: calc(100% - 4rem);
    }
    @media print {
      margin: 0;
      padding: 2rem;
      position: initial;
    }
  }

  .brand-light {
    color: #fff;
    transition: color 0.5s;
    .lights-on & {
      color: #000;
    }
  }

  .contact-button {
    border-radius: 100%;
    background-color: ${Colors.accent};
    width: 3rem;
    height: 3rem;
    display: block;
    position: relative;
    transition: background-color 0.5s;
    .lights-on & {
      background-color: ${ColorsAdvanced.accentLightsOn};
    }
    &:before,
    &:after {
      content: '';
      border: 1px solid rgba(0, 0, 0, 0.6);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: border-color 0.5s;
      .lights-on & {
        border-color: rgba(255, 255, 255, 0.9);
      }
    }
    &:before {
      width: 1.5rem;
      height: 1.1rem;
      border-radius: 3px;
    }
    &:after {
      width: 1rem;
      height: 1rem;
      border-left: 0;
      border-top: 0;
      transform: translate(-50%, -50%) rotate(45deg);
      margin-top: -5px;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  ngx-md {
    pre[class*='language-'] {
      @media print {
        margin-left: 0;
        margin-right: 0;
      }
      code {
        font-size: 0.95rem;
      }
    }
    img {
      max-width: 100%;
      border-radius: 5px;
      margin-top: 1.5rem;
      margin-bottom: 0.8rem;
    }
    p {
      font-size: 1.2rem;
    }
  }

  .ngxMasonryItem {
    transition-property: opacity !important;
  }

  .page-bg {
    svg {
      content: '';
      top: 50%;
      left: 50%;
      z-index: -1;
      opacity: 0.2;
      position: fixed;
      transition-duration: 0.2s;
      transform: translate(calc(50% - 35rem), -50%);
      max-height: 100%;

      @media screen and (max-width: 1000px) {
        transform: translate(-50%, -50%);
      }
      @media screen and (max-width: 500px) {
        transform: translate(-25%, -50%);
      }
    }

    &.hide-page-bg svg {
      opacity: 0;
      left: 51%;
    }
  }
`
