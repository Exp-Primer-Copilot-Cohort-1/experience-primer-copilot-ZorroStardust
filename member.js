function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/member.html',
    scope: {
      member: '='
    },
    link: function(scope, element, attrs) {
      scope.skills = scope.member.skills;
    }
  };
}