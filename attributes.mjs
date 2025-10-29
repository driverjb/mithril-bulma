import m from 'mithril';

/**
 * @typedef {object} MBExtraHelperAttributes
 * @prop {{[key:string]: string}} [style]
 * @prop {string} [id]
 * @prop {string} [name]
 * @prop {Array<Spacing>|Spacing} [margin]
 * @prop {Array<Spacing>|Spacing} [padding]
 * @prop {Text} [text]
 * @prop {Visibility[]|Visibility} [visibility]
 * @prop {Flex} [flex] Configure flex properties (must also add visibility: flex)
 * @prop {boolean} [clearFix] Fixes an elements floating children
 * @prop {'left'|'right'} [pulled] Pulls an element to the left or right (float)
 * @prop {boolean} [overlay] Completely covers the first positioned parent
 * @prop {boolean} [hideOverflow] Adds overflow hidden
 * @prop {boolean} [clearRadius] Removes any radius
 * @prop {boolean} [clearShadow] Removes any shadow
 * @prop {boolean} [preventTextSelect] Prevents text from being selected
 * @prop {boolean} [clickable] Adds cursor: pointer !important to the element
 * @prop {boolean} [positionRelative] Applies position: rleative to the element
 */

/**
 * @typedef {'white'|'white-ter'|'white-bis'} TextWhite
 * @typedef {'black'|'black-ter'|'black-bis'} TextBlack
 * @typedef {'light'} TextLight
 * @typedef {'dark'} TextDark
 * @typedef {'grey-darker'|'grey-dark'|'grey'|'grey-light'|'grey-lighter'} TextGrey
 * @typedef {'text-light'|'text-dark'|'text-bold'|'text-soft'|'text-00'|'text-05'|'text-10'|'text-15'|'text-20'|'text-25'|'text-30'|'text-35'|'text-40'|'text-45'|'text-50'|'text-55'|'text-60'|'text-65'|'text-70'|'text-75'|'text-80'|'text-85'|'text-90'|'text-95'|'text-100'} TextText
 * @typedef {'link-light'|'link-dark'|'link-bold'|'link-soft'|'link-00'|'link-05'|'link-10'|'link-15'|'link-20'|'link-25'|'link-30'|'link-35'|'link-40'|'link-45'|'link-50'|'link-55'|'link-60'|'link-65'|'link-70'|'link-75'|'link-80'|'link-85'|'link-90'|'link-95'|'link-100'} TextLink
 * @typedef {'primary-light'|'primary-dark'|'primary-bold'|'primary-soft'|'primary-00'|'primary-05'|'primary-10'|'primary-15'|'primary-20'|'primary-25'|'primary-30'|'primary-35'|'primary-40'|'primary-45'|'primary-50'|'primary-55'|'primary-60'|'primary-65'|'primary-70'|'primary-75'|'primary-80'|'primary-85'|'primary-90'|'primary-95'|'primary-100'} TextPrimary
 * @typedef {'info-light'|'info-dark'|'info-bold'|'info-soft'|'info-00'|'info-05'|'info-10'|'info-15'|'info-20'|'info-25'|'info-30'|'info-35'|'info-40'|'info-45'|'info-50'|'info-55'|'info-60'|'info-65'|'info-70'|'info-75'|'info-80'|'info-85'|'info-90'|'info-95'|'info-100'} TextInfo
 * @typedef {'success-light'|'success-dark'|'success-bold'|'success-soft'|'success-00'|'success-05'|'success-10'|'success-15'|'success-20'|'success-25'|'success-30'|'success-35'|'success-40'|'success-45'|'success-50'|'success-55'|'success-60'|'success-65'|'success-70'|'success-75'|'success-80'|'success-85'|'success-90'|'success-95'|'success-100'} TextSuccess
 * @typedef {'warning-light'|'warning-dark'|'warning-bold'|'warning-soft'|'warning-00'|'warning-05'|'warning-10'|'warning-15'|'warning-20'|'warning-25'|'warning-30'|'warning-35'|'warning-40'|'warning-45'|'warning-50'|'warning-55'|'warning-60'|'warning-65'|'warning-70'|'warning-75'|'warning-80'|'warning-85'|'warning-90'|'warning-95'|'warning-100'} TextWarning
 * @typedef {'danger-light'|'danger-dark'|'danger-bold'|'danger-soft'|'danger-00'|'danger-05'|'danger-10'|'danger-15'|'danger-20'|'danger-25'|'danger-30'|'danger-35'|'danger-40'|'danger-45'|'danger-50'|'danger-55'|'danger-60'|'danger-65'|'danger-70'|'danger-75'|'danger-80'|'danger-85'|'danger-90'|'danger-95'|'danger-100'} TextDanger
 * @typedef {TextWhite|TextBlack|TextLight|TextDark|TextGrey|TextText|TextLink|TextPrimary|TextInfo|TextSuccess|TextWarning|TextDanger} TextColor
 */

