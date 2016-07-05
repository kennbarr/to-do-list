function pageReady()  {
  document.getElementById('new-task-submit-button').onclick = function(){
    var listText = document.getElementById('list-container').innerHTML;
    var count = document.getElementsByClassName('task').length;
    var prefix = "<li class='task' id='task-"+count+"'><div class='list-item-text'>";
    var suffix = "</div><div class='list-item-menu'><input type='submit' value='Completed' class='completed-task-button' id='task-button-"+count+"'/></div></li>";
    listText = prefix + document.getElementById('new-task-input-text').value + suffix + listText;
    document.getElementById('list-container').innerHTML = listText;
    completedListener();
  }
  var completedListener = function () {
    var elements = document.getElementsByClassName('completed-task-button');
    for(var i = 0; i < elements.length; i++) {
      elements[i].onclick = function(){
        var toggledClass = 'completed-task'
        var id = this.id.split('-').pop();
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
    }
  };
}

window.onload = pageReady;
