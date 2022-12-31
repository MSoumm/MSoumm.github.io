---
layout: archive
title: "My experience"
permalink: /work/
author_profile: true
redirect_from:
  - /work
---
{% include base_path %}

### 2021-2024 : Privacy-preserving image-based user profiling 
***
My current main PhD project.

- **Problem overview**
   - A lot of users are not satisfied with their experience of online recommender systems.
   These methods rely on the user consumption feedback, with a sparce and imperfect signal, e.g. already consumed items are recommended over and over.
   - A lot of user consumption preferences are reflected in their personal photos : 
   their vacation travels, food choices, etc. These images are projection of a much more generic profile thant consumption feedback.
   - Users are concerned about the usage of their data. Most recommender systems collect and centralize collected data
   that leads to a loss of control of the users of over their data
- **Gloal**
   - Build a profiling system that could exploit the information contained in user images. This information can be of 2 types:
     - Consumption feedback : explicit user consumptions should be identified directly on the photos
     - Latent preferences : user images not containing consumption feedback can be exploited to construct a latent implicit user profile
  - The profiling and recommendation pipeline should be robust to privacy attacks.
- **Challenges**
  - The most problematic part of the subject is the lack of data, so our first step was to construct a dataset suitable for our work setup.
  The construction of this dataset lead to a [publication in WACV 2023](/publication/2023-Vis2rec).


### 2019-2020 : NLP and political agendas
***
Master's project at _ENSAE Paris_ . 
- **Problem overview**
  - During the French 2017 presidential election, candidates presented political agendas, some of which were taken up in mainstream media.
  - Some agendas seemed to be better represented than others. Even when a media did not agree with a proposition, the mere emphasis on a candidate's favorite topic could benefit him/her.
  - Is it possible to accurately mesure the resonance from the candidates agenda in the French media ?
- **Proposed work**
  - _Word2Vec_ and _TF-ID_F embeddings are used to mesure what are the taken up sentences for each candidate.
  By varying the similarity threshold, one can distinguish raw citation from paraphrasing, or critique. 
  - Topic modeling with _LDA_ 