function fetchDataAndUpdateChart() {
    //chart1
    fetch('/get-d_chart1')
      .then(response => response.json())
      .then(data => {
        updateChart1(data);
      })
      .catch(error => console.error('Error:', error))
      //chart2
      fetch('/get-d_chart2')
      .then(response => response.json())
      .then(data => {
          updateChart2(data);
      })
      .catch(error => console.error('Error: ', error));
    //   //chart3
    //   fetch('/get-d_chart3')
    //   .then(response => response.json())
    //   .then(data => {
    //       updateChart3(data);
    //   })
    //   .catch(error => console.error('Error: ', error));
      //chart4
      fetch('/get-d_chart4')
      .then(response => response.json())
      .then(data => {
          updateChart4(data);
      })
      .catch(error => console.error('Error: ', error));
      //chart5
      fetch('/get-d_chart5')
      .then(response => response.json())
      .then(data => {
          updateChart5(data);
      })
      .catch(error => console.error('Error: ', error));

 }
// chart 1
  function updateChart1(data) {
    am5.ready(function(){
        var root = am5.Root.new("chartdiv_1");
        var myTheme = am5.Theme.new(root);

        myTheme.rule("Label").setAll({
          fill: am5.color(0x000000)
        });

        root.setThemes([
          am5themes_Animated.new(root),
          myTheme
        ]);
        
        root.interfaceColors.set("grid", am5.color(0x000000));

        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            pinchZoomX: true
        }));

        chart.children.unshift(am5.Label.new(root, {
            text: "Sales by Product Line",
            fontSize: 25,
            fontWeight: "500",
            textAlign: "center",
            x: am5.percent(50),
            centerX: am5.percent(50),
            paddingTop: 0,
            paddingBottom: 0
          }));

        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        var xRend = am5xy.AxisRendererX.new(root, {minGridDistance: 30});
        xRend.labels.template.setAll({
            rotation: -90,
            centerY: am5.p50,
            centerX: am5.p100,
            paddingRight: 15
        });

        xRend.grid.template.setAll({
            location: 1
        });

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "status",
            renderer: xRend,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));

        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "hi",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "status",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0});
        series.columns.template.adapters.add("fill", function(fill, target){
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", function(stroke, target){
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        xAxis.data.setAll(data);
        series.data.setAll(data);

        series.appear(1000);
        chart.appear(1000, 100);
    });
}
//chart 2
function updateChart2(data){
    am5.ready(function() {
        var root = am5.Root.new("chartdiv_2");
        var myTheme = am5.Theme.new(root);

        myTheme.rule("Label").setAll({
          fill: am5.color(0x000000)
        });

        root.setThemes([
          am5themes_Animated.new(root),
          myTheme
        ]);
        
        root.interfaceColors.set("grid", am5.color(0x000000));
        
        var chart = root.container.children.push(am5percent.PieChart.new(root, {
          layout: root.verticalLayout,
          innerRadius: am5.percent(50)
        }));

        chart.children.unshift(am5.Label.new(root, {
            text: "Payment Distribution",
            fontSize: 25,
            fontWeight: "500",
            textAlign: "center",
            x: am5.percent(50),
            centerX: am5.percent(50),
            paddingTop: 0,
            paddingBottom: 0
          }));

        var series = chart.series.push(am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
          alignLabels: false
        }));
        
        series.labels.template.setAll({
          textType: "circular",
          centerX: 0,
          centerY: 0
        });

        var legend = chart.children.push(am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          marginTop: 15,
          marginBottom: 15,
        }));
        
        series.data.setAll(data);
        legend.data.setAll(series.dataItems);
       series.appear(1000, 100);
        
        });
}
//chart3
// function updateChart3(data){
//     am5.ready(function() {
//         var root = am5.Root.new("chartdiv_3");  
//         root.dateFormatter.setAll({
//             dateFormat: "yyyy",
//             dateFields: ["valueX"]
//           });

//           var myTheme = am5.Theme.new(root);
  
//           myTheme.rule("Label").setAll({
//             fill: am5.color(0x000000)
//           });
  
//           root.setThemes([
//             am5themes_Animated.new(root),
//             myTheme
//           ]);
          
//           root.interfaceColors.set("grid", am5.color(0x000000));
          
//           var chart = root.container.children.push(am5xy.XYChart.new(root, {
//               panX: true,
//               panY: true,
//               wheelX: "panX",
//               pinchZoomX: true,
//           }));

//           chart.children.unshift(am5.Label.new(root, {
//             text: "Monthly Total Sales",
//             fontSize: 25,
//             fontWeight: "500",
//             textAlign: "center",
//             x: am5.percent(50),
//             centerX: am5.percent(50),
//             paddingTop: 0,
//             paddingBottom: 0
//           }));
  
//           var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
//           cursor.lineY.set("visible", false);
  
//           var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
//             baseInterval: { timeUnit: "Date", count: 1 },
//             renderer: am5xy.AxisRendererX.new(root, {
//               minorGridEnabled: true,
//               minGridDistance: 70
//             }),
//             tooltip: am5.Tooltip.new(root, {})
//           }));
  
