import alignContent from './alignContent';
import alignItems from './alignItems';
import alignSelf from './alignSelf';
import backfaceVisibility from './backfaceVisibility';
import backgroundColor from './backgroundColor';
import borderColor from './borderColor';
import borderRadius from './borderRadius';
import borderRadiusDir from './borderRadiusDir';
import borderStyle from './borderStyle';
import borderWidth from './borderWidth';
import borderWidthDir from './borderWidthDir';
import bottom from './bottom';
import boxShadow from './boxShadow';
import direction from './direction';
import display from './display';
import end from './end';
import flex from './flex';
import flexDirection from './flexDirection';
import flexGrow from './flexGrow';
import flexShrink from './flexShrink';
import flexWrap from './flexWrap';
import fontFamily from './fontFamily';
import fontPadding from './fontPadding';
import fontSize from './fontSize';
import fontStyle from './fontStyle';
import fontWeight from './fontWeight';
import height from './height';
import inset from './inset';
import insetDir from './insetDir';
import justifyContent from './justifyContent';
import left from './left';
import letterSpacing from './letterSpacing';
import lineHeight from './lineHeight';
import margin from './margin';
import maxHeight from './maxHeight';
import maxWidth from './maxWidth';
import minHeight from './minHeight';
import minWidth from './minWidth';
import objectFit from './objectFit';
import opacity from './opacity';
import overflow from './overflow';
import padding from './padding';
import position from './position';
import resize from './resize';
import right from './right';
import start from './start';
import textAlign from './textAlign';
import textColor from './textColor';
import textDecoration from './textDecoration';
import textShadow from './textShadow';
import textTransform from './textTransform';
import tint from './tint';
import top from './top';
import verticalAlign from './verticalAlign';
import width from './width';
import zIndex from './zIndex';
import overlayColor from './overlayColor';

let all = {
    alignContent,
    alignItems,
    alignSelf,
    backfaceVisibility,
    borderStyle,
    direction,
    display,
    flexDirection,
    flexWrap,
    fontPadding,
    fontStyle,
    fontWeight,
    justifyContent,
    objectFit,
    overflow,
    position,
    resize,
    textAlign,
    textDecoration,
    textTransform,
    verticalAlign,
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    boxShadow,
    flex,
    flexGrow,
    flexShrink,
    fontFamily,
    fontSize,
    height,
    inset,
    top,
    bottom,
    left,
    right,
    start,
    end,
    letterSpacing,
    lineHeight,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    padding,
    textColor,
    textShadow,
    tint,
    width,
    zIndex,
    borderRadiusDir,
    borderWidthDir,
    insetDir,
    overlayColor
}

let style = {}

for (const [name, value] of Object.entries(all)) {
    Object.assign(style, value)
}

export { all }

export default style;
