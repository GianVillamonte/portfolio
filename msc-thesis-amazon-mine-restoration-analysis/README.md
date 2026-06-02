# Amazon Mine Restoration Analysis



This repository contains a compiled and documented version of the statistical analysis conducted for my MSc thesis:



**Forest restoration of Amazonian mine lands: Identifying factors driving tree recruitment**

Gianfranco Villamonte Cuneo, MSc Forest and Nature Conservation, Wageningen University \& Research, 2020



The study assessed ecological and management drivers of tree recruitment in restored Amazonian mine lands in Rondônia, Brazil. The analysis focused on three dimensions of recruitment success: recruit species richness, recruit species composition, and recruit density.



## Project context



Forest restoration is essential for recovering ecosystem structure and function after surface mining in tropical forests. In Amazonian mine lands, tree planting is commonly used to restart forest development, but long-term restoration success depends on whether planted areas can recover natural recruitment processes.



This analysis evaluates how recruitment patterns are associated with seed availability, site conditions, soil properties, light availability, and mine-zone characteristics in a 27-year chronosequence of restored surface-mining areas in the Brazilian Amazon.



The original thesis was based on 86 monitoring plots distributed across deactivated cassiterite mining areas. The statistical analysis was conducted in R using linear mixed-effects models.



## Research questions



The analysis addresses three main questions:



1\. How do management and ecological factors interact to determine recruit species richness?

2\. How do management and ecological factors interact to determine recruit species composition?

3\. How do management and ecological factors interact to determine recruit density?



The explanatory variables considered in the models include:



* successional age

* canopy closure

* litter depth

* soil PCA axes

* mine-zone categories

* planted tree density

* planted species richness

* planted species composition

* surrounding secondary and old-growth forest area



## Methods overview



The compiled analysis includes:



* data preparation logic

* exploratory checks

* transformation and standardisation of continuous variables

* collinearity checks

* linear mixed-effects model fitting

* mine identity as a random effect

* backward model simplification

* REML refitting of final models

* marginal and conditional R² estimates

* coefficient plots

* selected interaction plots

* interpretation of model outputs in ecological terms



The main modelling approach follows the thesis methods: continuous variables were transformed and standardised before modelling, and linear mixed-effects models were used to account for the nested structure of plots within mines.



## Main files



```text

amazon-mine-restoration-analysis/

├── README.md

├── thesis_analysis_compiled.Rmd

├── thesis_analysis_compiled.html

└── estimates_errors.xlsx

```



### `thesis_analysis_compiled.html`



Rendered version of the analysis. This is the recommended entry point for reviewing the project.



It contains the compiled workflow, explanation of analytical steps, model outputs, coefficient plots, interaction plots, and ecological interpretation.



### `thesis_analysis_compiled.Rmd`



Annotated R Markdown file containing the analysis code and explanatory text.



The file documents how the original thesis analysis was organised into a readable workflow. Some chunks depend on the original plot-level analytical dataset, which is not distributed in this repository.



### `estimates_errors.xlsx`



Helper file containing model estimates and standard errors used to reproduce the report-style coefficient plots.



This file does not contain row-level field observations.



## Data availability



The plot-level analytical dataset is not included in this repository because it originates from thesis fieldwork and associated restoration-monitoring data.



As a result, the `.Rmd` file is included for transparency and code review, but it will not fully run unless the original analytical dataset is available locally.



The rendered `.html` file is provided so the full workflow, modelling logic, results, and figures can be reviewed without access to the plot-level dataset.



The included `estimates\_errors.xlsx` file contains only model coefficients and standard errors used for figure reproduction. It does not include raw plot-level ecological measurements, coordinates, species-by-plot tables, or site-location data.



## Key outputs



The analysis produces and discusses:



* final coefficient plot for recruit species richness

* final coefficient plot for recruit species composition, PCoA axis 1

* final coefficient plot for recruit species composition, PCoA axis 2

* final coefficient plot for recruit density

* selected interaction plots from final models

* ecological interpretation of seed availability, soil conditions, light availability, and mine-zone effects



## Technical skills demonstrated



This thesis project demonstrates applied skills in:



* ecological data analysis

* restoration ecology

* statistical modelling

* linear mixed-effects models

* model simplification and interpretation

* data transformation and standardisation

* reproducible analytical documentation

* visualisation with `ggplot2`



Main R packages used include:



* `nlme`

* `lme4`

* `lmerTest`

* `MuMIn`

* `ggplot2`

* `dplyr`

* `readxl`



## Thesis reference



Villamonte Cuneo, G. O. (2020). *Forest restoration of Amazonian mine lands: Identifying factors driving tree recruitment*. MSc thesis, Forest Ecology and Forest Management Group, Wageningen University \& Research.



## Author



**Gianfranco Villamonte Cuneo**

