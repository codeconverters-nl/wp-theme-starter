var path = require('path');

/**
 * Return the dev-theme root directory
 * Note: May not work as expected if gulp task run
 *       from outside the dev-theme
 *
 * @returns String
 */
module.exports = function getDevThemeRoot() {
	return path.basename(path.resolve('./'));
};
