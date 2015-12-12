angular.module('mpd.objectBlock', ['ui.sortable',
																	 'ui.slimscroll',
																	 'mpd.input'])
.directive('mpdObjectBlock', function(){
	var objectBlock = '<div slimscroll="{height: \'auto\', wheelStep: 10}" class="object-blocks flex-item" style="padding-right: 10px;">\
											<ul ui-sortable class="list-unstyled" ng-model="list.data">\
												<li class="object-block max-width" ng-repeat="object in list.data | limitTo:200" ng-controller="objectBlockCtrl">\
													<div class="object-block-header gray-gradient" style="overflow: visible">\
														<div class="handle" title="Reorder {{object.ObjectName}}"><span class="ui-icon ui-icon-carat-2-n-s black-text"></span></div>\
														<input type="checkbox" class="select-object">\
														<div class="complete-box" title="Mark \"{{Object.ObjectName}}\" complete"><i class="fa fa-check fa-lg"></i></div>\
														<div class="object-name name">\
															<span ng-click="toggleEdit(); focusInput=true;" ng-hide="editOn">{{object.ObjectName}}</span>\
															<input class="object-edit" ng-show="editOn" focus-me="focusInput" ng-blur="toggleEdit()" type="text" ng-model="object.ObjectName">\
														</div>\
														<div class="block-icon">\
															<i class="fa fa-arrow-circle-o-down fa-lg"></i>\
															<i class="fa fa-globe fa-lg"></i>\
															<i class="fa fa-times fa-lg"></i>\
															<i class="fa fa-plus fa-lg"></i>\
															<i class="fa fa-info-circle fa-lg"></i>\
															<i class="fa fa-chain fa-lg"></i>\
															<i class="fa fa-search fa-lg"></i>\
														</div>\
													</div>\
												</li>\
											</ul>\
										</div>';
	
		return {
			restrict:	'E',
			template:	objectBlock,
			replace:	true,
			scope:		{
				tags:			'=',
				list:			'='
			},
			controller: function($scope) {
				$scope.sortableOptions = {
					containment: 'parent',
					handle: ".handle",
					opacity: 0.5,
					helper: "clone"
				}
			}
		};
})
.controller('objectBlockCtrl', function($scope) {
	$scope.editOn = false;
	$scope.toggleEdit = function() {
		$scope.editOn = !$scope.editOn;
	}
});