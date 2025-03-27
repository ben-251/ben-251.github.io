---
draft: false
date: 2025-03-27
tags:
  - math
  - blog
title: "Maths recap 1: Group Theory, Combinatorics and Graham's Number"
---
This week, I finally learned (roughly) what Lie Groups are (pronounced 'LEE'). Imagine an n-sided polygon sitting on a flat surface. Rotate it $\frac{2\pi}{n}$ degrees. The polygon looks exactly the same. If you include the reflective symmetries, you create what's known as a *Dihedral group,* written $D_{n}.$ Now consider the symmetries of a circle. We can rotate any $\theta \in [0,2\pi)$ and we *still* get an identical image. This makes the group an infinite group. 

The other important thing is that the group action is smooth (differentiable). This makes some sense, since the act of passing through each $\theta$ is definitely continuous, but I'm not sure how the calculus on groups actually works.

Earlier, I also learned about permutation groups and their notation. For the set $\{ A,B,C,D,E \}$, you can represent the act of changing the ordering $O_{1}=(A,B,C,D,E)$ to $O_{2}=(A,C,B,E,D)$ as a bijection $f:O_{1} \to O_{2},$ where $f(A)=A, f(B)=C, \dots, f(E)=E.$ The way to write this compactly is to make cycles. If you happen to have done any speed-cubing blindfolded methods, this idea will not be unusual. $A$ maps to itself, so its cycle, $(A),$ is trivial. $B\to C$ and $C\to B$, so we write $(B\;C).$ Likewise we get $(D\; E).$ Putting this together gives $(A)(B\; C)(D\; E)=(B\; C)(D\; E).$

Then I learned about Graham's number. I'm surprised that this was actually useful for "serious maths," outside of fun thought experiments. It made me realise just how powerful recursion is. The decimal system compresses numbers significantly, allowing us to express a number like $1,000,000$ with only seven digits, but the notation of 

$$
g_{n} = 
\begin{cases} 
      3 \uparrow \uparrow \uparrow \uparrow 3,\quad n=1\\
      3 \uparrow^{g_{n-1}}3, \quad \text{if } n \geq 2 
\end{cases}
$$
takes composition and recursion to a whole new level. Language, and writing systems in particular, are so intriguing!