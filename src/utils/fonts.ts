import localFont from 'next/font/local'

export const gotham = localFont({
    src: [
      {
        path: '../fonts/Gotham-Light.ttf',
        weight: '300',
        style: 'normal'
      },
      {
        path: '../fonts/Gotham-Book.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../fonts/Gotham-Medium.ttf',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../fonts/Gotham-Bold.ttf',
        weight: '700',
        style: 'normal',
      }
    ],
    variable: '--font-primary',
    display: 'swap'
  })
  
export const leviathan = localFont({
  src: [
    {
      path: '../fonts/Leviathan-HTF-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-secondary',
  display: 'swap'
})