/**
 * @typedef {'text'|'link'|'primary'|'info'|'success'|'warning'|'danger'|'black'|'white'|'grey'|'dark'|'light'} Color
 */

/**
 * @typedef {'0'|'1'|'2'|'3'|'4'|'5'|'6'|'auto'|'t-0'|'t-1'|'t-2'|'t-3'|'t-4'|'t-5'|'t-6'|'t-auto'|'r-0'|'r-1'|'r-2'|'r-3'|'r-4'|'r-5'|'r-6'|'r-auto'|'b-0'|'b-1'|'b-2'|'b-3'|'b-4'|'b-5'|'b-6'|'b-auto'|'l-0'|'l-1'|'l-2'|'l-3'|'l-4'|'l-5'|'l-6'|'l-auto'|'x-0'|'x-1'|'x-2'|'x-3'|'x-4'|'x-5'|'x-6'|'x-auto'|'y-0'|'y-1'|'y-2'|'y-3'|'y-4'|'y-5'|'y-6'|'y-auto'} Spacing
 * @typedef {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'1-mobile'|'1-touch'|'1-tablet'|'1-tablet-only'|'1-desktop'|'1-desktop-only'|'1-widescreen'|'1-widescreen-only'|'1-fullhd'|'2-mobile'|'2-touch'|'2-tablet'|'2-tablet-only'|'2-desktop'|'2-desktop-only'|'2-widescreen'|'2-widescreen-only'|'2-fullhd'|'3-mobile'|'3-touch'|'3-tablet'|'3-tablet-only'|'3-desktop'|'3-desktop-only'|'3-widescreen'|'3-widescreen-only'|'3-fullhd'|'4-mobile'|'4-touch'|'4-tablet'|'4-tablet-only'|'4-desktop'|'4-desktop-only'|'4-widescreen'|'4-widescreen-only'|'4-fullhd'|'5-mobile'|'5-touch'|'5-tablet'|'5-tablet-only'|'5-desktop'|'5-desktop-only'|'5-widescreen'|'5-widescreen-only'|'5-fullhd'|'6-mobile'|'6-touch'|'6-tablet'|'6-tablet-only'|'6-desktop'|'6-desktop-only'|'6-widescreen'|'6-widescreen-only'|'6-fullhd'|'7-mobile'|'7-touch'|'7-tablet'|'7-tablet-only'|'7-desktop'|'7-desktop-only'|'7-widescreen'|'7-widescreen-only'|'7-fullhd'} TextSize
 * @typedef {'centered'|'justified'|'left'|'right'|'centered-mobile'|'centered-touch'|'centered-tablet'|'centered-tablet-only'|'centered-desktop'|'centered-desktop-only'|'centered-widescreen'|'centered-widescreen-only'|'centered-fullhd'|'justified-mobile'|'justified-touch'|'justified-tablet'|'justified-tablet-only'|'justified-desktop'|'justified-desktop-only'|'justified-widescreen'|'justified-widescreen-only'|'justified-fullhd'|'left-mobile'|'left-touch'|'left-tablet'|'left-tablet-only'|'left-desktop'|'left-desktop-only'|'left-widescreen'|'left-widescreen-only'|'left-fullhd'|'right-mobile'|'right-touch'|'right-tablet'|'right-tablet-only'|'right-desktop'|'right-desktop-only'|'right-widescreen'|'right-widescreen-only'|'right-fullhd'} TextAlignment
 * @typedef {'capitalized'|'lowercase'|'uppercase'} TextCase
 * @typedef {'light'|'normal'|'medium'|'semibold'|'bold'|'extrabold'} TextWeight
 * @typedef {'sans-serif'|'monospace'|'primary'|'secondary'|'code'} TextFontFamily
 */

