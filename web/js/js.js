
$(function () {
    const BaseUrl = 'http://127.0.0.1:5000/api'
    echarts_1();
    echarts_2();
    echarts_4();
    echarts_31();
    echarts_32();
    echarts_33();
    echarts_5();
    echarts_6();
    setNum();
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        $.ajax({
            type: "get",
            url: 'http://127.0.0.1:5000/api/getComJobNum',
            success: function (data) {
                console.log('echart1', data)
                let labeldata = []
                let seriesdata = []
                for (let i = 0; i < 7; i++) {
                    labeldata.push(data.data[i][0])
                    seriesdata.push(data.data[i][1])
                }
                option = {
                    //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        top: '10px',
                        right: '0%',
                        bottom: '4%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: labeldata,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },

                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            interval: 0,
                            // rotate:50,
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            //formatter: '{value} %'
                            show: true,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                            }
                        }
                    }],
                    series: [
                        {
                            type: 'bar',
                            data: seriesdata,
                            barWidth: '35%', //柱子宽度
                            // barGap: 1, //柱子之间间距
                            itemStyle: {
                                normal: {
                                    color: '#2f89cf',
                                    opacity: 1,
                                    barBorderRadius: 5,
                                }
                            }
                        }

                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        })
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:5000/api/analysisJob',
            success: function (data) {
                console.log("echarts2--->", data)
                let xData = []
                let yData = []
                let showNum = 7
                for (let i = 0; i < showNum; i++) {
                    xData.push(data.data[i][0])
                    yData.push(data.data[i][1])
                }
                option = {
                    //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { type: 'shadow' }
                    },
                    grid: {
                        left: '0%',
                        top: '10px',
                        right: '0%',
                        bottom: '4%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: xData,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },

                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            interval: 0,
                            // rotate:50,
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            //formatter: '{value} %'
                            show: true,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                            }
                        }
                    }],
                    series: [
                        {

                            type: 'bar',
                            data: yData,
                            barWidth: '35%', //柱子宽度
                            // barGap: 1, //柱子之间间距
                            itemStyle: {
                                normal: {
                                    color: '#27d08a',
                                    opacity: 1,
                                    barBorderRadius: 5,
                                }
                            }
                        }

                    ]
                };
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        })
    }
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        $.ajax({
            type: 'get',
            url: BaseUrl + '/getComAddress',
            success: function (data) {
                console.log("echarts5--->", data)
                let xData = []
                let yData = []
                let showNum = 8
                for (let i = 0; i < showNum; i++) {
                    xData.push(data.data[i][0])
                    yData.push(data.data[i][1])
                }
                option = {
                    //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },

                    grid: {
                        left: '0%',
                        top: '10px',
                        right: '0%',
                        bottom: '2%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: xData,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },

                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            interval: 0,
                            // rotate:50,
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            //formatter: '{value} %'
                            show: true,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                            }
                        }
                    }],
                    series: [{
                        type: 'bar',
                        data: yData,
                        barWidth: '35%', //柱子宽度
                        // barGap: 1, //柱子之间间距
                        itemStyle: {
                            normal: {
                                color: '#2f89cf',
                                opacity: 1,
                                barBorderRadius: 5,
                            }
                        }
                    }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }

        })
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        $.ajax({
            type: 'get',
            url: BaseUrl + '/getSalary',
            success: function (data) {
                let yData1 = Object.values(data.data[0]).sort((a, b) => {
                    return a - b
                })
                let yData2 = Object.values(data.data[1]).sort((a, b) => {
                    return a - b
                })
                console.log(yData1, yData2)
                option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: '#dddc6b'
                            }
                        }
                    },
                    legend: {
                        top: '0%',
                        data: ['本科', '硕士'],
                        textStyle: {
                            color: 'rgba(255,255,255,.5)',
                            fontSize: '12',
                        }
                    },
                    grid: {
                        left: '10',
                        top: '30',
                        right: '10',
                        bottom: '10',
                        containLabel: true
                    },

                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        axisLabel: {
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: 12,
                            },
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,.2)'
                            }

                        },

                        data: ['应届', '1年', '2年', '3年', '4年', '5年', '10年']

                    }, {

                        axisPointer: { show: false },
                        axisLine: { show: false },
                        position: 'bottom',
                        offset: 20,



                    }],

                    yAxis: [{
                        type: 'value',
                        axisTick: { show: false },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,.1)'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: 12,
                            },
                        },

                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,.1)'
                            }
                        }
                    }],
                    series: [
                        {
                            name: '本科',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 5,
                            showSymbol: false,
                            lineStyle: {

                                normal: {
                                    color: '#0184d5',
                                    width: 2
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(1, 132, 213, 0.4)'
                                    }, {
                                        offset: 0.8,
                                        color: 'rgba(1, 132, 213, 0.1)'
                                    }], false),
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#0184d5',
                                    borderColor: 'rgba(221, 220, 107, .1)',
                                    borderWidth: 12
                                }
                            },
                            data: yData1

                        },
                        {
                            name: '硕士',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 5,
                            showSymbol: false,
                            lineStyle: {

                                normal: {
                                    color: '#00d887',
                                    width: 2
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(0, 216, 135, 0.4)'
                                    }, {
                                        offset: 0.8,
                                        color: 'rgba(0, 216, 135, 0.1)'
                                    }], false),
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#00d887',
                                    borderColor: 'rgba(221, 220, 107, .1)',
                                    borderWidth: 12
                                }
                            },
                            data: yData2

                        },

                    ]

                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }

        })


    }
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
        function getOptionItem(name, value, index) {
            let rArr = [['59%', '70%'], ['49%', '60%'], ['39%', '50%'], ['29%', '40%'], ['20%', '30%']]
            var dataStyle = {

                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            };
            var placeHolderStyle = {
                normal: {
                    color: 'rgba(255,255,255,.05)',
                    label: { show: false, },
                    labelLine: { show: false }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };
            let item = {
                name: name,
                type: 'pie',
                clockWise: false,
                center: ['50%', '42%'],
                radius: rArr[index],
                itemStyle: dataStyle,
                hoverAnimation: false,
                data: [{
                    value: value + 20,
                    name: '0' + index
                }, {
                    value: 100 - value,
                    name: 'invisible',
                    tooltip: { show: false },
                    itemStyle: placeHolderStyle
                }]
            }
            return item
        }
        $.ajax({
            type: 'get',
            url: BaseUrl + '/getComAddress',
            success: function (data) {
                let xData = []
                let yData = []
                let allValue = 0
                let showNum = 5

                for (let i = 0; i < showNum; i++) {
                    xData.push(data.data[i][0])
                    yData.push(data.data[i][1])
                    allValue += data.data[i][1]
                }
                option = {
                    color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
                    tooltip: {
                        show: true,
                        formatter: "{a} : {c} "
                    },
                    legend: {
                        itemWidth: 10,
                        itemHeight: 10,
                        itemGap: 12,
                        bottom: '3%',
                        data: xData,
                        textStyle: {
                            color: 'rgba(255,255,255,.6)',
                        }
                    },
                    series: []
                };
                for (let i = 0; i < showNum; i++) {
                    option["series"].push(getOptionItem(xData[i], Math.floor((yData[i] / allValue) * 100), i))
                }
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }

        })
    }
    function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1'));
        legendData = []//标签数据
        seriesData = []// 饼图数据
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:5000/api/getDegree',
            success: function (data) {
                let templegenddata = []
                let tempseriesdata = []
                for (let i in data) {
                    templegenddata.push(i)
                    tempseriesdata.push({
                        value: data[i],
                        name: i
                    })
                }
                option = {
                    title: [{
                        text: '学历要求',
                        left: 'center',
                        textStyle: {
                            color: '#fff',
                            fontSize: '16'
                        }

                    }],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                        position: function (p) {   //其中p为当前鼠标的位置
                            return [p[0] + 10, p[1] - 10];
                        }
                    },
                    legend: {
                        top: '70%',
                        itemWidth: 10,
                        itemHeight: 10,
                        data: templegenddata,
                        textStyle: {
                            color: 'rgba(255,255,255,.5)',
                            fontSize: '12',
                        }
                    },
                    series: [
                        {
                            name: '学历要求',
                            type: 'pie',
                            center: ['50%', '42%'],
                            radius: ['40%', '60%'],
                            color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                            label: { show: false },
                            labelLine: { show: false },
                            data: tempseriesdata
                        }
                    ]
                };
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });

            }
        })
    }
    function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
        option = {

            title: [{
                text: '职业分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['电子商务', '教育', 'IT/互联网', '金融', '学生', '其他'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 5, name: '电子商务' },
                        { value: 1, name: '教育' },
                        { value: 6, name: 'IT/互联网' },
                        { value: 2, name: '金融' },
                        { value: 1, name: '学生' },
                        { value: 1, name: '其他' },
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {
            title: [{
                text: '兴趣分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['汽车', '旅游', '财经', '教育', '软件', '其他'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '兴趣分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 2, name: '汽车' },
                        { value: 3, name: '旅游' },
                        { value: 1, name: '财经' },
                        { value: 4, name: '教育' },
                        { value: 8, name: '软件' },
                        { value: 1, name: '其他' },
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function setNum() {
        $.ajax({
            type: "get",
            url: 'http://127.0.0.1:5000/api/getComNum',
            success: function (data) {
                document.querySelector('.num1').innerHTML = data.data
            }
        })
        $.ajax({
            type: "get",
            url: 'http://127.0.0.1:5000/api/getJobNum',
            success: function (data) {
                document.querySelector('.num2').innerHTML = data.data
            }
        })
    }

})


















