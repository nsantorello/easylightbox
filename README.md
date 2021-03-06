EasyLightbox
============

EasyLightbox is a lightbox implementation that is braindead simple to integrate and use, and yet still quite powerful.

Features
--------
* Easy to use and integrate
* Ability to create links that will automatically cause the lightbox to show when the page is loaded,  e.g. `mypage.html#mylightbox` opens `mylightbox`
* Lazy loading of content (e.g. images, videos) until the user opens the lightbox
* Escape key closes the lightbox
* Easy to create links that show and hide lightboxes

Installation
------------

1. Copy `easylightbox.js` into your javascripts directory.  
2. Copy `easylightbox.css` into your stylesheets directory.

_Note: EasyLightbox requires jQuery._

Usage
-----
1. Include the EasyLightbox JS and CSS.  Something like this:
```
<head>
    <!-- Be sure to include jQuery! -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

    <script src="/path/to/easylightbox.js"></script>
    <link href="/path/to/easylightbox.css" rel="stylesheet" type="text/css" />
  </head>
```
2. Paste the following near the bottom of your page:
```
<!-- EasyLightbox code -->
<div id="easylightbox-panel">
    <div id="easylightbox-content"></div>
</div>
<div id="easylightbox" class="close-easylightbox"></div>
```
3. Create an EasyLightbox on your page.  Something like this:
```
<div id="myEasyLightbox">
<!--
<div align='center'>
This is your lightbox!  Click anywhere outside of the lightbox to close it (or hit ESC).
<br /><br />
Or <a href="#" class="close-easylightbox">click here</a> to close it.
</div>
-->
</div>
```
_It is important that the content of your lightbox be commented out.  This prevents it from being shown, and also prevents the loading of any content within the lightbox (e.g. images, video, etc.)._
4. Show your lightbox!  (and close it)
```
<a href="#myEasyLightbox" class="show-easylightbox" data-easylightbox="myEasyLightbox">Show lightbox</a>
<a href="#" class="close-easylightbox">Close lightbox</a>
```
The `data-easylightbox` attribute on the link contains the ID of the element containing your commented out lightbox code.  If you like, you can specify the `href` and, if someone copies the address of the page while the lightbox is shown, the link they copy will make the lightbox autoappear on page load. 
5. That's it!

Further notes
-------------

You can also show and hide lightboxes from Javascript.  
* `EasyLightbox.showLightbox("myEasyLightbox")` - show the lightbox with the ID of "myEasyLightbox"
* `EasyLightbox.closeLightbox()` - close the lightbox

#### That's all, folks!  Told you it was easy!
