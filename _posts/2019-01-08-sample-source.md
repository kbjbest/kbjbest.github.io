---
title: "글샘플"
strapline: "샘플"
description: "블로그 글 작성 소스 샘플"
header:
 overlay_image: /assets/images/source-code.jpg
categories:
tag:
toc: true
last_modified_at: 2019-01-08
comments: true
mathjax: true
---

# InfoVAE : Balancing Learning and Inference in Variational Autoencoder

**2018 / arXiv.org / Shengjia Zhao, Jiaming Song, Stefano Ermon**

## 3. Two problems of VAE

### 3.1. Amortized inference failures

이상적인 조건 하에서, ELBO 최적화는 위의 두가지 목표를 달성 할 수 있다 (with sufficiently flexible model families for $p_\theta(x\mid z)$ and $q_\phi(z\mid x)$ over $\theta , \phi$).

1. Capturing $p_D(x)$
2. Performing correct amortized inference $q_\phi(z\mid x)$

이는 Eq.(3)를 통해 확인 할 수 있는데, ELBO 최적화는 결국

1. $p_D(x)$과 $p_\theta(x)$; data distribution과 model distribution
2. $q_\phi(z\mid x)$와 $p_\theta(z\mid x)$; varitational posterior과 true posterior

의 KL Divergence를 최소화하는 것이기때문이다 (각각은 위의 1,2 목표와 동일).

하지만 finite model capacity로 인해 두가지 목표 사이에 trade-off가 발생하는 경우, $q_\phi(z\mid x)$의 학습이 희생되는 경향이 있는데, 논문에서는 그 이유를 두 가지로 설명하고있다.

- **Inherent properties of the ELBO objective :**  
ELBO가 매우 부정확한 $q_\phi(z\mid x)$를 갖더라도 최대화가 가능.
- **Implicit modeling bias :**
$x$의 차원이 $z$에 비해 높기때문에, 최적화 수행 시 data fitting에 바이어스 됨.

### 3.1.1 Good ELBO values do not imply accurate inference

ELBO를 재구성하면 log likelihood (reconstruction) term인 $\mathcal{L}\_{\text{AE}}$
와 regularization term $\mathcal{L}\_{\text{REG}}$로 구성되어있는 것을 알 수 있다.

![ELBO1](/assets/images/infovae1.png)

먼저 reconstruction term인 $\mathcal{L}\_{AE}$만 최적화하는 경우를 살펴보면, inferred latent variable $z\sim q_\phi(z\mid x)$로부터 observing data point $x$의 log likelihood를 최대화하게 된다. 유한한 데이터 셋 $\{x_1,...,x_N\}$으로부터, $q_\phi$가 $x_i \neq x_j$일때 $q_\phi(z\mid x_i)$와 $q_\phi(z\mid x_j)$가 disjoint support를 갖는 distribution이라하면, $p_\theta(x\mid z )$는 각각의 $q_\phi(z\mid x_i)$로부터 학습 할 때 $x_i$로 집중되어있는 형태의 분포를 배운다는 것이다. 이로인해 $p_\theta(x\mid z )$는 Dirac delta distribution를 따라가는 경향이 발생하기도하는데, 부적절한 $z$를 학습하는데도 불구하고 $\mathcal{L}\_{AE}$는 $+\infty$로 간다.

논문에서는 간단한 예시로 $x\in \{-1,1\}$인 경우, true prior $p(z)$와 $q_\phi(z\mid x)$의 모델링에 대해 살펴보았다. $x=\pm1$로 conditioned되어있을 때 $q_phi$의 평균과 분산이 각각 $\pm\infty,+0$인 경우 $\mathcal{L}\_{ELBO}$가 $+\infty$로 최대화되는 것을 증명하였다 (이때 $q_\phi(z\mid x)$와   $p_\theta(z\mid x)$의 KL divergence 또한 $+\infty$가 된다).

즉  ELBO를 최대화하는 쪽으로 잘 학습함에도 불구하고, 쓸모없는 inference $q_\phi(z)$를 (ture posterior와 상관없는)를 얻는다는 것이다.
__________________________________________________________________
## 요약

- Generative model에서는 sample generation도 중요하지만 잘 설명이 되는 latent variable $z$의 학습도 매우 중요하다.
- 하지만 기존 ELBO objective는 크게 두가지 한계를 내포하고 있는데, 첫번째로 $z$의 학습보다 $x$의 reconstruciton에 더 영향을 받는다는 것이고 두번째는 $x$와 $z$의 의미적인 연결에 문제가 있다는 것이다.
- 따라서 ELBO 내에서 $z$에 대한 웨이트를 주고 $x,z$ 사이의 mutual information에 보상을 줘서 두가지 문제를 해결한다.
- 결과적으로 InfoVAE를 통해서 기존 VAE보다 발전된 샘플을 얻으면서 latent variable $z$의 학습도 잘 이루어졌다.
