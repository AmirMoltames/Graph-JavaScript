const germanPopulation = {
        x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        y: [0, 12, 8, 17, 23, 45, 56, 45, 56, 45],
        name: "Germany",
        type: "scatter"
      };
const usPopulation={
        x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        y: [0, 12, 8, 17, 23, 45, 56, 45, 56, 45],
        name: "USA",
        type: "scatter"
      };
const data = [germanPopulation, usPopulation];
const layout = {
    title: {
        text: "Population Over Time"
    },
    xaxis: {
        title: {
            text: "Year"
        }
    },
    yaxis: {
        title: {
            text:"Population"
        }
    }
}
Plotly.newPlot("myGraph", data, layout);