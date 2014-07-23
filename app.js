//
// app.js
// Ross Phillips - www.rossphillips.co.nz

angular.module('app', ['markdown']).controller('AppCtrl', ['$scope', function($scope) {
	$scope.markdown = '# Speckle\n\n' +
		'A *simple* [Markdown] editor.\n\n' +
		'1. Enter your Markdown text on the **left** side\n' +
		'2. See the HTML output on the **right** side\n\n' +
		'Markdown is a plain text formatting syntax.\n\n' +
		"> The overriding design goal for Markdown's formatting syntax is " +
		'to make it as readable as possible. The idea is that a Markdown-formatted ' +
		'document should be publishable as-is, as plain text, without looking ' +
		"like it's been marked up with tags or formatting instructions.\n" +
		'>\n' +
		'> &ndash; <cite>John Gruber</cite>\n\n' +
		'Speckle was made by [Ross Phillips] with [AngularJS] and [Showdown].\n\n' +
		'## Bonus Section\n\n' +
		'```sh\n' +
		'export EDITOR="vim"\n' +
		"alias ..='cd ..'\n" +
		"alias la='ls -a'\n" +
		"alias ll='ls -al'\n" +
		"alias g='git'\n" +
		'```\n\n' +
		'After that you can `echo yay` all the way.\n\n' +
		'[Ross Phillips]:http://rossphillips.co.nz/\n' +
		'[Markdown]:http://daringfireball.net/projects/markdown/\n' +
		'[AngularJS]:https://angularjs.org/\n' +
		'[Showdown]:https://github.com/coreyti/showdown';
}]);


// From http://stackoverflow.com/questions/14982422/markdown-with-angularjs-directives
angular.module('markdown', ['ngSanitize']).directive('markdown', ['$sanitize', function($sanitize) {
	var converter = new Showdown.converter();

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			scope.$watch(attrs.markdown, function render() {
				var html = converter.makeHtml(scope.$eval(attrs.markdown) || '');
				element.html($sanitize(html));
			});
		}
	};
}]);
