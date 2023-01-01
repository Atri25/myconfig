# -*- coding: utf-8 -*-
import os
import re
import socket
import subprocess
import os
import subprocess

from colors import colors
from screens import screens
from libqtile import qtile
from libqtile.config import Click, Drag, Group, KeyChord, Key, Match, Screen
from libqtile.command import lazy
from libqtile import layout, bar, widget, hook
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal
from typing import List  # noqa: F401

from qtile_extras import widget
from qtile_extras.widget.decorations import BorderDecoration
import os
import subprocess
from libqtile import layout, bar, widget, hook 
from libqtile.config import Drag, Group, Key, Match, Screen
from libqtile.command import lazy
from qtile_extras import widget
from qtile_extras.widget.decorations import PowerLineDecoration

from libqtile import extension
from libqtile.command import lazy
from libqtile import layout, bar, widget, hook
from libqtile.lazy import lazy
# from libqtile import qtile
# from typing import List  # noqa: F401
from custom.bsp import Bsp as CustomBsp
from custom.bsp import Bsp as CustomBspMargins
from custom.zoomy import Zoomy as CustomZoomy
# from custom.stack import Stack as CustomStack
# from custom.windowname import WindowName as CustomWindowName

home=os.path.expanduser('~')
mod="mod4" # super key
alt="mod1"
myTerm="alacritty"
myIDE="code"
myBrowser = "firefox" # My browser of choice

