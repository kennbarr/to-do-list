function pageReady()  {

  document.getElementById('new-task-submit-button').onclick = function(){
    var listText = document.getElementById('list-container').innerHTML;
    var count = document.getElementsByClassName('active-task').length +
                document.getElementsByClassName('completed-task').length;
    var prefix = "<li class='active-task' id='task-"+count+"'><div class='list-item-text'>";
    var suffix = "</div><div class='list-item-menu'><input type='submit' value='Completed' class='completed-task-button' id='task-button-"+count+"'/></div></li>";
    listText = prefix + document.getElementById('new-task-input-text').value + suffix + listText;
    document.getElementById('list-container').innerHTML = listText;
    completedListener();
  }

  document.getElementById('filter-button-outstanding').onclick = function () {
    hideElements('completed-task');
    showElements('active-task');
  }

  document.getElementById('filter-button-completed').onclick = function () {
    hideElements('active-task');
    showElements('completed-task');
  }

  document.getElementById('filter-button-all').onclick = function () {
    showElements('active-task');
    showElements('completed-task');
  }

  var completedListener = function () {
    var elements = document.getElementsByClassName('completed-task-button');
    for(var i = 0; i < elements.length; i++) {
      elements[i].onclick = function(){
        swapClass('completed-task', 'active-task', this.id.split('-').pop());
        this.disabled = 'disabled';
      };
    }
  };

}

window.onload = pageReady;
