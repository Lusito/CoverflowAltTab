/* CoverflowAltTab
 *
 * Preferences dialog for gnome-shell-extensions-prefs tool
 */

const Gtk = imports.gi.Gtk;

const CoverflowAltTab = imports.misc.extensionUtils.getCurrentExtension();
const Lib = CoverflowAltTab.imports.lib;

const SCHEMA = "org.gnome.shell.extensions.coverflowalttab";

let settings;

function init() {
	settings = Lib.getSettings(SCHEMA);
}

function buildPrefsWidget() {
	let frame = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL, border_width: 10 });
	
	let panel_switch = buildSwitcher("hide-panel", "Hide panel during Coverflow");
	frame.add(panel_switch);
	
	let time_range = buildRange("animation-time", [100, 400, 10, 250], "Animation speed (smaller means faster)");
	frame.add(time_range);
	
	let dim_range = buildRange("dim-factor", [0, 10, 1, 4], "Background dim-factor (smaller means darker)");
	frame.add(dim_range);
	
	frame.show_all();
	
	return frame;
}

function buildSwitcher(key, labeltext, tooltip) {
	let hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL });
	
    let label = new Gtk.Label({label: labeltext, xalign: 0 });

    let switcher = new Gtk.Switch({active: settings.get_boolean(key)});
    
    switcher.connect('notify::active', function(widget) {
        settings.set_boolean(key, widget.active);
    });
    
    hbox.pack_start(label, true, true, 0);
    hbox.add(switcher);
    
    return hbox;
}

function buildRange(key, values, labeltext, tooltip) {
	let [min, max, step, defv] = values;
    let hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL });
	
    let label = new Gtk.Label({label: labeltext, xalign: 0 });
    
    let range = Gtk.HScale.new_with_range(min, max, step);
	range.set_value(settings.get_int(key));
	range.set_draw_value(false);
	range.add_mark(defv, Gtk.PositionType.BOTTOM, null);
	range.set_size_request(200, -1);
	
	range.connect('value-changed', function(slider) {
	    settings.set_int(key, slider.get_value());
	});
    
    hbox.pack_start(label, true, true, 0);
    hbox.add(range);
    
    return hbox;
};