keys = [
         ### The essentials
         Key([mod], "Return",
             lazy.spawn(myTerm),
             desc='Launches My Terminal'
             ),
         Key([mod, "shift"], "Return",
             lazy.spawn("rofi -show drun"),
             desc='Run Launcher'
             ),
         Key([mod], "b",
             lazy.spawn(myBrowser),
             desc='browser'
             ),
        #  Key([mod,"shift"], "/",
        #       lazy.spawn("thunar"),
        #       desc='file manager'
        #       ),
         Key([mod], "Tab",
             lazy.next_layout(),
             desc='Toggle through layouts'
             ),
         Key([mod, "shift"], "c",
             lazy.window.kill(),
             desc='Kill active window'
             ),
         Key([mod, "control"], "r",
             lazy.restart(),
             desc='Restart Qtile'
             ),
         Key([mod, "shift"], "q",
             lazy.shutdown(),
             desc='Shutdown Qtile'
             ),
         Key(["control", "shift"], "e",
             lazy.spawn("emacsclient -c -a emacs"),
             desc='Doom Emacs'
             ),
         ### Switch focus to specific monitor (out of three)
         Key([mod], "w",
             lazy.to_screen(0),
             desc='Keyboard focus to monitor 1'
             ),
         Key([mod], "e",
             lazy.to_screen(1),
             desc='Keyboard focus to monitor 2'
             ),
         Key([mod], "r",
             lazy.to_screen(2),
             desc='Keyboard focus to monitor '
             ),
         ### Switch focus of monitors
         Key([mod], "period",
             lazy.next_screen(),
             desc='Move focus to next monitor'
             ),
         Key([mod], "comma",
             lazy.prev_screen(),
             desc='Move focus to prev monitor'
             ),
         ### Treetab controls
          Key([mod, "shift"], "h",
             lazy.layout.move_left(),
             desc='Move up a section in treetab'
             ),
         Key([mod, "shift"], "l",
             lazy.layout.move_right(),
             desc='Move down a section in treetab'
             ),
         ### Window controls
         Key([mod], "j",
             lazy.layout.down(),
             desc='Move focus down in current stack pane'
             ),
         Key([mod], "k",
             lazy.layout.up(),
             desc='Move focus up in current stack pane'
             ),
         Key([mod, "shift"], "j",
             lazy.layout.shuffle_down(),
             lazy.layout.section_down(),
             desc='Move windows down in current stack'
             ),
         Key([mod, "shift"], "k",
             lazy.layout.shuffle_up(),
             lazy.layout.section_up(),
             desc='Move windows up in current stack'
             ),
         Key([mod], "h",
             lazy.layout.shrink(),
             lazy.layout.decrease_nmaster(),
             desc='Shrink window (MonadTall), decrease number in master pane (Tile)'
             ),
         Key([mod], "l",
             lazy.layout.grow(),
             lazy.layout.increase_nmaster(),
             desc='Expand window (MonadTall), increase number in master pane (Tile)'
             ),
         Key([mod], "n",
             lazy.layout.normalize(),
             desc='normalize window size ratios'
             ),
         Key([mod], "m",
             lazy.layout.maximize(),
             desc='toggle window between minimum and maximum sizes'
             ),
         Key([mod, "shift"], "f",
             lazy.window.toggle_floating(),
             desc='toggle floating'
             ),
         Key([mod], "f",
             lazy.window.toggle_fullscreen(),
             desc='toggle fullscreen'
             ),
         ### Stack controls
         Key([mod, "shift"], "Tab",
             lazy.layout.rotate(),
             lazy.layout.flip(),
             desc='Switch which side main pane occupies (XmonadTall)'
             ),
          Key([mod], "space",
             lazy.layout.next(),
             desc='Switch window focus to other pane(s) of stack'
             ),
         Key([mod, "shift"], "space",
             lazy.layout.toggle_split(),
             desc='Toggle between split and unsplit sides of stack'
             ),
         # Emacs programs launched using the key chord CTRL+e followed by 'key'
         KeyChord([mod],"e", [
             Key([], "e",
                 lazy.spawn("emacsclient -c -a 'emacs'"),
                 desc='Emacsclient Dashboard'
                 ),
             Key([], "a",
                 lazy.spawn("emacsclient -c -a 'emacs' --eval '(emms)' --eval '(emms-play-directory-tree \"~/Music/\")'"),
                 desc='Emacsclient EMMS (music)'
                 ),
             Key([], "b",
                 lazy.spawn("emacsclient -c -a 'emacs' --eval '(ibuffer)'"),
                 desc='Emacsclient Ibuffer'
                 ),
             Key([], "d",
                 lazy.spawn("emacsclient -c -a 'emacs' --eval '(dired nil)'"),
                 desc='Emacsclient Dired'
                 ),
             Key([], "i",
                 lazy.spawn("emacsclient -c -a 'emacs' --eval '(erc)'"),
                 desc='Emacsclient ERC (IRC)'
                 ),
             Key([], "n",
                 lazy.spawn("emacsclient -c -a 'emacs' --eval '(elfeed)'"),
                 desc='Emacsclient Elfeed (RSS)'
                 ),
             Key([], "s",
                 lazy.spawn("emacsclient -c -a 'emacs' --eval '(eshell)'"),
                 desc='Emacsclient Eshell'
                 ),
             Key([], "v",
                 lazy.spawn("emacsclient -c -a 'emacs' --eval '(+vterm/here nil)'"),
                 desc='Emacsclient Vterm'
                 ),
             Key([], "w",
                 lazy.spawn("emacsclient -c -a 'emacs' --eval '(doom/window-maximize-buffer(eww \"distro.tube\"))'"),
                 desc='Emacsclient EWW Browser'
                 )
         ]),
        ]
# Command to find out wm_class of window: xprop | grep WM_CLASS
workspaces = [
    {
        "name": "1",
        "key": "1",
        "label": "",
        "layout": "bsp",
        "matches": [
            Match(wm_class=""),
        ],
        "spawn": ["librewolf"],
    },
    {
        "name": "2",
        "key": "2",
        "label": "",
        "layout": "bsp",
        "matches": [
            Match(wm_class="signal-desktop"),
            Match(wm_class="lightcord"),
        ],
        "spawn": ["signal-desktop"],
    },
    {
        "name": "3",
        "key": "3",
        "label": "",
        "layout": "bsp",
        "matches": [
            Match(wm_class=""),
        ],
        "spawn": [],
    },
    {
        "name": "4",
        "key": "4",
        "label": "",
        "layout": "monadwide-audio",
        "matches": [
            Match(wm_class="spotify")
        ],
        "spawn": ["spotify"],
    },
    {
        "name": "5",
        "key": "5",
        "label": "",
        "layout": "bsp",
        "matches": [
            Match(wm_class="qbittorrent")
        ],
        "spawn": [],
    },
    {
        "name": "6",
        "key": "6",
        "label": "",
        "layout": "zoomy",
        "matches": [
            Match(wm_class="VirtualBox Manager"),
            Match(wm_class="VirtualBox Machine"),
            Match(wm_class="rawtherapee"),
            Match(wm_class="gimp"),
        ],
        "spawn": [],
    },
]

