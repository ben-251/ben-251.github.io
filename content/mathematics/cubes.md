---
draft: false
title: Group Theory on 2x2s
date: 2025-03-17
tags:
---
## Introduction
We define the group, $G,$ to be the set of all possible move sequences. This group is non-abelian under addition.

Example elements of this group are:
<!--more-->
- R
- R+L
- $L+L=2L$ 
-  $L + R + L -R - R = 2L-R$
- OLL 23
- T-perm
- $R + U - R - U$
- many, many more….

One natural question is whether this group is finite, and if so, how many elements does it have? We can answer this question without directly referring to a physical cube, as will be shown formally soon.

Another natural question is whether there exist two move sequences that are not parallel-congruent, yet result in identical states. If so, what symmetry is being preserved to allow for this? For 2x2s it is easy to see that this non-parallel equivalence exists. For example, all adjacent corner swap PLLs result in a solved state (0). We will formally prove this later on, but in the words of Alexander Grothendieck:

> One should never try to prove anything that is not almost obvious.

# Move Sequences
*Note: We ignore primitive permutation groups and reserve the word primitive for purposes outlined below:*

Let $\mathbb{M}$ be the set of all basic, or **primitive** moves, $\mathbb{M} = \{R,U,F,L,D,B\}$. For all $X \in \mathbb{M}$, there exists an abelian subgroup on $X$ under addition. The set $H = \{n X : n \in \mathbb{Z} / 4\}$ is a subset of $G$, is nonempty, and is finite. The fact that this pattern is cyclical (that is, $3X + X = 0$) implies that this set is closed under addition, so $H$ is a subgroup of $G.$ We call this subgroup the **primitive group** over $X,$ written $\text{prim } \{X\}$. For example,  $\text{prim }\{R\} =\{-R, 0, R, 2R\}$, where $-1 \equiv 3$ mod $4$ gives an inverse on addition. 

For some set $S=\{X_{1},X_{2}, \dots X_{m}\}$, the primitive group over $S$ can be written $$\text{prim }S= \{ n_{1}X_{1} + n_{2}X_{2} + \dots+n_{m}X_{m} : n_{i} \in \mathbb{Z} / k \}.$$Every element of this set has an order of $k$. If the pair is parallel, $k=4$, and The set to $\{-1,0,1,2\}$ is taken as representative of $\mathbb{Z} / 4$, and we call the sum a **reduced parallel sequence,** on $A$, for $A \in {R,U,F}$. Since only parallel elements of $G$ form abelian subgroups,

$$\text{prim } \{X, Y, X\} = \text{prim } \{X, Y\} \iff X \text{ and } Y \text{ are parallel.}$$

For any element $a$ of the group G, written as a sum of reduced parallel sequences, $P_0 + … + P_n$, we define the additive inverse 

$$
\begin{split}
-a &=\ -(P_n + \dots + P_0) \\
&=\ -P_n - P_{n-1} - \dots - P_0,
\end{split}
$$
To see why this works, consider $a + (-a)$:

$$
\begin{split}
a - a = P_0 + \dots + P_n - P_n - ... - P_0
\end{split}
$$
Since $P_i$ is a reduced parallel sequence, it can be written $aX + bY$ for some parallel primitives $X,Y$, and some $a,b \in \mathbb{Z} / 4$. Thus, $-P_i$ can be given as $-bY - aX$, resulting in $P_i - P_i = aX + bY - bY - aX = 0$

___
## Theorem 1.3: the cyclic nature of move sequences
For some move sequence $$Q = m_{1}X_{1}+m_{2}X_{2}+\dots+m_{n}X_{n},$$with $m_{i} \in \mathbb{Z}$ and $X_{i} \in \mathbb{M}$, we have $-Q\equiv(k-1)Q$ for some $k \in \mathbb{Z}$. 

**Proof:** Let $H =\text{prim } \{X_{1},X_{2},\dots,X_{n}\}$. Then by definition, $Q \in H$, and $Q$ has an order $k$. This completes the proof. $\; \square$