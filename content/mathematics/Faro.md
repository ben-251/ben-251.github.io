---
draft: false
title: Group Theory on Faro Shuffles
date: 2025-09-25
tags:
  - group-theory
description: work in progress...
---
There are two faro shuffles: in- and out-faro. The goal is to find the number of shuffles required to bring an ordered deck back to order. I will lay out the structure of a deck of cards mathematically, and explore the symmetries that arise. Finally, we briefly consider alternate shuffle methods, like riffle and overhand shuffles (which we can interpret by reordering subsets of the deck). We will define a notion of “similarity” between two shuffle states, and determine the expected similarity between the deck before and after applying a given shuffle.

> The term *faro shuffle* implies a **perfect** faro shuffle, where cards are interleaved one by one.

# Structure
Let $D=\{ 1,2,\dots,52 \}$ be a deck of cards, where each value $d \in D$ represents a unique card. We can represent the $52!$ orderings of the deck by using the permutation group $S_{52}.$ Recall that $S_{52}$ is the set of bijections, $f:D\to D,$ with composition (denoted $\circ$ ) as the group action. We can interpret each faro shuffle as one of these bijections. 

To model this, consider two distinct halves of the deck, $\{ 1,2,\dots,26 \}$ and $\{ 27,28,\dots,52 \}.$

## Out-faro
In the Out-faro, $F,$ the first card in $D_{a}$, $1,$ goes on top of the first card in $D_{b},$ $27,$ which goes over $2,$ which goes over $28,$ and so on. Since the now $2^\text{nd}$ card was once the $27^\text{th}$, and so on, we can write the inverse of the out faro, $$
F^{-1} = \begin{pmatrix}
1 & 2 & 3 & 4 & \dots & 52 \\
1 & 27 & 2 & 28 & \dots & 52 
\end{pmatrix},
$$
which we can invert to get $$
F =  \begin{pmatrix}
1 & 27 & 2 & 28 & \dots & 52 \\
1 & 2 & 3 & 4 & \dots & 52 
\end{pmatrix}.
$$
Examining where each number ends up, we can reorder the function as $$
F =  \begin{pmatrix}
1 & 2 & 3 & \dots & 27 & 28 & \dots &52 \\
1 & 3 & 5 & \dots & 2 & 4 & \dots & 52 
\end{pmatrix}.
$$
Finally, we can write this formally for $d \in D$ as follows:
$$F(d)= \begin{cases} 
     2d-1 & \text{if } d \leq 26  \\
     2\,(d-26)=2d-52& \text{else}
   \end{cases}
$$

## In-faro
Similarly, for the In-faro, $G:D\to D,$ we have $$
\begin{split}
G &=  \begin{pmatrix}
27 & 1 & 28 & 2 & \dots & 52 & 26\\
1 & 2 & 3 & 4 & \dots & 51 & 52
\end{pmatrix} \\ \\ 
&= \begin{pmatrix}
1 & 2 & \dots & 26 & 27 & 28 & \dots  & 52 \\
2 & 4 & \dots & 52 & 1 & 3 & \dots & 51
\end{pmatrix},
\end{split}
$$
Which we can write formally as $$
G(d) = \begin{cases}
2d & \text{if } d\leq 26 \\
2(d-26)-1= 2d-53 & \text{else} \; _{.}
\end{cases}
$$

# Exploration
With these definitions in place, we can begin to consider the order of each shuffle. The out-faro can be written $$
\begin{split}
F = \ & \begin{pmatrix} 1\end{pmatrix} \\
& \begin{pmatrix} 2 & 3 & 5 & 9 & 17 & 33 & 14 & 27 \end{pmatrix} \\
& \begin{pmatrix} 4 & 7 & 13 & 25 & 49 & 46 & 40 & 28 \end{pmatrix} \\
& \begin{pmatrix} 6 & 11 & 21 & 41 & 30 & 8 & 15 & 29 \end{pmatrix} \\
& \begin{pmatrix} 10 & 19 & 37 & 22 & 43 & 34 & 16 & 31 \end{pmatrix} \\
& \begin{pmatrix} 12 & 23 & 45 & 38 & 24 & 47 & 42 & 32 \end{pmatrix} \\
& \begin{pmatrix} 18 & 35 \end{pmatrix} \\
& \begin{pmatrix} 20 & 34 & 26 & 51 & 50 & 48 & 44 & 36\end{pmatrix} \\
& \begin{pmatrix} 52 \end{pmatrix}. \\
\end{split}
$$
This means that $F$ has cycle shape $(1,8,8,8,8,8,2,8,1),$ or, $(8^6,2,1^2).$ If we let each of those cycles correspond to $\sigma_{1}\sigma_{2} \dots \sigma_{9},$ then since the order of each cycle is it’s length, we have that the order of $F$ is given by $lcm(1,2,8)=8.$ Thus, exactly eight out-faro shuffles return the deck to the identity. 

