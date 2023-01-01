from typing import List  # noqa: F401

from libqtile.dgroups import simple_key_binder
from libqtile.utils import guess_terminal

import hooks  # noqa: F401
from groups import groups
from keys import init_key_bindings
from layouts import floating_layout, layouts  # noqa: F401
from mouse import init_mouse
from screens import init_screens
from top_bar import init_top_bar, topbar_second
# from wayland import wl_input_rules  # noqa: F401
from widgets import extension_defaults, widget_defaults  # noqa: F401

# Initialising mod key, terminals and other variables
mod = "mod"
terminal = guess_terminal()
file_manager = "thunar"
launcher = "rofi -show drun"  # ulauncher-toggle

# Initialising keys, mouse and screens
keys = init_key_bindings(mod, terminal, file_manager, groups, launcher)
mouse = init_mouse(mod)
topbar = init_top_bar()
screens = init_screens(topbar, topbar_second)


# Other variables
dgroups_key_binder = simple_key_binder(mod)
dgroups_key_binder = None
dgroups_app_rules = []  # type: List
follow_mouse_focus = True
bring_front_click = False
cursor_warp = False
auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True
auto_minimize = True
wmname = "LG3D"
