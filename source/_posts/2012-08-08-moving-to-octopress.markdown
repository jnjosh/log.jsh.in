---
layout: post
published: false
title: "How I moved to Octopress, and why you shouldn't use the default theme"
date: 2012-08-08 22:59
comments: false
categories: [Blogging]
---

_Last year after redesigning my blog I [wrote about returning to blogging](http://log.jsh.in/posts/back-to-blogging-and-working-without-a-clock/) and then quickly stopped blogging. I had moved the site from being Wordpress-based to using [Jekyll](http://jekyllrb.com) with posts being written in raw HTML. Silly me. Thinking I would start blogging when every post would essentially be a mini-website. Sure, Jekyll supports markdown, but the whole site was built to have a lot of custom layouts._

_For someone who doesn't write a lot, I had to make it easy. Markdown makes it easy. [Octopress](http://octopress.org) makes it easy. To prove it, this is a post about the process I went moving to octopress and how I created a custom theme._

<!-- more -->

## Octopress

For the uninitiated, octopress is a static site generator. You create posts on your computer in markdown, then the running `rake generate` script, it will build the entire HTML for your site. No database, just the HTML. Going further, it exposes other `rake` tasks to create new posts, watch for changes, and even deploy the site. If you haven't run away yet in fear of the command line interface this might be for you.




## Summary

Making your own theme isn't hard. You can also use one of the already created [themes that are listed on the Github wiki](https://github.com/imathis/octopress/wiki/List-Of-Octopress-Themes). 