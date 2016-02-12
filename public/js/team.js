// 'use strict';

$(function(){
  var team = JSON.parse(teamJSON);
  console.log(team);
  var teamBox = $('.team-box .team-list');
  renderTeam(team, teamBox);
})

function searchTeamMembers(team, name) {
  return team;
}

function renderTeam(team, teamBox) {
  teamBox.find('li').remove();
  var employees = '';
  team.BiirTeam.Employee.forEach(function(employee) {
    employees += '<li><img src="images/faces/' + employee.image.replace(/\s/g, '-') + '" alt="" /></li>';
  });
  teamBox.html(employees);
}
