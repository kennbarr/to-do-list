var swapClass = function (class1, class2, id) {
  var className = 'task-' + id;
  var classes = document.getElementById('task-' + id).className
  if(classes.includes(class1)){
    classes = classes.replace(' ' + class1, ' ' + class2);
    classes = classes.replace(class1, class2);
  } else {
    classes = classes.replace(' ' + class2, ' ' + class1);
    classes = classes.replace(class2, class1);
  }
  document.getElementById('task-' + id).className = classes;
};

var hideElements = function (selectedClass)  {
  var elements = document.getElementsByClassName(selectedClass);
  for(var i = 0; i < elements.length; i++) {
    if (!elements[i].className.includes('hidden-task')) {
      elements[i].className += ' hidden-task';
    }
  }
}

var showElements = function (selectedClass)  {
  var elements = document.getElementsByClassName(selectedClass);
  for(var i = 0; i < elements.length; i++) {
    if (elements[i].className.includes('hidden-task')) {
      elements[i].className = elements[i].className.replace(' hidden-task', '');
    }
  }
}
