function pageReady()  {
  document.getElementById('new-task-submit-button').onclick = function(){
    var listText = document.getElementById('list-container').innerHTML;
    var prefix = "<li><div class='list-item-text'>";
    var suffix = "</div><div class='list-item-menu'><input type='submit' value='Delete' /></div></li>";
    listText = prefix + document.getElementById('new-task-input-text').value + suffix + listText;
    document.getElementById('list-container').innerHTML = listText;
  }

}

window.onload = pageReady;
