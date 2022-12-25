# -*- coding: utf-8 -*-
import os
import re
import socket
import subprocess
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

home=os.path.expanduser('~')
mod="mod4" # super key
alt="mod1"
myTerm="alacritty"
# myBrowser="brave"
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
        # Key([mod], "/",
        #      lazy.spawn("thunar"),
        #      desc='file manager'
        #      ),
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
             desc='Keyboard focus to monitor 3'
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
         # Dmenu scripts launched using the key chord SUPER+p followed by 'key'
         KeyChord([mod], "p", [
             Key([], "h",
                 lazy.spawn("dm-hub"),
                 desc='List all dmscripts'
                 ),
             Key([], "a",
                 lazy.spawn("dm-sounds"),
                 desc='Choose ambient sound'
                 ),
             Key([], "b",
                 lazy.spawn("dm-setbg"),
                 desc='Set background'
                 ),
             Key([], "c",
                 lazy.spawn("dtos-colorscheme"),
                 desc='Choose color scheme'
                 ),
             Key([], "e",
                 lazy.spawn("dm-confedit"),
                 desc='Choose a config file to edit'
                 ),
             Key([], "i",
                 lazy.spawn("dm-maim"),
                 desc='Take a screenshot'
                 ),
             Key([], "k",
                 lazy.spawn("dm-kill"),
                 desc='Kill processes '
                 ),
             Key([], "m",
                 lazy.spawn("dm-man"),
                 desc='View manpages'
                 ),
             Key([], "n",
                 lazy.spawn("dm-note"),
                 desc='Store and copy notes'
                 ),
             Key([], "o",
                 lazy.spawn("dm-bookman"),
                 desc='Browser bookmarks'
                 ),
             Key([], "p",
                 lazy.spawn("passmenu -p \"Pass: \""),
                 desc='Logout menu'
                 ),
             Key([], "q",
                 lazy.spawn("dm-logout"),
                 desc='Logout menu'
                 ),
             Key([], "r",
                 lazy.spawn("dm-radio"),
                 desc='Listen to online radio'
                 ),
             Key([], "s",
                 lazy.spawn("dm-websearch"),
                 desc='Search various engines'
                 ),
             Key([], "t",
                 lazy.spawn("dm-translate"),
                 desc='Translate text'
                 )
         ])
]

groups = [Group(f"{i+1}", label="") for i in range(5)]

for i in groups:
    keys.extend([
#CHANGE WORKSPACES
        Key([mod], i.name, lazy.group[i.name].toscreen()),
# MOVE WINDOW TO SELECTED WORKSPACE 1-10 AND FOLLOW MOVED WINDOW TO WORKSPACE
        Key([mod, "shift"], i.name, lazy.window.togroup(i.name) , lazy.group[i.name].toscreen()),
    ])

# LAYOUTS
layout_theme={
    "margin": 15,
    "border_width":1,
    "border_focus": "#ff00ff",
    "border_normal": "#45475A"
}

layouts=[
    layout.MonadTall(**layout_theme),
    layout.MonadWide(**layout_theme),
    layout.Matrix(**layout_theme),
    layout.Bsp(**layout_theme),
    layout.Floating(**layout_theme),
    layout.Columns(**layout_theme),
]

# WIDGETS FOR THE BAR
def init_widgets_defaults():
    return dict(
        font="Satoshi Black",
        fontsize=14,
        padding=3,
    )

widget_defaults=init_widgets_defaults()
extension_defaults=[ widget_defaults.copy()]

colors={
    'night': '#181825',
    'dark': '#322B54',
    'medium': '#5F5399',
    'light': '#7E6EC4',
    'sat': '#CBA6f7',
    'dim': '#796296'
}

roundness=10

