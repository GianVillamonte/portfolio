# Vegetation Seasonality Analysis

This repository contains a compiled workflow for analysing vegetation seasonality from vegetation index time series satellite imagery available on Google Earth Engine.

The workflow was adapted from repeated environmental monitoring analyses where Google Earth Engine was used to extract vegetation-index values (for this particular example, NDVI from Landsat imagery was used), and R was used to clean, visualize, impute, decompose, and interpret seasonal vegetation patterns.

The project is intended as a compact portfolio example of remote sensing, ecological time-series analysis, and reproducible reporting.

## Project context

Vegetation indices such as NDVI or EVI are commonly used as proxies for vegetation vigour, greenness, and seasonal biological response. In dry or seasonally variable ecosystems, NDVI often responds to precipitation with a delay because vegetation response depends on infiltration, soil moisture, germination, resprouting, vegetative growth, and reproductive development.

This workflow uses public Landsat imagery to evaluate whether vegetation-index values show consistent intra-annual seasonality and whether there is evidence of interannual change over the analysed period.

The analysis is framed as a methodological example, not as a formal assessment of any specific site, company, or mining operation.

## Repository structure

```text
vegetation-seasonality-analysis/
├── README.md
├── vegetation\_seasonality\_analysis.Rmd
├── vegetation\_seasonality\_analysis.html
├── landsat\_ndvi\_timeseries\_example.xlsx
└── gee\_landsat\_ndvi\_extraction\_template.js
```

## Main files

### `vegetation\_seasonality\_analysis.html`

Rendered version of the analysis. This is the recommended entry point for reviewing the workflow.

It includes the analysis narrative, statistical checks, plots, missing-data imputation, seasonal decomposition, trend visualization, and reproducibility information.

### `vegetation\_seasonality\_analysis.Rmd`

Annotated R Markdown workflow containing the R code and explanatory text.

The workflow covers:

* data import
* variable preparation
* exploratory summaries
* Shapiro-Wilk normality test
* Kruskal-Wallis tests by month, quarter, and year
* monthly, quarterly, and yearly NDVI boxplots
* time-series construction
* missing-value imputation using a Kalman filter
* STL decomposition using Loess
* seasonal component visualization
* interannual trend visualization
* session information for reproducibility

### `landsat\_ndvi\_timeseries\_example.xlsx`

Example vegetation-index time-series dataset derived from public Landsat imagery.

The file has been renamed with a neutral filename and is used only as an example input for the workflow.

### `gee\_landsat\_ndvi\_extraction\_template.js`

Google Earth Engine template used to extract Landsat-derived vegetation-index time series.

The file is saved as `.txt` so it can be downloaded easily. Its contents can be copied into the Google Earth Engine Code Editor, or the file can be renamed locally to `.js`.

## Methods overview

The workflow combines Google Earth Engine and R.

In Google Earth Engine, Landsat imagery is used to extract vegetation-index values across a defined area of interest. The general workflow is:

1. Define an area of interest.
2. Select the Landsat vegetation-index image collection.
3. Filter images by date.
4. Extract mean vegetation-index values through time.
5. Review cloud or image-quality indicators.
6. Export or download the resulting time series.

In R, the exported time series is analysed as follows:

1. Monthly vegetation-index values are imported from Excel.
2. Basic statistical tests are used to check whether NDVI varies significantly by month, quarter, or year.
3. Boxplots are used to visualize intra-annual and interannual variation.
4. Missing observations caused by cloud or image-quality filtering are imputed using a Kalman filter.
5. The completed time series is decomposed using STL, a seasonal and trend decomposition method based on Loess.
6. Seasonal and interannual components are plotted and interpreted.

## Technical notes

This workflow uses Kalman filtering for missing-value imputation and STL decomposition for seasonal/trend separation. It does not use ARIMA modelling.

Main R packages used include:

* `readxl`
* `dplyr`
* `ggplot2`
* `viridis`
* `lubridate`
* `imputeTS`
* `forecast`

## Key outputs

The analysis produces:

* monthly NDVI boxplot
* quarterly NDVI boxplot
* yearly NDVI boxplot
* plot of known and Kalman-imputed values
* STL seasonal component plot
* STL interannual trend plot
* statistical test outputs for monthly, quarterly, and yearly differences

## Skills demonstrated

This project demonstrates applied skills in:

* Google Earth Engine scripting
* Landsat time-series extraction
* vegetation-index analysis
* cloud/image-quality filtering logic
* ecological seasonality interpretation
* missing-value imputation
* Kalman smoothing
* STL decomposition
* non-parametric statistical testing
* R Markdown reporting
* reproducible analytical documentation

## Data note

The example dataset was derived from public Landsat imagery. The repository is intended to demonstrate the analytical workflow rather than provide a site-specific environmental assessment.

Any project-specific names, client references, or operational context have been removed or generalized.

## Author

**Gianfranco Villamonte Cuneo**  
Ecology, sustainability impact assessment, and data science  
Utrecht, Netherlands

