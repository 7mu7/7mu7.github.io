This is M.U.G.E.N beta release version 9X.08.16
by Elecbyte 1999

Please read this whole document before proceeding.

This is a public beta test version. You may use it to create your
own game, but please take note: we may change specifications
at any time during the beta phase, so anything you make now may
not necessarily work with later versions of M.U.G.E.N.

No complete docs are available yet. Unless you are an official beta
tester, please hold off all bug reports until a public release is
available.

NOTE: We recommend you delete any previous versions of M.U.G.E.N,
      or install in a different directory. Otherwise there will
      be old leftover files in various directories, and that
      might confuse you.
      If you do not want to delete the older versions, here are
      files you do not need anymore:
      data/stage0.def
      graphics/stage0.sff


Updates
-------
Please check updates.txt for updates.


System requirements
-------------------
Minimum: 486 DX2-66
Recommended: Pentium 166

M.U.G.E.N is not set up for maximum performance by default. See
"Speed Issues" (section IV) for information on how to optimize
this program for a slower computer.
Note: We are not sure of the minimum requirements. What is listed
      above is only our guess.
It is hard to calculate memory requirements. 16 MB should suffice,
although 32 MB is probably much safer.



Contents
--------
I.      MUGEN Info
II.     Key Configuration
III.    Running the Game
IV.     Speed Issues
V.      Memory Issues
A.      Thanks
B.      Disclaimer


=====================================================================
I. MUGEN Info
=====================================================================

What MUGEN?
-----------

MUGEN is a 2D fighting game engine, but you probably knew that already.
MUGEN is also an acroymn for something, but we forgot what it is. :)
We created MUGEN not only to make a fighting game, but also to let 
others create their own fighting games.  You can control almost every
aspect of the engine to suit your tastes.  That's the primary goal of
MUGEN.  Since this is a work in progress, there are many things that
it can and cannot do, but here's a short list of some of the things you 
can do with the engine...

- Customizable title screen
- Customizable character select screen (theoretically infinite number of
  characters)
- Characters can have any number of sprites of any size limited by your
  computer's memory
- Up to 12 different color schemes for each character
- Background music can be mp3 or midi files

Game Engine
- Use up to 6 buttons for a character (does any fighting game use more than 6?)
- Regular moves/Special moves/Supers 
- Multiple jumps
- Move cancel/2-in-1 or whatever you want to call it
- Multi-part moves/throws 

How MUGEN?
----------

MUGEN is being developed in C with DJGPP and Allegro.  It is being compiled
with gcc 2.8.1 and linked with Allegro 3.1.

Where MUGEN?
------------

www.elecbyte.com/games

Why MUGEN?
----------

To tell you the truth, we were making a shooting game and all of a sudden
it turned into this.  Although we were making a shooting game in the 
beginning, we noticed that there weren't any good commercial fighting 
games on the PC.

Who MUGEN?
----------

If you want to contact us about something, send an email to games@elecbyte.com.

When MUGEN?
-----------

I don't quite remember when we started this project.



=====================================================================
II. Key Configuration
=====================================================================

This is the default key configuration. You can change it from the
options menu when you run the game.

Button      Player 1      Player 2
------      --------      --------
  Up        Up arrow      Numpad Up
 Down       Down arrow    Numpad Down
 Left       Left arrow    Numpad Left
Right       Right arrow   Numpad Right
  X         L             Numlock 
  Y         semicolon     Numpad slash
  Z         double-quote  Numpad asterisk
  A         comma         Numpad -
  B         period        Numpad +
  C         slash         Numpad Enter

No joystick configured by default.
To enable, edit data/mugen.cfg and change corresponding joystick
types to 2,4 or 6 buttons. Most popular joysticks work in 6 button
mode. Joystick support is not official. It may or may not work
correctly on your system.



=====================================================================
III. Running the Game
=====================================================================

At the prompt, type MUGEN to begin (if in Windows, double-click
MUGEN.EXE)

M.U.G.E.N supports most Sound Blaster-compatible soundcards.
To run this beta release, you will need a VESA 1 or VESA 2 compatible
video card. VGA is NOT supported.



=====================================================================
IV. Speed Issues
=====================================================================

If you find this runs slowly on your machine, there are several
things you can do to improve its performance:

i. Select the most efficient video mode
   Open up data/mugen.cfg. Under the [Video] section, experiment
   with the "Vesamode" option. Try "Linear", "Banked" and "1" to
   see which gives you a better framerate. Using programs such as
   Scitech Display Doctor can sometimes help with the speed too.

ii. Select the correct resolution
   M.U.G.E.N is meant to run under 320x240 in 16-bit colour.
   Anything larger or in a different bit depth may decrease the
   speed.

iii. Turn off stretching
   If you find you cannot run in 320x240, you can choose 640x480
   and keep the "stretch" option off.

iv. Turn off shadows
   You can turn shadows off to speed up drawing. Look in 
   data/mugen.cfg and set the "DrawShadows" option under [Config]
   to 0.

v. Turn off sound or music
   Playing music during the game takes up CPU power. This is true
   especially for MP3s. To turn off the background music, open
   data/mugen.cfg and set "PlayMIDI" and "PlayMP3" to 0.
   To turn off all sounds and music, set "Sound" to 0.

vi. Use frameskip
   Auto-frameskip is enabled by default. The game will not draw
   some frames in case the computer is not fast enough, and this
   helps maintain a constant game speed.
   If you'd like to run at a constant framerate, you can hit Ctrl-F
   repeatedly to adjust the frameskip. It will switch from "auto"
   to "skip none" to "skip 1" to "skip 2" and then back to "auto".
   This works only when you are in the fight screen.

vii. Free up memory
   Memory may be swapped to the hard disk when you run low, and
   this will severely impact performance. See the next section
   on how to free up memory.



=====================================================================
V. Memory Issues
=====================================================================

If you find the program exiting or running slowly because you don't
have enough memory, here are some solutions:

i. Run in DOS
   If you are running Windows, select "Restart in MS-DOS Mode" in
   the "Shut Down" menu. This will free up a good deal of memory.

ii. Reduce the player cache
   M.U.G.E.N will try to keep players in memory in order to reduce
   loading times. You might want to reduce the number of players
   that are kept in memory at any one time.
   Open up data/mugen.cfg and look under the [Misc] section.
   Change PlayerCache to a smaller number. 0 will save you the
   most memory.



=====================================================================
A. Thanks
=====================================================================

DJ Delorie - For DJGPP
Shawn Hargreaves and many others - For Allegro
Tomislav Uzelac and Ove Kaaven - For LibAmp, and its Allegro port
All our beta testers
Everyone who gave feedback to us



=====================================================================
B. Disclaimer
=====================================================================

Elecbyte will not be held liable for any damages to either the user
or the system it is run on, that may occur as a direct or indirect
result of the use of this program.