def init_widgets():
    widgets=[
        widget.Spacer(
            length=10,
            background=colors["night"],
        ),
        widget.Image(
            filename='~/.config/qtile/assets/logo.png',
            margin=2,
            background=colors["night"],
            decorations=[
                PowerLineDecoration(
                    path='rounded_left',
                    override_colour=colors["night"], 
                    size=roundness
                )
            ],
        ),
        widget.GroupBox(
            fontsize=16,
            borderwidth=1,
            highlight_method='text',
            background=colors["dark"],
            active=colors["dim"],
            inactive=colors["medium"],
            this_current_screen_border=colors["sat"],
            disable_drag=True,
            decorations=[
                PowerLineDecoration(
                    path='rounded_left',
                    override_colour=colors["dark"], 
                    size=roundness
                )
            ],
            ),
        widget.CurrentLayoutIcon(
            background=colors["medium"],
            padding=0,
            scale=0.5,
        ),
        widget.CurrentLayout(
            background=colors["medium"],
            font='Satoshi Bold',
            decorations=[
                PowerLineDecoration(
                    path='rounded_left',
                    override_colour=colors["medium"], 
                    size=roundness
                )
            ],
        ),
        widget.Spacer(
            length=3,
            background=colors["light"],
        ),
        widget.WindowName(
            background=colors["light"],
            format="{name}",
            max_chars=77,
            decorations=[
                PowerLineDecoration(
                    path='rounded_right',
                    override_colour=colors["light"], 
                    size=roundness
                )
            ],
        ),
        widget.TextBox(
            text="",
            font="Font Awesome 6 Free Solid",
            fontsize=13,
            background=colors["night"],
        ),
        widget.Clock(
            background=colors["night"],
            format='%I:%M %p',
            decorations=[
                PowerLineDecoration(
                    path='rounded_left',
                    override_colour=colors["night"], 
                    size=roundness
                )
            ],
        ),
        widget.Spacer(
            background=colors["light"],
            decorations=[
                PowerLineDecoration(
                    path='rounded_right',
                    override_colour=colors["light"], 
                    size=roundness
                )
            ],
        ),
        widget.TextBox(
            text="",
            font="Font Awesome 6 Free Solid",
            fontsize=13,
            background=colors["medium"],
        ),
        widget.Memory(
            measure_mem='G',
            format='{MemUsed: .1f}{mm}',
            background=colors["medium"],
        ),
        widget.Spacer(
            length=10,
            background=colors["medium"],
        ),
        widget.TextBox(
            text="",
            font="Font Awesome 6 Free Solid",
            fontsize=13,
            background=colors["medium"],
        ),
        widget.CheckUpdates(
            background=colors["medium"],
            display_format='{updates}',
            distro='Arch_checkupdates'
        ),
        widget.Spacer(
            length=5,
            background=colors["medium"],
            decorations=[
                PowerLineDecoration(
                    path='rounded_right',
                    override_colour=colors["medium"], 
                    size=roundness
                )
            ],
        ),
        widget.OpenWeather(
            app_key='50dfe3c4af787e95cfb00325885f0019',
            background=colors["dark"],
            cityid=3076586,
            format='{icon}  {main_temp: .1f}°{units_temperature}'
        ),
        widget.Spacer(
            length=10,
            background=colors["dark"],
        ),
        widget.TextBox(
            text="",
            font="Font Awesome 6 Free Solid",
            background=colors["dark"],
        ),
        widget.PulseVolume(
            background=colors["dark"],
        ),
        widget.Spacer(
            length=5,
            background=colors["dark"],
            decorations=[
                PowerLineDecoration(
                    path='rounded_right',
                    override_colour=colors["dark"], 
                    size=roundness
                )
            ],
        ),
        widget.TextBox(
            text="",
            font="Font Awesome 6 Free Solid",
            fontsize=13,
            padding=0,
            background=colors["night"],
        ),
        widget.Clock(
            padding=10,
            background=colors["night"],
            format='%d/%m/%y'
        )
    ]
    return widgets

screen1_widgets=init_widgets()
screen2_widgets=init_widgets()

screens=[
    Screen(top=bar.Bar(widgets=init_widgets(), size=30, opacity=.85, margin=[10, 15, -3, 15])),
    Screen(top=bar.Bar(widgets=init_widgets(), size=30, opacity=.85, margin=[10, 15, -3, 15])),
]

# MOUSE CONFIGURATION
mouse=[
    Drag([mod], "Button1", lazy.window.set_position_floating(),
         start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(),
         start=lazy.window.get_size())
]

dgroups_key_binder=None
dgroups_app_rules=[]
main = None

@hook.subscribe.startup_once
def start_once():
    home=os.path.expanduser('~')
    subprocess.call([home + '/.config/qtile/autostart.sh'])

follow_mouse_focus=True
bring_front_click=False
cursor_warp=False

floating_layout=layout.Floating(
    float_rules=[
        *layout.Floating.default_float_rules,
        Match(wm_class='confirm'),
        Match(wm_class='dialog'),
        Match(wm_class='download'),
        Match(wm_class='error'),
        Match(wm_class='file_progress'),
        Match(wm_class='notification'),
        Match(wm_class='splash'),
        Match(wm_class='toolbar'),
        Match(wm_class='confirmreset'),
        Match(wm_class='makebranch'),
        Match(wm_class='maketag'),
        Match(wm_class='Arandr'),
        Match(wm_class='feh'),
        Match(wm_class='Galculator'),
        Match(title='branchdialog'),
        Match(title='Open File'),
        Match(title='pinentry'),
        Match(wm_class='ssh-askpass'),
        Match(wm_class='lxpolkit'),
        Match(wm_class='yad'),
    ],
    **layout_theme
)

auto_fullscreen = True
auto_minimize = True
focus_on_window_activation = "smart" 

wmname = "LG3D"