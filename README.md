# Javascript Helpers

## My vault for useful scripts

This repository is for keeping track of scripts which are very useful and (most possibly) will be reused by me (or may be you, who's reading this right now) in future projects.

And now for a long list with a few words to each of the little fellas. Okay, it will become a long list at one point in the future.

### Youtube Video Replacement

I found this very helpful script to replace the iframe with youtube-downloading-everything-stuff at [labnol.org](http://www.labnol.org/internet/light-youtube-embeds/27941/).

*"What does it do Rambo?" "It turns blue."*

What it really does though is preventing youtube from downloading the video and the player and all that clutter coming along with it (additional ~400kb and 12 HTTP-Requests) and replacing that with the standard youtube thumbnail image. What can be done on top of that is to remove the "download the thumb from youtube" part and replace that with a background-image via CSS, which you can place on the `.circle` container. But, as always, see for yourself in the JS file.