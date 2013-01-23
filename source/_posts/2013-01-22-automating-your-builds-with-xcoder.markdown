---
layout: post
title: "Automate your environment with Xcoder"
date: 2013-01-22 22:17
comments: false
categories: [Xcode, CLI, Ruby]
external-url: "http://rayh.github.com/xcoder/"
---

I've been using __Rakefiles__ with my Xcode projects for over a year now. I really love that all the tasks I perform can be easily automated via a small Ruby method. For example, you can setup a rake task for running [__mogenerator__](https://github.com/rentzsch/mogenerator): `rake mogen`

The biggest problem I've had is getting the `xcodebuild` command to work properly all the time. A few weeks ago, a [coworker](http://twitter.com/scottpenrose) found this RubyGem that provides a nice interface to working with Xcode projects from the command line or Rakefile. It even allows you to run unit tests, manipulate the project, publish to [__TestFlight__](http://testflightapp.com), and more.