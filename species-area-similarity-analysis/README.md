# Species-area curves and vegetation-formation similarity analysis

This repository contains a compact R workflow for biodiversity monitoring data analysis. It demonstrates how field flora records can be transformed into community matrices, used to generate species-accumulation curves, and compared across vegetation formations using Jaccard similarity and hierarchical clustering.

The workflow is based on analytical logic developed for applied environmental monitoring work, but this public version uses a synthetic anonymized dataset. Project names, client references, coordinates, monitoring-site labels, and original observations have been removed.

## Repository purpose

This repository is intended as a portfolio example of applied biodiversity data analysis in R.

It demonstrates:

* transformation of long-format flora monitoring records into species-by-site matrices
* automated generation of species-accumulation curves across multiple groups
* estimation of observed richness and Chao-2 richness
* automated creation of Jaccard similarity matrices
* average-linkage clustering of vegetation formations
* dendrogram visualization of floristic similarity
* export of plots and summary tables from reproducible R Markdown

## Repository structure

```text
species-area-similarity-analysis/
├── README.md
├── species\_area\_similarity\_analysis.Rmd
├── data/
│   └── flora\_community\_monitoring\_example.csv
└── outputs/
    ├── species\_area\_curves/
    ├── similarity\_dendrograms/
    └── tables/
```

## Main files

### `species\_area\_similarity\_analysis.Rmd`

The main analysis workflow. It imports the example monitoring dataset, prepares community matrices, generates species-accumulation curves, calculates Jaccard similarity, produces dendrograms, exports summary tables, and records session information.

### `data/flora\_community\_monitoring\_example.csv`

Synthetic anonymized example dataset in long format. Each row represents the relative cover of one species in one sampling unit.

Main fields:

* `survey\_year`: year of survey
* `season`: survey season
* `zone`: anonymized project zone
* `vegetation\_formation`: anonymized vegetation formation
* `station\_id`: anonymized monitoring station
* `sampling\_unit`: station-year sampling unit
* `species`: anonymized species label
* `relative\_cover`: synthetic relative-cover value

The dataset preserves the structure needed for the analysis but does not contain original project data.

### `outputs/`

The R Markdown workflow writes generated plots and tables to this folder when run.

Expected outputs include:

* species-accumulation curves by zone, vegetation formation, and season
* Jaccard similarity matrices by zone and season
* dendrograms comparing vegetation formations
* summary CSV tables for species-area and similarity results

## Methods overview

### Species-accumulation curves

The workflow groups flora records by zone, vegetation formation, and season. For each group, it creates a species-by-sampling-unit matrix and uses `vegan::specaccum()` to calculate the species-accumulation curve.

The workflow also uses `vegan::specpool()` to estimate Chao-2 richness. Each plot reports:

* observed richness, S(obs)
* Chao-2 richness estimate
* curve R² from a simple richness-by-sampling-units regression

### Similarity analysis

The workflow aggregates relative cover by vegetation formation and species, then calculates Jaccard dissimilarity using `vegan::vegdist()`.

The resulting dissimilarity matrix is converted to similarity values and clustered using average-linkage hierarchical clustering. Dendrograms are generated to visualize how vegetation formations group according to floristic composition.

## R packages used

The main packages used are:

* `readr`
* `dplyr`
* `tidyr`
* `purrr`
* `stringr`
* `ggplot2`
* `viridis`
* `vegan`
* `tibble`
* `ggdendro`

## Data note

The original monitoring data are not included because they came from applied environmental assessment work. This repository instead uses a synthetic anonymized dataset that reproduces the analytical structure without exposing original field observations, project names, coordinates, or client-specific information.

The workflow should therefore be read as a methodological example rather than a site-specific environmental assessment.

## Skills demonstrated

This project demonstrates applied skills in:

* biodiversity monitoring data preparation
* ecological community matrices
* species-accumulation analysis
* Chao-2 richness estimation
* Jaccard similarity analysis
* hierarchical clustering
* automated plotting across many site/season groups
* R Markdown reporting
* anonymization of applied environmental datasets for public portfolio use

## Author

**Gianfranco Villamonte Cuneo**  
Ecology, sustainability impact assessment, and data science  

