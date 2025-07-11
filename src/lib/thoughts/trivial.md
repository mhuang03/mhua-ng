---
  title: Proof is Trivial!
  description: A website that can explain every mathematical proof ever.
  date: 2025-05-12
  tags:
    - math
    - silly
  published: true
---

Get your very own proof help at [proofistrivial.com](https://proofistrivial.com), or visit the [GitHub repo](https://github.com/mhuang03/pftrivial).

![Proof is Trivial!](/img/trivial.png)

This little app was originally inspired by [theproofistrivial.com](https://www.theproofistrivial.com/), which is a bit of a long-standing in-joke website for the math people. A while ago I decided that the original was a little dated and, more importantly, could use a vocabulary update!

### the design

The original website was quite simple: there were a couple different opening phrases, then the code would choose two nouns and two adjectives, handling plurals and "a(n)"s along the way.

However, I wanted to add _much_ more customizability and ended up with 7 different lists for all the different nouns, adjectives, degrading statements, theorems, etc. I decided to use a homegrown (why? no idea) almost markdown-esque syntax to handle the singular/plural, a/an, imperative/gerund, and random digit details, then stored the words in the form of newline-separated text files.

Of course, the flippant dismissive attitude of this website wouldn't be complete without some search links! All of the nouns, adjectives, and theorems (and sneakily, the end-of-proof square as well) have links to help you search them on Wolfram MathWorld. No promises that you get anything, though.

The code itself is done very simply in mostly vanilla ES6 JS, with some Pug templating. The original was written in a single all-in-one html file, which you can see [here](https://github.com/alangpierce/TheProofIsTrivial). I took this as a challenge (completely unnecessarily) to bundle **my** version into a single file as well. I managed to scrunch everything up (other than the Google Analytics injection and the favicon) rather easily with the use of esbuild.

### link sharing

Upon sharing this website on [Reddit](https://www.reddit.com/r/math/comments/1k6hbvi/proof_is_trivial/), some people requested a hard link to share cool trivialities they were rolling.

Originally, I literally just took a URI-safe base64 encoding of the JS object and shoved it into a query parameter to later reconstruct the exact message. Obviously, this made for some rather long and ugly links:

```
https://proofistrivial.com/?t=eyJkZWdyIjoiSXQncyUyMHNlbGYtZXZpZGVudCUyMGlmJTIweW91IiwibWV0aG9kIjoidHJhbnNmb3JtJTIwaXQlMjBpbnRvIiwiYWRqMSI6ImluZGlzY3JldGUiLCJhZGoxVm93ZWwiOnRydWUsImNvbnQiOiJhY3RpbmclMjBvbiUyMHRoZSIsIm5vdW4xIjoibW9kdWxlIiwiYWRqMiI6Imh5cGVyYm9saWMiLCJub3VuMiI6IkxpZSUyMGFsZ2VicmFzIiwidXNlIjoidXNlIiwidGhtIjoiRnJldWRlbnRoYWwlMjBzdXNwZW5zaW9uJTIwdGhlb3JlbSIsInRobU5vVGhlIjpmYWxzZX0%3D
```

Eventually, I bit the bullet and designed a bitwise base64 packing of the indices of the terms from each list (and some extra bits for the random digit generation possibilities), which yielded much prettier and shorter links.

```
https://proofistrivial.com/?s=CNJIAtBAB_AYAdAAA
```

Of course, I did the upgrade in a way that was backwards-compatible, if somebody out there still wants to use one of those long, ugly links.

### some shoutouts

How does someone as deranged as myself dream up all these mathematical nouns, adjectives, and theorem names? Well, Wikipedia and Wolfram MathWorld were great helps, but my friend [Pramod](https://www.pramodna.com) also helped me crowdsource many of the math terms.

I'd be remiss if I didn't mention [Sheafification of G](https://www.youtube.com/@SheafificationOfG), whose extremely esoteric (I'd liken them to math brainrot) modern algebra videos gave me great inspiration in this endeavor.

My Fourier analysis professor, [Sergey Bobkov](https://cse.umn.edu/math/sergey-bobkov), had an inequality named after him. I, of course, had to add his inequality to the list.
