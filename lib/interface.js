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
        var id = this.id.split('-').pop();
        var className = 'task-' + id;
        document.getElementById('task-' + id).className += " completed-task";
      };
    }
  };
}

window.onload = pageReady;
