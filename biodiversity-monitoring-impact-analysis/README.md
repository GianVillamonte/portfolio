# Biodiversity Monitoring Impact Analysis

This repository contains an anonymized portfolio example of a protected flora monitoring workflow.

The workflow is adapted from applied environmental assessment scripts used to process repeated field survey data, compare flora density across vegetation formations, and assess temporal trends in protected species density.

The repository is intended as a methodological example. It displays the type of methodological analysis done for clients working on protected flora associated to built infrastructure. However, it does not reproduce any client's report, formal impact assessment, or project-specific monitoring results.

## Repository structure

```text
biodiversity-monitoring-impact-analysis/
├── README.md
├── flora\_impact\_trend\_analysis.Rmd
└── data/
    └── flora\_monitoring\_example.csv
```

## Main file

### `flora\_impact\_trend\_analysis.Rmd`

Annotated R Markdown workflow containing the analysis code and explanatory text.

The workflow covers:

* field-monitoring data preparation;
* filtering by survey method;
* aggregation of density observations by year, season, species, vegetation formation and station;
* density boxplots by protected species and vegetation formation;
* mean and median density summaries;
* construction of a complete survey-period grid;
* Mann-Kendall trend tests;
* Sen's slope estimates;
* faceted temporal trend plots;
* reproducibility information.

## Example data

The file `data/flora\_monitoring\_example.csv` is synthetic and anonymized.

It preserves the structure of a typical flora monitoring dataset, but does not contain project-level field observations, client names, site names, coordinates, station names, or confidential biodiversity records.

The anonymized fields include:

* `year`
* `season`
* `evaluation`
* `method`
* `vegetation\_formation`
* `station\_id`
* `species`
* `density\_ind\_ha`

## Methods overview

The workflow is designed for repeated biodiversity monitoring datasets where protected species are surveyed across different vegetation formations and survey periods.

The analysis uses:

1. **Data preparation**  
Records are filtered to the target field method and aggregated by survey period, species, vegetation formation and station.
2. **Density comparison**  
Boxplots are used to compare species density across vegetation formations. A log scale is used because field density values often vary strongly among species.
3. **Summary tables**  
Mean and median density are calculated by species and vegetation formation.
4. **Temporal trend preparation**  
Density values are aggregated by survey period, species and vegetation formation. A complete survey-period grid is generated so missing survey periods are handled explicitly.
5. **Trend testing**  
The Mann-Kendall test is used to detect monotonic trends through time. Sen's slope is used to estimate the direction and magnitude of change.
6. **Trend visualization**  
Faceted plots show density patterns across survey periods for each species and vegetation formation.

## Technical skills demonstrated

This project demonstrates applied skills in:

* biodiversity monitoring data processing;
* ecological impact and trend analysis;
* protected flora density assessment;
* repeated-survey data aggregation;
* non-parametric trend testing;
* Mann-Kendall analysis;
* Sen's slope estimation;
* R Markdown reporting;
* data anonymization for public portfolio use;
* visualization with `ggplot2`.

Main R packages used include:

* `readr`
* `dplyr`
* `tidyr`
* `ggplot2`
* `viridis`
* `trend`
* `knitr`

## Data note

The original applied monitoring datasets are not included in this repository. They were replaced by a synthetic dataset to demonstrate the analytical workflow without exposing project-specific information.

The code structure reflects the type of analysis used in repeated flora monitoring, but the included outputs should be interpreted only as examples generated from synthetic data.

## Author

**Gianfranco Villamonte Cuneo**  
Ecology, sustainability impact assessment, and data science

