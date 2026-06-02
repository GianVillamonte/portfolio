// Landsat vegetation-index time-series extraction template for Google Earth Engine
// Replace the AOI coordinates and dates before running.

// 1. Define the area of interest (longitude/latitude in decimal degrees).
var aoi = ee.Geometry.Rectangle([lon_min, lat_min, lon_max, lat_max]);

// 2. Load Landsat 8 composite collections for vegetation and quality assessment.
// This template follows the legacy workflow used for the original analysis.
var ndviCollection = ee.ImageCollection('LANDSAT/LC08/C01/T1_8DAY_NDVI')
  .filterDate('2013-02-01', '2021-08-31')
  .select('NDVI');

var ndwiCollection = ee.ImageCollection('LANDSAT/LC08/C01/T1_8DAY_NDWI')
  .filterDate('2013-02-01', '2021-08-31')
  .select('NDWI');

var bqaCollection = ee.ImageCollection('LANDSAT/LC08/C01/T1_8DAY_TOA')
  .filterDate('2013-02-01', '2021-08-31')
  .select('BQA');

// 3. Chart mean values within the AOI.
var ndviOptions = {
  lineWidth: 1,
  title: 'NDVI variation',
  vAxis: {title: 'NDVI'},
  legend: {position: 'none'},
  hAxis: {title: 'Date'}
};

var ndwiOptions = {
  lineWidth: 1,
  title: 'NDWI variation',
  vAxis: {title: 'NDWI'},
  legend: {position: 'none'},
  hAxis: {title: 'Date'}
};

var bqaOptions = {
  lineWidth: 1,
  title: 'BQA variation',
  vAxis: {title: 'BQA'},
  legend: {position: 'none'},
  hAxis: {title: 'Date'}
};

print(Chart.image.series(ndviCollection, aoi, ee.Reducer.mean(), 30).setOptions(ndviOptions));
print(Chart.image.series(ndwiCollection, aoi, ee.Reducer.mean(), 30).setOptions(ndwiOptions));
print(Chart.image.series(bqaCollection, aoi, ee.Reducer.mean(), 30).setOptions(bqaOptions));

// 4. Visualize the AOI.
Map.addLayer(aoi, {}, 'Area of interest');
Map.centerObject(aoi, 10);