/**
 * @typedef {'block'|'flex'|'inline'|'inline-block'|'inline-flex'|'hidden'|'invisible'|'sr-only'|'block-mobile'|'block-touch'|'block-tablet'|'block-tablet-only'|'block-desktop'|'block-desktop-only'|'block-widescreen'|'block-widescreen-only'|'block-fullhd'|'flex-mobile'|'flex-touch'|'flex-tablet'|'flex-tablet-only'|'flex-desktop'|'flex-desktop-only'|'flex-widescreen'|'flex-widescreen-only'|'flex-fullhd'|'inline-mobile'|'inline-touch'|'inline-tablet'|'inline-tablet-only'|'inline-desktop'|'inline-desktop-only'|'inline-widescreen'|'inline-widescreen-only'|'inline-fullhd'|'inline-block-mobile'|'inline-block-touch'|'inline-block-tablet'|'inline-block-tablet-only'|'inline-block-desktop'|'inline-block-desktop-only'|'inline-block-widescreen'|'inline-block-widescreen-only'|'inline-block-fullhd'|'inline-flex-mobile'|'inline-flex-touch'|'inline-flex-tablet'|'inline-flex-tablet-only'|'inline-flex-desktop'|'inline-flex-desktop-only'|'inline-flex-widescreen'|'inline-flex-widescreen-only'|'inline-flex-fullhd'|'hidden-mobile'|'hidden-touch'|'hidden-tablet'|'hidden-tablet-only'|'hidden-desktop'|'hidden-desktop-only'|'hidden-widescreen'|'hidden-widescreen-only'|'hidden-fullhd'|'invisible-mobile'|'invisible-touch'|'invisible-tablet'|'invisible-tablet-only'|'invisible-desktop'|'invisible-desktop-only'|'invisible-widescreen'|'invisible-widescreen-only'|'invisible-fullhd'|'sr-only-mobile'|'sr-only-touch'|'sr-only-tablet'|'sr-only-tablet-only'|'sr-only-desktop'|'sr-only-desktop-only'|'sr-only-widescreen'|'sr-only-widescreen-only'|'sr-only-fullhd'} Visibility
 * @typedef {'row'|'row-reverse'|'column'|'column-reverse'} FlexDirection
 * @typedef {'nowrap'|'wrap'|'wrap-reverese'} FlexWrap
 * @typedef {'flex-start'|'flex-end'|'center'|'space-between'|'space-around'|'space-evenly'|'start'|'end'|'left'|'right'} FlexJustifyContent
 * @typedef {'flex-start'|'flex-end'|'center'|'space-between'|'space-around'|'space-evenly'|'stretch'|'start'|'end'|'baseline'} FlexAlignContent
 * @typedef {'stretch'|'flex-start'|'flex-end'|'center'|'baseline'|'start'|'end'|'self-start'|'self-end'} FlexAlignItems
 * @typedef {'auto'|'flex-start'|'flex-end'|'center'|'baseline'|'strech'} FlexAlignSelf
 * @typedef {0|1|2|3|4|5} FlexGrowShrink
 */

/**
 * @typedef {object} Text
 * @prop {TextColor} [color]
 * @prop {boolean} [colorInvert]
 * @prop {TextColor} [bgColor]
 * @prop {boolean} [bgColorInvert]
 * @prop {TextSize[]|TextSize} [size]
 * @prop {TextAlignment[]|TextAlignment} [alignment]
 * @prop {TextCase} [case]
 * @prop {boolean} [italic]
 * @prop {bolean} [underlined]
 * @prop {TextWeight} [weight]
 * @prop {TextFontFamily} [font]
 */
/**
 * @typedef {object} Flex
 * @prop {FlexAlignContent} [alignContent]
 * @prop {FlexAlignItems} [alignItems]
 * @prop {FlexAlignSelf} [alignSelf]
 * @prop {FlexDirection} [direction]
 * @prop {FlexGrowShrink} [grow]
 * @prop {FlexGrowShrink} [shrink]
 * @prop {FlexJustifyContent} [justifyContent]
 * @prop {FlexWrap} [wrap]
 */

/**
 * @typedef {"light"|"dark"} Tint
 */

/**
 * @typedef {"small"|"normal"|"medium"|"large"} Size
 */

/**
 * @typedef {"left"|"centered"|"right"} Alignment
 */

/**
 * @typedef {MBExtraHelperAttributes & m.Attributes} MbStandardAttributes
 */

/**
 * @typedef {'mobile'|'touch'|'tablet'|'tablet-only'|'desktop'|'desktop-only'|'widescreen'|'widescreen-only'|'fullhd'} Breakpoint
 */

export default {};
