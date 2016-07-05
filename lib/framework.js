
var toggleClass = function (klass, id) {
  var toggledClass = klass;
  var className = 'task-' + id;
  var classes = document.getElementById('task-' + id).className
  if(classes.includes(toggledClass)){
    classes = classes.replace(' ' + toggledClass, '');
    classes = classes.replace(toggledClass, '');
  } else {
    classes += ' ' + toggledClass;
  }
  document.getElementById('task-' + id).className = classes;
};
