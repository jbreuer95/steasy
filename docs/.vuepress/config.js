module.exports = {
  title: 'Steasy',
  description: 'Tailwind like styling for React Native',
  themeConfig: {
    repo: 'jbreuer95/steasy',
    nav: [
      { text: 'Docs', link: '/docs/' },
    ],
    sidebar: [
      {
        title: 'Getting Started',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/docs/', 'Installation'],
          '/docs/usage',
          '/docs/customization',
        ]
      },
      {
        title: 'Props',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/docs/props/alignContent',
          '/docs/props/alignItems',
          '/docs/props/alignSelf',
          '/docs/props/backfaceVisibility',
          '/docs/props/backgroundColor',
          '/docs/props/borderColor',
          '/docs/props/borderRadius',
          '/docs/props/borderRadiusDir',
          '/docs/props/borderStyle',
          '/docs/props/borderWidth',
          '/docs/props/borderWidthDir',
          '/docs/props/bottom',
          '/docs/props/boxShadow',
          '/docs/props/direction',
          '/docs/props/display',
          '/docs/props/end',
          '/docs/props/flex',
          '/docs/props/flexDirection',
          '/docs/props/flexGrow',
          '/docs/props/flexShrink',
          '/docs/props/flexWrap',
          '/docs/props/fontFamily',
          '/docs/props/fontPadding',
          '/docs/props/fontSize',
          '/docs/props/fontStyle',
          '/docs/props/fontWeight',
          '/docs/props/height',
          '/docs/props/inset',
          '/docs/props/insetDir',
          '/docs/props/justifyContent',
          '/docs/props/left',
          '/docs/props/letterSpacing',
          '/docs/props/lineHeight',
          '/docs/props/margin',
          '/docs/props/maxHeight',
          '/docs/props/maxWidth',
          '/docs/props/minHeight',
          '/docs/props/minWidth',
          '/docs/props/objectFit',
          '/docs/props/opacity',
          '/docs/props/overflow',
          '/docs/props/padding',
          '/docs/props/position',
          '/docs/props/resize',
          '/docs/props/right',
          '/docs/props/start',
          '/docs/props/textAlign',
          '/docs/props/textColor',
          '/docs/props/textDecoration',
          '/docs/props/textShadow',
          '/docs/props/textTransform',
          '/docs/props/tint',
          '/docs/props/top',
          '/docs/props/verticalAlign',
          '/docs/props/width',
          '/docs/props/zIndex'
        ]
      },
    ]
  }
}
