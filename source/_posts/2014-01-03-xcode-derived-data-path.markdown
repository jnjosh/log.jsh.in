---
layout: post
title: "Xcode Derived Data Path"
date: 2014-01-03 13:33
comments: false
categories: [Xcode, Ruby]
---

The current project I'm working on is a static library. Part of the application includes a set of [Calabash](http://calaba.sh) acceptance tests and a rake script to launch them. This means my build and test script needs to know the location of the built product to launch. 

<!-- more -->

When I first started this project back in the early days of Xcode 4, I decided to stick with the legacy build settings and use a build directory in the same location as the project. As part of updating this to Xcode 5, I decided to remove this legacy requirement and fully support the “new” derived data build location.

Our build scripts usually use Rake so the below sample is built with Ruby.

{% gist 7837207 %}
