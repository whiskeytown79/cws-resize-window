// Some default size and position info
var DEFAULT_HEIGHT = 1350;
var DEFAULT_WIDTH = 1600;
var DEFAULT_TOP = 40;
var DEFAULT_LEFT = 400;

function resize_window(win, height, width) {
    chrome.windows.update(win.id, {"height":height, "width":width });
}

function move_window(win, top, left) {
    chrome.windows.update(win.id, {"top":top, "left":left });
}

function do_resize() {
    chrome.storage.sync.get({
		storedHeight: DEFAULT_HEIGHT,
		storedWidth: DEFAULT_WIDTH,
		storedTop: DEFAULT_TOP,
		storedLeft: DEFAULT_LEFT
    }, function(items) {
	    width = items.storedWidth;
		height = items.storedHeight;
		top = items.storedTop;
		left = items.storedLeft;
		chrome.windows.getCurrent(function(win){
		    resize_window(win, items.storedHeight, items.storedWidth);
			move_window(win, items.storedTop, items.storedLeft);
        });
    });
}

chrome.action.onClicked.addListener(do_resize);
