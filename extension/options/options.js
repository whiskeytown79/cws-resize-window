var STATUS_MSG_DURATION_MS = 750;

// Saves options to chrome.storage
function save_options() {
  chrome.windows.getCurrent(function(win) {
  chrome.storage.sync.set({
	    storedWidth : win.width,
		storedHeight : win.height,
		storedTop : win.top,
		storedLeft : win.left
	}, function() {
	    var status = document.getElementById('status');
	    status.textContent = "Options saved.";
	    setTimeout(function() {
            status.textContent = '';
        }, STATUS_MSG_DURATION_MS);
	});
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  /* Not needed */
  // Use default value color = 'red' and likesColor = true.
  /*
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
  */
}
//document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);