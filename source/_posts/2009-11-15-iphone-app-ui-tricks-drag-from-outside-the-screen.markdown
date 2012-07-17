---
layout: post
title: "iPhone App UI Tricks - Drag from outside the Screen"
date: 2009-11-05 01:19
comments: false
categories: [iPhone, Programming, UI]
---

This really isn't a trick, or even a tip. In fact, no additional code was written to get this behavior. However, it is too cool not to show some how and the small pictures on the App Store don't do it justice. By placing a `UIView` (or subclassed view) on the bottom of my main view, messages to `touchesMoved:withEvent:` are made as soon as your finger crosses into the iPhone's screen. Voila!, the illusion of dragging from the outside of the screen.

<!-- more -->

My last app, or rather, [Triple D Design's latest app]("http://tripleddesign.com/iphone-apps.html") "100 Percent" ([which is now available on iTunes]("http://www.itunes.com/apps/100percent")) has this little trick. See the video below.

<iframe src="http://player.vimeo.com/video/7447347" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

I know this is insanely simple, but sometimes, the simplest things are the neat too.


