import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetExtra } from 'unocss-preset-extra'

export default defineConfig({
  rules: [
    [
      'ring-1',
      {
        'box-shadow': 'var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)',
      },
    ],
    // ['ring-2', { 'box-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);' }],
  ],
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
    [
      'card-hover',
      'transition duration-200 ease-in-out dark:hover:border-pink hover:border-pink border',
    ],
    ['title-font', 'text-left text-pink font-600 text-2xl my-4 text-shadow'],
    ['title-btn', 'my-4 mb-[150px] flex flex-row justify-start'],
    [
      'common-border',
      'inline-flex mr-4 rounded px-4 py-2 font-bold focus:outline-none focus-visible:ring hover:cursor-default transition duration-100 animate-shadow text-gray-800 dark:text-gray-100',
    ],
    ['card-border', 'rounded-md z-50 hover:cursor-default'],
    [
      'header-link',
      'px-3 mx-1 py-2 transition-all duration-150 hover:cursor-default hover:text-pink font-500 hover:cursor-pointer',
    ],
    [
      'card',
      'rounded-md shadow-sm border border-[#ddd] dark:border-[#333] transition-all ease-in-out  hover:border-pink-400  hover:dark:border-pink ring-inset hover:border-pink hover:ring-2 hover:ring-pink',
    ],
    ['mobile-head-link', 'header-link text-2xl my-1 mt-1 mr-2 line-height-12'],
  ],
  presets: [
    presetMini(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        serif: ['serif', 'Noto Serif SC'],
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
    presetExtra(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