//           var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//             logarithmic: true,
//             renderer: am5xy.AxisRendererY.new(root, {
//               minorGridEnabled: true
//             })
//           }));
  
//           var series = chart.series.push(am5xy.LineSeries.new(root, {
//             xAxis: xAxis,
//             yAxis: yAxis,
//             valueYField: "value",
//             valueXField: "Date",
//             tooltip: am5.Tooltip.new(root, {
//               labelText: "{valueX}: {valueY}"
//             })
//           }));

//           series.strokes.template.setAll({
//             strokeWidth: 3
//           });

//           series.data.processor = am5.DataProcessor.new(root, {
//             dateFormat: "yyyy",
//             dateFields: ["Date"]
//           });
  
//           series.data.setAll(data);

//           series.appear(1000);
//           chart.appear(1000, 100);
//       });    
// }
//chart4
function updateChart4(data){

    am5.ready(function() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv_4");
        var myTheme = am5.Theme.new(root);

        myTheme.rule("Label").setAll({
          fill: am5.color(0x000000)
        });

        root.setThemes([
          am5themes_Animated.new(root),
          myTheme
        ]);

        root.interfaceColors.set("grid", am5.color(0x000000));
  
  
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(am5percent.PieChart.new(root, {
          layout: root.verticalLayout
        }));

        chart.children.unshift(am5.Label.new(root, {
            text: "Average Ratings by Product Line",
            fontSize: 25,
            fontWeight: "500",
            textAlign: "center",
            x: am5.percent(50),
            centerX: am5.percent(50),
            paddingTop: 0,
            paddingBottom: 0
          }));
  
  
        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category"
        }));
  
  
        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll(data)
  
  
      // Create legend
      // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
      var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15
      }));
  
      series.data.setAll(data);
      series.appear(1000);
      chart.appear(1000, 100);
  
  
        // Play initial series animation
        // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    });  
}
    //chart 5 
function updateChart5(data) {
    am5.ready(function() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv_5");
        var myTheme = am5.Theme.new(root);

        myTheme.rule("Label").setAll({
          fill: am5.color(0x000000)
        });

        root.setThemes([
          am5themes_Animated.new(root),
          myTheme
        ]);
        
        root.interfaceColors.set("grid", am5.color(0x000000));
        
        
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "panX",
          wheelY: "zoomX",
          paddingLeft:0,
          layout: root.verticalLayout
        }));

        chart.children.unshift(am5.Label.new(root, {
            text: "Average Unit Price and Quantity by Product Line",
            fontSize: 25,
            fontWeight: "500",
            textAlign: "center",
            x: am5.percent(50),
            centerX: am5.percent(50),
            paddingTop: 0,
            paddingBottom: 0
          }));
        
        
        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        var legend = chart.children.push(am5.Legend.new(root, {
          centerX: am5.p50,
          x: am5.p50
        }))
        
        
        
        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
          categoryField: "category",
          renderer: am5xy.AxisRendererY.new(root, {
            inversed: true,
            cellStartLocation: 0.1,
            cellEndLocation: 0.9,
            minorGridEnabled: true
          })
        }));
        
        yAxis.data.setAll(data);
        
        var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {
            strokeOpacity: 0.1,
            minGridDistance: 50
          }),
          min: 0
        }));
        
        
        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        function createSeries(field, name) {
          var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: field,
            categoryYField: "category",
            sequencedInterpolation: true,
            tooltip: am5.Tooltip.new(root, {
              pointerOrientation: "horizontal",
              labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
            })
          }));
        
          series.columns.template.setAll({
            height: am5.p100,
            strokeOpacity: 0
          });
        
        
          series.bullets.push(function () {
            return am5.Bullet.new(root, {
              locationX: 1,
              locationY: 0.5,
              sprite: am5.Label.new(root, {
                centerY: am5.p50,
                text: "{valueX}",
                populateText: true
              })
            });
          });
        
          series.bullets.push(function () {
            return am5.Bullet.new(root, {
              locationX: 1,
              locationY: 0.5,
              sprite: am5.Label.new(root, {
                centerX: am5.p100,
                centerY: am5.p50,
                text: "{name}",
                fill: am5.color(0xffffff),
                populateText: true
              })
            });
          });
        
          series.data.setAll(data);
          series.appear();
        
          return series;
        }
        
        createSeries("unit_price", "Unit_price");
        createSeries("quantity", "Quantity");
        
        
        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        var legend = chart.children.push(am5.Legend.new(root, {
          centerX: am5.p50,
          x: am5.p50
        }));
        
        legend.data.setAll(chart.series.values);
        
        
        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
          behavior: "zoomY"
        }));
        cursor.lineY.set("forceHidden", true);
        cursor.lineX.set("forceHidden", true);
        
        
        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        chart.appear(1000, 100);
        
        });

}


document.addEventListener('DOMContentLoaded', function () {
    fetchDataAndUpdateChart();
  });


