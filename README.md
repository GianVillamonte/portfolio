# 👋 Gianfranco Villamonte Cuneo

**Ecology | Sustainability impact assessment | Data science | Geospatial analysis**  
📍 Utrecht, Netherlands  
📧 [giancuneo@gmail.com](mailto:giancuneo@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/gvillamonte/)

I work at the intersection of ecology, biodiversity monitoring, geospatial analysis, product sustainability assessment, and environmental data science. My background combines field ecology in Andean and Amazonian ecosystems, environmental impact assessment, remote sensing, life-cycle assessment, and reproducible analytical workflows in R, Python, SQL, and GIS tools (e.g., QGI, ArcGIS, Google Earth Engine).

This GitHub profile contains selected portfolio examples. Some professional work from product sustainability assessment, LCA automation and venture development cannot be shared publicly because it was developed in commercial or proprietary contexts. Where needed, portfolio examples are anonymized or synthetic while preserving the analytical structure.

---

## 🔎 Research and technical focus

- Biodiversity and ecological monitoring
- Restoration ecology and tropical forest recovery
- Remote sensing and vegetation-index time series
- Environmental impact assessment and biodiversity baselines
- Nature, climate and land-use data
- Product sustainability assessment, LCA and MRV logic

---

## 📁 Portfolio projects

### 🌳 1. Amazon mine restoration analysis

**Repository:** [`msc-thesis-amazon-mine-restoration-analysis`](https://github.com/GianVillamonte/portfolio/tree/main/msc-thesis-amazon-mine-restoration-analysis)
**Methods:** linear mixed-effects models, model selection, ecological interpretation  
**Context:** MSc thesis, Wageningen University & Research

This project compiles the statistical analysis from my MSc thesis on tree recruitment in restored Amazonian mine lands. It evaluates how ecological and management factors influence recruit species richness, recruit species composition and recruit density across restored mine plots.

Main elements:

- transformation and standardisation of ecological variables
- linear mixed-effects models with mine identity as random effect
- backward model simplification and REML refitting
- coefficient plots and interaction plots
- ecological interpretation of soil, canopy, litter, planted trees and surrounding forest effects

Related research output: [MSc thesis](https://doi.org/10.13140/RG.2.2.36839.27044)

---

### 🛰️ 2. Vegetation seasonality analysis

**Repository:** [`vegetation-seasonality-analysis`](https://github.com/GianVillamonte/portfolio/tree/main/vegetation-seasonality-analysis)
**Methods:** Google Earth Engine, Landsat NDVI, Kalman imputation, STL decomposition  
**Context:** anonymized workflow adapted from repeated analyses used to define the ideal fieldwork timing for biodiversity monitoring and baseline assessments

This project demonstrates a workflow for extracting and analysing vegetation-index time series from public Landsat imagery. Google Earth Engine is used to obtain NDVI time series, while R is used to clean, visualize, impute and decompose the data.

Main elements:

- Landsat vegetation-index extraction in Google Earth Engine
- monthly, quarterly and yearly NDVI boxplots
- missing-value imputation with Kalman filtering
- STL seasonal and trend decomposition using Loess
- visualization of intra-annual and interannual vegetation dynamics

---

### 🌿 3. Biodiversity monitoring impact analysis

**Repository:** [`biodiversity-monitoring-impact-analysis`](https://github.com/GianVillamonte/portfolio/tree/main/biodiversity-monitoring-impact-analysis)
**Methods:** biodiversity monitoring data wrangling, protected flora density analysis, Mann-Kendall trends, Sen's slope  
**Context:** anonymized example adapted from environmental impact assessment work

This project demonstrates how applied biodiversity monitoring data can be processed and interpreted for impact assessment. The public version uses anonymized/synthetic data to preserve the structure of the workflow without exposing project-level monitoring data.

Main elements:

- protected flora monitoring data processing
- density aggregation by species, vegetation formation, season and station
- log-scale density boxplots
- average density summaries
- Mann-Kendall trend tests
- Sen's slope estimates
- temporal trend visualization

---

### 📈 4. Species-area and community similarity analysis

**Repository:** [`species-area-similarity-analysis`](https://github.com/GianVillamonte/portfolio/tree/main/species-area-similarity-analysis)
**Methods:** species-accumulation curves, Chao-2 richness estimation, Jaccard similarity, clustering, dendrograms  
**Context:** anonymized biodiversity monitoring workflow

This project demonstrates automated biodiversity analysis across multiple vegetation formations and seasons. It converts long-format monitoring data into community matrices, generates species-accumulation curves and estimates compositional similarity among vegetation formations.

Main elements:

- automated generation of species-by-sampling-unit matrices
- species-accumulation curves using `vegan`
- observed richness and Chao-2 estimation
- Jaccard similarity matrices
- average-linkage clustering
- dendrogram generation

---

## 📚 Selected research outputs

### 🎓 MSc thesis

**Forest restoration of Amazonian mine lands: Identifying factors driving tree recruitment**  
Wageningen University & Research, 2020  
[https://doi.org/10.13140/RG.2.2.36839.27044](https://doi.org/10.13140/RG.2.2.36839.27044)

### 🌲 BSc thesis

**Ecological niche modelling of Peruvian Podocarp species under climate-change scenarios**  
Universidad Ricardo Palma  
[https://doi.org/10.13140/RG.2.2.15733.60641](https://doi.org/10.13140/RG.2.2.15733.60641)

Methods included Maxent ecological niche modelling, GIS-based climate scenario analysis and protected-area overlay assessment.

### 📝 Publication

**Circular food systems and agroforestry-related sustainability transitions in Peru and Colombia**  
Science of the Total Environment, 2022  
[https://doi.org/10.1016/j.scitotenv.2022.156376](https://doi.org/10.1016/j.scitotenv.2022.156376)

### 🌱 Presentation

**Five-decade trends of agroforestry research in Peru and Colombia**  
5th World Agroforestry Congress  
[ResearchGate presentation](https://www.researchgate.net/publication/405691134_Five-decade_trends_of_agroforestry_research_in_Peru_and_Colombia)

This work reviewed long-term agroforestry research trends in Peru and Colombia. It included database standardisation, duplicate removal, topic classification and research-trend visualization.

---

## 🔐 Notes on data availability

Some datasets used in professional and academic work cannot be shared publicly because they originate from consulting projects, restoration monitoring, commercial sustainability assessment systems, or venture-development contexts.

For this reason, several repositories use one of the following approaches:

- rendered HTML outputs for review when row-level data cannot be distributed
- anonymized datasets
- synthetic datasets that preserve the analytical structure
- neutralized file names and project descriptions

The goal is to show the analytical workflow without exposing confidential or project-specific information.

---

## 📬 Contact

If you're working on something related, I'm open to collaborations and consulting opportunities.
- Email: [giancuneo@gmail.com](mailto:giancuneo@gmail.com)
- LinkedIn: [https://www.linkedin.com/in/gvillamonte/](https://www.linkedin.com/in/gvillamonte/)
