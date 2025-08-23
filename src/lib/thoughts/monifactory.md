---
  title: Moni Doesn't Grow on Trees
  description: We played through one of my favorite Minecraft modpacks (so far).
  date: 2025-06-24
  tags:
    - Minecraft
    - games
  renderMath: false
  published: true
---

Recently, my friends and I finished [Monifactory](https://www.curseforge.com/minecraft/modpacks/monifactory). There's even a [base tour](https://www.youtube.com/watch?v=pfyTtgJk1RI).

![Monifactory base screenshot](/img/monifactory.png)

As a player of Minecraft since version 1.4, I've had a lot of time to discover the best parts of the game. I have clocked many (more than I care to admit) hours playing on Hypixel, engaging in two-week Minecraft phases, building redstone contraptions, and much more.

With that in mind, I find that the best Minecraft is modded Minecraft. You would be hard-pressed to find a modding community that's as diverse, capable, and widespread. Minecraft modpacks span an incredible spectrum of genres, but my poison of choice? Tech modpacks.

### the pack

For those not in the know, Monifactory is a Minecraft modpack centered around the GregTech mod. GregTech is a very industrial factory-focused mod that primarily adds a ton of machines for shaping metals, performing chemistry, etching silicon, and much more, which transforms Minecraft into a factory-building resource-management game (think Factorio, Satisfactory, etc.). Quite the nerdy modpack.

The essential gameplay loop is that you gather resources to make machines, in the name of creating better circuits to climb through ever-higher voltage tiers, to eventually make the _Creative Chest_ (it dispenses unlimited amounts of any item you put into it, thereby completing the game). There are 12 or so voltage tiers in this rendition of GregTech, each complete with its own new set of materials and processes.

Voltage tier names aren't purely for content organization, either. The electricity consumption of successive tiers grows exponentially. So, in addition to collecting enough resources and building sufficiently robust machine lines for automation, you also have to generate enough power to run it all. These three constant strains on your factory constitute the key sources of difficulty in the game.

All in all, Monifactory (on normal mode) falls on the lighter side of the spectrum of _gregginess_. You play on peaceful difficulty, get relatively early creative flight, and crucially, fairly early AE2. This makes the pack much more palatable for those who prefer focusing on the factory aspect of GregTech and not so much the punishing early-game struggle (I'm looking at you, [GTNH](https://www.gtnewhorizons.com/)).

### our playthrough

Our server mainly consisted of me and my friend [Stephen](https://steffnstuff.com/), with my roommate Kevin popping in intermittently. We began the playthrough somewhere near the end of December 2024, and finished it about half a year later, near the end of June 2025. Though there were some hiatuses (a couple multi-week stints of burnout :/), the content length promise of GregTech definitely delivered.

Notably, this pack was (and still is, as of this post) in active development. Halfway through, there was a slew of automation-breaking updates that took a couple of weeks to work through and fix up. Thankfully, we weren't put too far off by the additional work.

### how is this even fun?

I've been asked many a time by friends (who aren't into tech modpacks, evidently) how one even finds such a pack fun.
The reality is, a modpack like this is really only fun for a certain _kind_ of person.
Factory games like these don't baby you with little nuggets of dopamine like mobile games, nor do they care about your mechanical skill or reaction speed. Instead, the goal is, as the infamous Factorio in-joke puts it, that "the factory must grow."
Consequently, Monifactory ends up more project than game, more hard work than relaxation. Moni doesn't grow on trees. At least, not until you automate trees, resin, and epoxy circuits.

Oftentimes, when explaining what it is that goes on during my (many) hours of playtime, the response is something like: "Wow, it just sounds like you're clocking in for a 9-5 job." To a certain extent, this is inescapably true. "Playing" often isn't the first word that comes to mind when I launch Monifactory--rather, each time I log on, there's work to be done and problems to be solved.
The "shifts" are _supposed_ to go a little like this: New automation and resource/power generation processes are first planned out and then executed, evaluations for next steps are made, then rinse and repeat.

As with work in real life, shifts almost never play out exactly how they're drawn up. The process often goes more like this: Attempt to implement a new plan. Run into a hiccup, be it an unsourced material, an unforeseen gating, a misplaced machine or pipe, or more likely, the discovery that some previous setup wasn't sufficiently robust. Address said hiccup. More hiccups appear. Spiral into technical debt hell. Claw and fight your way out of _impending total base failure_. Fearfully check all aspects of the base for further failures. Tentatively accept the "fixed" status quo. Start planning again.

In this sense, progress is often accompanied by frantic shoring up of the rest of the base; kind of like a never-ending game of whack-a-mole, if every whack of a mole generates more mole holes, and all you can really do is buy more mallets and grow more hands. It's how I'd imagine being a software engineer at a company with a legacy codebase would feel, except the only one to blame for poor system design and bad code hygiene is yourself.

Finding the brief moments of calm, the eyes of these industrial hurricanes, is where I think the "fun" lies. The perpetual search for a well-oiled, functional base gives an immense sense of satisfaction when a steady state is found. When everything is working well, taking a step back lets you appreciate how all the machines in your base, through all the processes you set up, function together in an intricate web of dependency, consumption, and production. Until the next quest demands more.

This satisfaction does not come without strife, and it certainly doesn't last.

Let me provide an anecdote.

### the hnn saga

Near the beginning of the game (MV, if you're interested), one very powerful (haha) source of resources and power is through a mod called Hostile Neural Networks (HNN). Through it, one can generate a plethora of basic metals, gems, mob drops, and more, all from some cobblestone, water, and power. The mod is themed around killing virtual mobs in "simulation chambers" and then producing loot in "fabrication chambers."

Importantly, the main resource consumed by simulation chambers--pulsating prediction matrices--needs only ender pearls, which is one of the possible outputs (all other inputs can be obtained through some processing of cobblestone and water). Though the crafting tree is somewhat convoluted, using one simulation chamber to produce ender pearls is sufficient to support running something like seven other simulation chambers. The process can thus be bootstrapped.

In this manner, many of the early-game resources, like diamonds, redstone, iron, and more, can be automated given sufficient power; and wouldn't you know it, diamonds can be burned for power. As a result, HNN lines can bootstrap both resource and power generation, and setting them up is a fairly scalable way to obtain both.

We started off with an HNN setup for power. It was small and just produced diamonds to run numismatic dynamos. Then, time passed, and we needed more power and a stable source of more resources. Cue HNN setup #2 for the resources and an upgrade to setup #1. These two lines were intentionally kept separate (we wouldn't want the resource generation setup to accidentally cannibalize powergen inputs), and they got us through most of MV and HV. But the factory grew.

At some point in late HV or early EV, we needed even more power. The old setup wasn't cutting it anymore. Since there wasn't enough space to keep expanding in place, and I couldn't just tear down and move our main power generation without catastrophic base failure, HNN setup #3 was built to increase power production.

Soon thereafter, the base demanded more resources. I bit the bullet and made HNN setup #4 with a simulation chamber for every producible resource. This passive generation generated millions of each resource over the course of many months and fulfilled the base's needs until almost the end (...~~foreshadowing~~).

History repeats itself, and so too did the increase in power demand. HNN setup #5 produced power and involved a couple hundred simulation chambers and another couple hundred dynamos. Honestly, it was pretty glorious. This was the last scale at which HNN-based power was feasible, after which other sources of power took over.

By late game, I thought I had rinsed myself of HNN. _Boy, was I wrong_. One day, parts of our base began to shut down. Various metal alloys weren't being stocked. Processes were breaking down. We tracked the problems down the chain of dependencies and found out that the base had completely ran out of iron. _Iron_. How was this even possible? GregTech has its ways.

Nevertheless, the factory demanded more iron, and HNN hitched its grubby little hands back onto my shoulder. This birthed HNN setup #6, which involved some late-game super-scaled multiblocks, generating tens of thousands of select resources every second.

### civil engineering

Though the aforementioned six HNN setups are somewhat of an extreme example, much of Monifactory's gameplay boils down to one thing: building, maintaining, and upgrading **infrastructure**. In much the same way that infrastructure makes or breaks a city, state, or country, it also makes or breaks a GregTech base.

Every successive material that must be made, in general, must eventually be made en masse. If we were to bum-rush things without designing infrastructure for long-term support, we would only be punishing our future selves with technical debt and more work down the line.

The fact that we have a server and play together adds to our collective enjoyment too. Making the effort to do things "right" rewards not just one's future self, but also the other players. Of course, having other people appreciate your work feels good too.

### so what now

Having finished this pack, we've moved the server over to GTNH (yes, the one I was jabbing at earlier). Considered by some the ultimate GregTech modpack, its name brings echoes of exploding machines and forgotten save files. We're taking a stab at it anyways.

Hopefully, there was something interesting in this mind-and-info-dump of an article. If factory-building or resource-management games are even slightly up your alley, I highly suggest giving Monifactory a go. It's one of the best tech modpacks I've ever played.
