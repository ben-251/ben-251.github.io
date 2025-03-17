---
date: 2025-01-28T23:18:36Z
draft: false
title: Proof that there are infinitely many rational numbers between any two real numbers
---

blah blah test push 

For this proof I will assume the Field axioms, as well as the following, defined for a field $F$:
<!--more-->
- (R1) If x ∈ F, then exactly one of the following is true: $0 < x$, $x = 0$, or $x < 0$.
- (R2) If $y < x$, then $−x < −y$.
- (R3) If $x < y$, and $c \in F$, then $x + c < y + c$
- (R4) If $0 < x$ and $0 < y$ then $0 < xy$.
- (R5) If $x < y$ and $y < z$ then $x < z$.
## Lemma 1.1
**Claim:** $(A \subseteq B) \land (B \subseteq C) \implies A \subseteq C$ for all sets $A,B,$ and $C$.

**Proof:** 
Let $A$, $B$, and $C$ be sets with $(A \subseteq B)$ and $(B \subseteq C)$.
Additionally, let $x$ be an element of $A$.
By definition of a subset, $x \in B$. Similarly, since $x \in B$, then $B \subseteq C$ means that $x \in C$.
Thus, all elements of $A$ are in $C$ and $A \subseteq C$. $\ \blacksquare$
## Lemma 1.2
**Claim:** 
The arithmetic mean of two distinct real numbers lies between them exclusively.

**Proof:**
Let $p$ be a real number. We will show that for some real number $m$, either $m < p$ or $p< m$ is true. Since $p-m \in \mathbb{R}$, the usual axioms of real numbers apply to $p-m$. By *R1*, exactly one of the following is true: $0 < p-m$, $p-m=0$, or $p-m < 0$. Applying *R3* with $c = m$ shows that exactly one of the following is true: $m < p$, $p=m$, or $p < m$. It follows that $p \neq m \implies (m < p) \lor (p < m)$. From this we take $q \in \mathbb{R}$, with $p < q$, arbritarily. Note that $p + p < q + p$ (by R5), i.e, $2p < p + q$. Similarly, $p + q < q + q$, which is equivalent to $p + q < 2q$. Hence, $2p < p + q < 2q$. Applying *Proposition 3.4* with $x=1/2$ gives $p < \frac{p+q}{2} < q$, where $\frac{p+q}{2}$ is the arithmetic mean by definition. $\ \blacksquare$ 

## Main Proof
**Claim:** There are infinitely many rational numbers between $a$ and $b$ in $\mathbb{R}$, where $a < b$. 

**Proof:**
Let $a, b \in \mathbb{R}$ with $a < b$.
Assume, for contradiction, that there exists a finite set, $S$, containing all rational numbers between $a$ and $b$. Note that $S$ must be a subset of the rational numbers, by definition. It follows then that $S \subseteq \mathbb{R}$ by _Lemma 1_,  because $\mathbb{Q} \subseteq \mathbb{R}$. 

Every finite subset of $\mathbb{R}$ has a minimum element. Let $s_a$ be the minimum element of $S$. We will show that there exists a real number between $a$ and $s_a$. Indeed, by *Lemma 2*,  $a < \frac{s_a+a}{2} < s_a$. This mean is defined for all pairs of real numbers, so we have contradicted the assumption that $s_a$ is the minimum element; thus $S$ is infinite. $\ \blacksquare$
