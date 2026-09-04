# Additions
- [ ] comments (disqus?)
- [ ] tag-based rss/email
- [z] footnotes
- [ ] hugo taxonomies for ordered essay series (Dissecting Ariel, Theories of Art, Patterns of Poetry, Elizabeth Bishop, etc)

# hugo/md tweaks
- [x] go through all old pages to remove "# Notes" "# References" or "# Notes and References", then make that heading automatically add itself if the frontmatter includes `hasNotes,` then everything will be super clean! // didn't do exactly this, but instead used css to target the heading that comes *before* the reference list, whatever it is

# UI/UX-improvements
- [ ] round the right-hand side of the blockquotes?
- [ ] make desktop settings tiles use the same design as mobile
- [ ] potentially make nav links lowercase or sentence case?
- [ ] potentially make nav the standard horizontal form instead of vertical
- [x] add more top padding to blockquotes to make small quotes sit less awkwardly
- [x] make nav links slightly bolder
- [x] fix theme font
- [x] make the "last updated" not part of the 3 mini tag things. Either put it under or above or something
- [x] make the header sizes on mobile smaller and the title font size bigger (atm h1's are literally larger than the title...)
- [x] make the page header capitalisation consistent
- [x] make the last updated only show on desktop

## Mobile
- [x] Layout of settings on mobile is now broken
- [ ] make poem page more to the right (makes sense for normal posts but for poems we have the space to add more padding to the container or whatever is holding it)

## Css Organisation
- [ ] Use mixins in places where I repeatedly use the same sets of settings, maybe in typography or sizing/spacing
- [ ] Make the nesting fully hierarchical to avoid repetitions and redefinitions (especially around main vs main.container)

# Bugs
- [x] On the home page, /poems creates a blank item for some reason (probably draft related somehow)
- [x] theme is broken again; changing theme doesn't stay when you change page. it reverts to the default of white peony.
- [x] theme is not broken now, but laggy
- [x] fix odd deploy issue?