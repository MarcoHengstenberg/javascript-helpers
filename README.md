# Javascript Helpers

## My vault for useful scripts

This repository is for keeping track of scripts which are very useful and (most possibly) will be reused by me (or may be you, who's reading this right now) in future projects.

And now for a long list with a few words to each of the little fellas. Okay, it will become a long list at one point in the future.

### Youtube Video Replacement

I found this very helpful script to replace the iframe with youtube-downloading-everything-stuff at [labnol.org](http://www.labnol.org/internet/light-youtube-embeds/27941/).

*"What does it do Rambo?" "It turns blue."*

What it really does though is preventing youtube from downloading the video and the player and all that clutter coming along with it (additional ~400kb and 12 HTTP-Requests) and replacing that with the standard youtube thumbnail image. What can be done on top of that is to remove the "download the thumb from youtube" part and replace that with a background-image via CSS, which you can place on the `.circle` container. But, as always, see for yourself in the JS file which has wonderful comments inside.

### IE 10 fix

Tim Kadlex wrote on his blog about [the problem](http://timkadlec.com/2013/01/windows-phone-8-and-device-width/) with IE on Windows 8 and Mobile IE. As he also put down a fix to the bug I started using it throughout all my recent projects.

What the script is doing is sniffing for the user-agent and when a match is made it will place some style-tag just before the ending head-tag which tells the Mobile IE Browser what to do. While some might say that this is bad practice – user-agent sniffing – yes, it is but in this case the end justifies the means.

### jQuery Toggle Table

This is something Smashing has been using for quite a while now to hide and reveal table contents on click.

### Picturefill & Matchmedia

To know all there is about both of those wonderful Javascript files I'd say you go directly to the creators' repos. Give those guys a nice pat on the back, when you're there, they are awesome.

[Picturefill](https://github.com/scottjehl/picturefill) by Scott Jehl
[MatchMedia](https://github.com/paulirish/matchMedia.js) by Paul Irish