groups = []
for workspace in workspaces:
    matches = workspace["matches"] if "matches" in workspace else None
    groups.append(
        Group(
            workspace["name"],
            matches=matches,
            layout=workspace["layout"],
            spawn=workspace["spawn"],
            label=workspace["label"],
        )
    )
    keys.append(
        Key(
            [mod],
            workspace["key"],
            lazy.group[workspace["name"]].toscreen(),
            desc="Focus certain workspace",
        )
    )
    keys.append(
        Key(
            [mod, "shift"],
            workspace["key"],
            lazy.window.togroup(workspace["name"]),
            desc="Move focused window to another workspace",
        )
    )

layout_theme = {
    "border_width": 3,
    "margin": 5,
    "border_focus": "3b4252",
    "border_normal": "3b4252",
    "font": "FiraCode Nerd Font",
    "grow_amount": 4,
}

layout_theme_margins = {
    "name": "bsp-margins",
    "border_width": 3,
    "margin": [150, 300, 150, 300],
    "border_focus": "3b4252",
    "border_normal": "3b4252",
    "font": "FiraCode Nerd Font",
    "grow_amount": 4,
}

layout_audio = {
    "name": "monadwide-audio",
    "border_width": 3,
    "margin": 100,
    "border_focus": "3b4252",
    "border_normal": "3b4252",
    "font": "FiraCode Nerd Font",
    "ratio": 0.65,
    "new_client_position": "after_current",
}

layouts = [
    layout.MonadWide(**layout_audio),
    # layout.Bsp(**layout_theme, fair=False),
    CustomBsp(**layout_theme, fair=False),
    # layout.Columns(
    #    **layout_theme,
    #    border_on_single=True,
    #    num_columns=3,
    #    # border_focus_stack=colors[2],
    #    # border_normal_stack=colors[2],
    #    split=False,
    # ),
    layout.RatioTile(**layout_theme),
    # layout.VerticalTile(**layout_theme),
    # layout.Matrix(**layout_theme, columns=3),
    CustomZoomy(**layout_theme),
    # layout.Slice(**layout_theme),
    # layout.TreeTab(
    #    **layout_theme,
    #    active_bg=colors[14],
    #    active_fg=colors[1],
    #    bg_color=colors[0],
    #    fontsize=16,
    #    inactive_bg=colors[0],
    #    inactive_fg=colors[1],
    #    sections=["TreeTab", "TreeTab2"],
    #    section_fontsize=18,
    #    section_fg=colors[1],
    # ),
    # layout.MonadTall(**layout_theme),
    # layout.Max(**layout_theme),
    # layout.Tile(shift_windows=True, **layout_theme),
    #layout.Floating(**layout_theme),
    #CustomBspMargins(**layout_theme_margins),
]

# Setup bar

widget_defaults = dict(
    font="JetBrainsMono Nerd Font Mono Medium", fontsize=18, padding=3, background=colors[0]
)
extension_defaults = widget_defaults.copy()


# Drag floating layouts.
mouse = [
    Drag(
        [mod],
        "Button1",
        lazy.window.set_position_floating(),
        start=lazy.window.get_position(),
    ),
    Drag(
        [mod], "Button3", lazy.window.set_size_floating(), start=lazy.window.get_size()
    ),
    Click([mod], "Button2", lazy.window.bring_to_front()),
]

dgroups_key_binder = None
dgroups_app_rules = []  # type: List
main = None  # WARNING: this is deprecated and will be removed soon
follow_mouse_focus = True
bring_front_click = "floating_only"
cursor_warp = False
auto_fullscreen = True
focus_on_window_activation = "focus"


# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, GitHub issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
# We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in
# java that happens to be on java's whitelist.
wmname = "LG3D"