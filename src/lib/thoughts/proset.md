---
  title: ProSet
  description: A rather mathematical take on the game Set.
  date: 2022-05-12
  tags:
    - math
    - games
  published: true
---

Play it for yourself at [prosetgame.com](https://www.prosetgame.com), or visit the [GitHub repo](https://github.com/mhuang03/proset-site).

![ProSet](/img/proset.png)

This project was one of my very first forays into making (and publishing!) a static website. It's written completely in vanilla HTML, CSS, and JS (_yikes_), hosted very simply on Netlify, but it's completely functional, if a little strangely laid out. I must say that Computer Modern was a very fitting choice, though.

The essential premise of the game is similar to Set, in which one must find a "valid" subset of the available cards to claim them. In this case, "valid" means that each color of dot must appear an even number of times (i.e., 0, 2, 4, or 6) in the subset.

This game's construction is interesting in that you are guaranteed a solution for any set of 7 cards.

### some math

For the math-inclined, here's a slightly hand-wavey explanation for the existence of a solution:

The 7 available cards can be viewed as 6-dimensional (each color is a dimension) vectors over the finite field with two elements (i.e. $\mathbf v_1,\cdots \mathbf v_7 \in \mathbb F_2^6$), where we take the entry to be 1 when that color dot is on the card and 0 is when it isn't.

Since there are more vectors than dimensions, these vectors necessarily admit some linear dependence, so there must exist a subset whose sum is the zero vector. But a sum of 0 in $\mathbb F_2$ only occurs when an even number of nonzero terms are added, so the zero vector represents a sum of vectors in which each dimension has an even number of nonzero terms.

This linear dependence, then, exactly guarantees a subset of cards in which each color dot appears an even number of times.

In fact, the direct translation into linear algebra means you can take Gaussian elimination to this problem, which is algorithmically more efficient than the brute-force solution.

### notes

ProSet was originally introduced to me by my friend [Pramod](https://www.pramodna.com/) in a physical format, which you can find [here](https://www.thegamecrafter.com/games/proset).