We can use this to build a subgroup of $S_{52}.$ Call the identity $\iota.$ Then we have $F^8=\iota,$ and can write $f={F^i : i \in \mathbb{Z} / 8\mathbb{Z}}.$ This subgroup is (i think) a normal subgroup, meaning we can build a coset group by offsetting each of these, so for example, $c_{1}=F,$ $c_{2}=\begin{pmatrix}2 \end{pmatrix}\begin{pmatrix}3 & 4 & 6 & 10 & 18 & 34 & 15 & 28\end{pmatrix} \dots \begin{pmatrix}1\end{pmatrix},$ and in general, for all $i \in 52,$ we can say $c_{i}$ is the coset formed by offsetting each cycle in $F$ by $i.$ Proof that each $c_{i}$ is distinct:
$F$ has two singleton cycles, $(1)$ and $(52).$ Write these two as a tuple, $C_{1}=(1,52).$ The tuple corresponding to $c_{2}=(2,1),$ and in general, $C_{n}=(1+n,52+n),$ mod $52.$ Since $1=52+1 \text{ mod } 52,$ these two cycles will always be one unit apart, forming a pattern that looks like $(1,52),(2,1),(3,2)$ etc. where the second value is one behind the first. (can also show this with induction on the number of cards, so for 2 singleton sets, with (1) and (2), show that it works, then show that if it’s true for k cards, (ie for k cards, all pairs (1,k),… are distinct,) it’s true for k+1 cards. || COuld also potentially show this with set theory by considering something like the cartesian product  $Z/52\mathbb{Z}  \times Z/52\mathbb{Z}$)

As it turns out, the in-faro can’t be decomposed any further:
$$
G = \begin{pmatrix}
1 & 2 & 4 & 8 & 16 & 32 & 11 & 22 & 44 & 35 & 17 & 24 & 15 & 30 & 7 & 14 & 28 & 3 & 6 & 12 & 24 & 48 & 43 & 33 & 13 & 26 & 52 & 51 & 44 & 45 & 37 & 21 & 42 & 31 & 9 & 18 & 36 & 19 & 38 & 23 & 46 & 39 & 25 & 50 & 47 & 41 & 29  & 5 & 10 & 20 & 40 & 27
\end{pmatrix}.
$$
This means we can form a subgroup of $S_{52}$ defined as $S_{52}/F$ (not sure about the notation here), where cosets correspond to different ways to use faro shuffles. the full coset group should be a normal subgroup of $S_{52}$? should it equal $S_{52}$?? idk.

Let’s attempt build a congruence class:
Let $A_{1} =\begin{pmatrix}1 & 2 & 3 & 4 & \dots & 52 \end{pmatrix},$
and define $A_{n}=A_{1}A_{1} \dots \text{n times} \dots A_{1}=A_{1}^n$ 

Then 
$\mathbf{\bar{0}}=\{\; g\in S_{52}\, : \, g= kG, k\in \mathbb{Z}/52\mathbb{Z}\;\}$
$\mathbf{\bar{1}}=\{\; g\in S_{52}\, : \, g= kG \circ A_{1} , k\in \mathbb{Z}/52\mathbb{Z}\;\}=\mathbf{\bar{0}},$ since $G$ goes through all cards.

(in contrast, we can probably build a congruence class on F by omitting the ones not included and blah blah just like with int mod 2 we can take even and odd, tbs)

//GOAL: find a group isomorphic to F and try to see any nice patterns 

# Similarity
Note that for overhand shuffles, the main way a shuffle can fail to be sufficiently random is by most cards remaining close to their original neighbours. the way s