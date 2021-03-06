CoverflowAltTab
================

CoverflowAltTab is an Alt-Tab replacement available as an extension for [Gnome-Shell](http://www.gnome.org/gnome-3/) and [Cinnamon](http://cinnamon.linuxmint.com/).

It let's you Alt-Tab through your windows in a cover-flow manner.

Originally this was a port of the CoverflowAltTab extension for Gnome-Shell by [palatis](http://code.google.com/p/gnome-shell-extensions-coverflowalttab/), so all credits to him!



![Screenshot](http://www.dmo60.de/CoverflowAltTabScreenshotkleinneu.jpg)




Installation
-------------

#### Gnome-Shell ####

Make sure you are on the appropriate branch for your Gnome-Shell version (3.6 is the default, there is also one for 3.4 and 3.2) and download the extension.

Please note, that only the most recent version of Gnome-Shell has the latest features and improvements (they might work on older versions, but I did not test it!). 

  1. Copy the folder "CoverflowAltTab@dmo60.de" to `~/.local/share/gnome-shell/extensions/`. (Eventually you have to restart Gnome-Shell: Press Alt+F2, type 'r' and enter)
		
  2. Use Gnome-Tweak-Tool (aka Advanced Settings) or [extensions.gnome.org](https://extensions.gnome.org/local/) to enable the extension.
	

#### Cinnamon ####

Switch to branch Cinnamon or head over to [Cinnamon-Spices](http://cinnamon-spices.linuxmint.com/extensions/view/3) to download the extension for Cinnamon. 

  1. Copy the folder "CoverflowAltTab@dmo60.de" to `~/.local/share/cinnamon/extensions/`. (Eventually you have to restart Cinnamon: Press Alt+F2, type 'r' and enter)
	
  2. Enable the extension in Cinnamon Settings. (Eventually you have to restart Cinnamon: Press Alt+F2, type 'r' and enter)
	 



Usage
------

This extension uses the following key bindings (you can change or disable them in your system settings):

  - "Switch applications" (usually **Alt+Tab**): Cycle through all windows from the current workspace
  - "Switch windows of an application" (usually **Ctrl+Tab**): Cycle through all windows from the current application from all workspaces
  - "Switch system controls" (usually **Ctrl+Alt+Tab**): Cycle through all windows from all workspaces (who wants to cycle through system controls anyway?)
    
All of the shortcuts with **Shift** key pressed cycles backward.

  - Hit **Esc** to cancel.
  - Hit **q** to close highlighted window.
  - Hit **d** to hide all windows and show the desktop.

You can also use the **arrow keys** or your **mouse wheel** to cycle through the windows. 




Customization
--------------

Gnome-Shell users can use gnome-shell-extension-prefs tool to set some customization preferences. To do so, go to [extensions.gnome.org](https://extensions.gnome.org/local/) or launch `gnome-shell-extension-prefs` from a terminal.

Make sure you restart Gnome-Shell to apply your changes!