var getDevThemeRoot = require('../utils/getDevThemeRoot');
var themeSrc = require('../config/common').paths.theme.src;

module.exports = [
    '\n\n\n',
    '/**',
    ' * DEVELOPMENT MODE ONLY',
    ' *',
    ' * Change the ACF location for saving config files',
    ' * (https://www.advancedcustomfields.com/resources/local-json)',
    ' *',
    ' * Run "gulp build" to generate the theme',
    ' * for production before deploying!',
    ' *',
    ' */',
    'if ( class_exists( \'acf\' ) ) {',
    '\tadd_filter( \'acf/settings/save_json\', function () {',
    '\t\treturn get_theme_root()',
    '\t\t\t. DIRECTORY_SEPARATOR . \'' + getDevThemeRoot() + '\'',
    '\t\t\t. DIRECTORY_SEPARATOR . \'' + themeSrc + '\'',
    '\t\t\t. DIRECTORY_SEPARATOR . \'acf-json\';',
    '\t} );',
    '}',
    ''
].join('\n');
