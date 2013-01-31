---
layout: post
title: "Controlling warnings via pragmas"
date: 2013-01-30 23:44
comments: true
categories: [Cocoa, Objective-C, Programming]
---

I've grown to hate warnings in my Xcode projects. Originally they didn't bug me too much and I'd even use the `#warning` preprocessor directive to note TODO items. Not any more. I go out of my way to clean up warnings. I want problems to be the only thing that shows up as a build failure so I __notice__ it right away. 

Then you update Xcode and get a load of new warnings. _This is a good thing_ but sometimes there are cases where you want to leave the stricter warnings on (I recommend most of the [__"Hosey-level" warnings__](http://boredzo.org/blog/archives/2009-11-07/warnings)) and still perform the operation causing the warning. How do you leave in code that generates a warning but not see said warning? You control the diagnostic that are enabled via `#pragma`.

A couple situations that I'll talk about because they come up often are _performing an unknown selector on an object_ and _deprecated methods_.


