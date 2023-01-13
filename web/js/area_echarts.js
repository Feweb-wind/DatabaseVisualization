
$(function () {
    //map();
    map2()
    function map2() {

        var myChart = echarts.init(document.getElementById('map_1'));
        echarts.registerMap('wuhan', wuhanMap, {})
        var data = [

        ]
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:5000/api//getComAddress',
            success: function (d) {
                console.log("bigMap---->", d)
                d.data.forEach(item => {
                    data.push({
                        name: item[0],
                        value: item[1]
                    })
                });
                console.log(data)
                var geoCoordMap = {
                    "洪山区": [114.33, 30.50],
                    "东西湖区": [114.13, 30.62],
                    "武昌区": [114.30, 30.57],
                    "蔡甸区": [114.03, 30.58],
                    "黄陂区": [114.37, 30.87],
                    "江夏区": [114.3130, 30.34653],
                    "江汉区": [114.27, 30.60],
                    "汉阳区": [114.27, 30.55],
                    "江岸区": [114.30, 30.60],
                    "硚口区": [114.27, 30.57],
                    "青山区": [114.38, 30.63],
                    "新洲区": [114.80, 30.84],
                    "汉南区": [114.08, 30.32],
                }
                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };
                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            if (typeof (params.value)[2] == "undefined") {
                                return params.name + ' : ' + params.value;
                            } else {
                                return params.name + ' : ' + params.value[2];
                            }
                        }
                    },
                    geo: {
                        map: 'wuhan',
                        //中心点(经纬度)
                        center: [114.31, 30.6205],
                        //缩放比例
                        zoom: 1.1,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        roam: false,
                        itemStyle: {
                            normal: {
                                areaColor: '#4c60ff',
                                borderColor: '#002097'
                            },
                            emphasis: {
                                areaColor: '#293fff'
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#4c60ff',
                                borderColor: '#002097',
                                borderWidth: 1//区块描边颜色
                            },
                            emphasis: {
                                areaColor: '#293fff'
                            },

                        },
                    },
                    series: [
                        {
                            name: '',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            //mapType: 'wuhan',
                            data: convertData(data),
                            symbolSize: function (val) {
                                return val[2] / 20;
                            },
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#ffeb7b'
                                }
                            },
                        },

                    ],
                }
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        })

    }
})

