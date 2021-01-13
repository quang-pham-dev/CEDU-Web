export const variables = {
  // ==========================================================================
  // Materialize variables
  // ==========================================================================
  //
  // Table of Contents:
  //
  //  1. Colors
  //  2. Badges
  //  3. Buttons
  //  4. Cards
  //  5. Collapsible
  //  6. Chips
  //  7. Date Picker
  //  8. Dropdown
  //  10. Forms
  //  11. Global
  //  12. Grid
  //  13. Navigation Bar
  //  14. Side Navigation
  //  15. Photo Slider
  //  16. Spinners | Loaders
  //  17. Tabs
  //  18. Tables
  //  19. Toasts
  //  20. Typography
  //  21. Footer
  //  22. Flow Text
  //  23. Collections
  //  24. Progress Bar

  // 1. Colors
  // ==========================================================================

  // $primaryColor: color("materializeRed", "lighten-2"),
  $primaryColor: '#0097a7',
  $primaryColorLight: 'lighten($primaryColor, 15%)',
  $primaryColorDark: 'darken($primaryColor, 15%)',

  // $secondaryColor: color("teal", "lighten-1"),
  $secondaryColor: '#3498db',
  $successColor: 'color("green", "base")',
  $errorColor: 'color("red", "base")',
  $linkColor: 'color("lightBlue", "darken-1")',

  // 2. Badges
  // ==========================================================================

  $badgeBgColor: '$secondaryColor',
  $badgeHeight: '22px',

  // 3. Buttons
  // ==========================================================================

  // Shared styles
  $buttonBorder: 'none',
  $buttonBackgroundFocus: 'lighten($secondaryColor, 4%)',
  $buttonFontSize: '1rem',
  $buttonIconFontSize: '1.3rem',
  $buttonHeight: '36px',
  $buttonPadding: '0 2rem',
  $buttonRadius: '2px',

  // Disabled styles
  $buttonDisabledBackground: '#DFDFDF',
  $buttonDisabledColor: '#9F9F9F',

  // Raised buttons
  $buttonRaisedBackground: '$secondaryColor',
  $buttonRaisedBackgroundHover: 'lighten($buttonRaisedBackground, 5%)',
  $buttonRaisedColor: '#fff',

  // Large buttons
  $buttonLargeIconFontSize: '1.6rem',
  $buttonLargeHeight: '$buttonHeight * 1.5',

  // Flat buttons
  $buttonFlatColor: '#343434',
  $buttonFlatDisabledColor: 'lighten(#999, 10%)',

  // Floating buttons
  $buttonFloatingBackground: '$secondaryColor',
  $buttonFloatingBackgroundHover: '$buttonFloatingBackground',
  $buttonFloatingColor: '#fff',
  $buttonFloatingSize: '40px',
  $buttonFloatingLargeSize: '56px',
  $buttonFloatingRadius: '50%',

  // 4. Cards
  // ==========================================================================

  $cardPadding: '24px',
  $cardBgColor: '#fff',
  $cardLinkColor: 'color("orange", "accent-2")',
  $cardLinkColorLight: 'lighten($cardLinkColor, 20%)',

  // 5. Collapsible
  // ==========================================================================

  $collapsibleHeight: '3rem',
  $collapsibleLineHeight: '$collapsibleHeight',
  $collapsibleHeaderColor: '#fff',
  $collapsibleBorderColor: '#ddd',

  // 6. Chips
  // ==========================================================================

  $chipBgColor: '#e4e4e4',
  $chipBorderColor: '#9e9e9e',
  $chipSelectedColor: '#26a69a',
  $chipMargin: '5px',

  // 7. Date Picker
  // ==========================================================================

  $datepickerWeekdayBg: 'darken($secondaryColor, 7%)',
  $datepickerDateBg: '$secondaryColor',
  $datepickerYear: 'rgba(255, 255, 255, .4)',
  $datepickerFocus: 'rgba(0,0,0, .05)',
  $datepickerSelected: '$secondaryColor',
  $datepickerSelectedOutfocus:
    'desaturate(lighten($secondaryColor, 35%), 15%)',

  // 8. Dropdown
  // ==========================================================================

  $dropdownBgColor: '#fff',
  $dropdownHoverBgColor: '#eee',
  $dropdownColor: '$secondaryColor',
  $dropdownItemHeight: '50px',

  // 9. Fonts
  // ==========================================================================

  $robotoFontPath: '"../fonts/roboto/"',

  // 10. Forms
  // ==========================================================================

  // Text Inputs + Textarea
  $inputHeight: '3rem',
  $inputBorderColor: 'color("grey", "base")',
  $inputBorder: '1px solid $inputBorderColor',
  $inputBackground: '#fff',
  $inputErrorColor: '$errorColor',
  $inputSuccessColor: '$successColor',
  $inputFocusColor: '$secondaryColor',
  $inputFontSize: '1rem',
  $inputMarginBottom: '20px',
  $inputMargin: '0 0 $inputMarginBottom 0',
  $inputPadding: '0',
  $inputTransition: 'all .3s',
  $labelFontSize: '.8rem',
  $inputDisabledColor: 'rgba(0,0,0, .26)',
  $inputDisabledSolidColor: '#BDBDBD',
  $inputDisabledBorder: '1px dotted $inputDisabledColor',
  $inputInvalidBorder: '1px solid $inputErrorColor',
  $placeholderTextColor: 'lighten($inputBorderColor, 20%)',

  // Radio Buttons
  $radioFillColor: '$secondaryColor',
  $radioEmptyColor: '#5a5a5a',
  $radioBorder: '2px solid $radioFillColor',

  // Range
  $rangeHeight: '14px',
  $rangeWidth: '14px',
  $trackHeight: '3px',

  // Select
  $selectBorder: '1px solid #f2f2f2',
  $selectBackground: 'rgba(255, 255, 255, 0.90)',
  $selectFocus: '1px solid lighten($secondaryColor, 47%)',
  $selectPadding: '5px',
  $selectRadius: '2px',
  $selectDisabledColor: 'rgba(0,0,0,.3)',

  // Switches
  $switchBgColor: '$secondaryColor',
  $switchCheckedLeverBg:
    'desaturate(lighten($secondaryColor, 25%), 25%)',
  $switchUncheckedBg: '#F1F1F1',
  $switchUncheckedLeverBg: '#818181',
  $switchRadius: '15px',

  // 11. Global
  // ==========================================================================

  // Media Query Ranges
  $smallScreenUp: '601px',
  $mediumScreenUp: '993px',
  $largeScreenUp: '1201px',
  $smallScreen: '600px',
  $mediumScreen: '992px',
  $largeScreen: '1200px',

  $mediumAndUp: '"only screen and (minWidth : #{$smallScreenUp})"',
  $largeAndUp: '"only screen and (minWidth : #{$mediumScreenUp})"',
  $extraLargeAndUp: '"only screen and (minWidth : #{$largeScreenUp})"',
  $smallAndDown: '"only screen and (maxWidth : #{$smallScreen})"',
  $mediumAndDown: '"only screen and (maxWidth : #{$mediumScreen})"',
  $mediumOnly:
    '"only screen and (minWidth : #{$smallScreenUp}) and (maxWidth : #{$mediumScreen})"',

  // 12. Grid
  // ==========================================================================

  $numCols: '12',
  $gutterWidth: '1.5rem',
  $elementTopMargin: '$gutterWidth/3',
  $elementBottomMargin: '($gutterWidth*2)/3',

  // 13. Navigation Bar
  // ==========================================================================

  $navbarHeight: '64px',
  $navbarLineHeight: '$navbarHeight',
  $navbarHeightMobile: '56px',
  $navbarLineHeightMobile: '$navbarHeightMobile',
  $navbarFontSize: '1rem',
  $navbarFontColor: '#fff',
  $navbarBrandFontSize: '2.1rem',

  // 14. Side Navigation
  // ==========================================================================

  $sidenavFontSize: '14px',
  $sidenavFontColor: 'rgba(0,0,0,.87)',
  $sidenavBgColor: '#fff',
  $sidenavPadding: '16px',
  $sidenavItemHeight: '48px',
  $sidenavLineHeight: '$sidenavItemHeight',

  // 15. Photo Slider
  // ==========================================================================

  $sliderBgColor: "color('grey', 'base')",
  $sliderBgColorLight: "color('grey', 'lighten-2')",
  $sliderIndicatorColor: "color('green', 'base')",

  // 16. Spinners | Loaders
  // ==========================================================================

  $spinnerDefaultColor: '$secondaryColor',

  // 17. Tabs
  // ==========================================================================

  $tabsUnderlineColor: '$primaryColorLight',
  $tabsTextColor: '$primaryColor',
  $tabsBgColor: '#fff',

  // 18. Tables
  // ==========================================================================

  $tableBorderColor: '#d0d0d0',
  $tableStripedColor: '#f2f2f2',

  // 19. Toasts
  // ==========================================================================

  $toastHeight: '48px',
  $toastColor: '#323232',
  $toastTextColor: '#fff',

  // 20. Typography
  // ==========================================================================

  $offBlack: 'rgba(0, 0, 0, 0.87)',
  // Header Styles
  $h1Fontsize: '4.2rem',
  $h2Fontsize: '3.56rem',
  $h3Fontsize: '2.92rem',
  $h4Fontsize: '2.28rem',
  $h5Fontsize: '1.64rem',
  $h6Fontsize: '1rem',

  // 21. Footer
  // ==========================================================================

  $footerBgColor: '$primaryColor',

  // 22. Flow Text
  // ==========================================================================

  $range: '$largeScreen - $smallScreen',
  $intervals: '20',
  $intervalSize: '$range / $intervals',

  // 23. Collections
  // ==========================================================================

  $collectionBorderColor: '#e0e0e0',
  $collectionBgColor: '#fff',
  $collectionActiveBgColor: '$secondaryColor',
  $collectionActiveColor: 'lighten($secondaryColor, 55%)',
  $collectionHoverBgColor: '#ddd',
  $collectionLinkColor: '$secondaryColor',
  $collectionLineHeight: '1.5rem',

  // 24. Progress Bar
  // ==========================================================================

  $progressBarColor: '$secondaryColor',

  // 25. Breadcrumb
  // ==========================================================================

  $navBreadcrumbHeight: '40px',
  $navBreadcrumbFontsize: '16px',
  $navBreadcrumbColor: '#039be5',
};

export default variables;