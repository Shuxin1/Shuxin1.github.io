var chart = echarts.init(document.getElementById("main"));

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['消费返利', '连锁销售', '循环销售', '自愿连锁经营、资本运作', '网络传销、微商', '旅游创业、低价旅游', '招聘', '免费购物', '慈善、爱心捐助', '养老']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: false
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['2008年', '2011年', '2014年', '2017年']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            inside: true
        }

    }],
    series: [{
            name: '消费返利',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [2, 1, 91, 246]
        },
        {
            name: '连锁销售',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [0, 0, 0, 0, 0]
        },
        {
            name: '循环销售',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [3, 25, 160, 35]
        },
        {
            name: '自愿连锁经营、资本运作',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [0, 7, 108, 2230]
        },
        {
            name: '网络传销、微商',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [0, 22, 159, 1617]
        },
        {
            name: '旅游创业、低价旅游',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [0, 1, 16, 290]
        },
        {
            name: '招聘',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [0, 1, 7, 70]
        },
        {
            name: '免费购物',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [0, 0, 21, 61]
        },
        {
            name: '慈善、爱心捐助',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [0, 0, 8, 63]
        },
        {
            name: '养老',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [0, 0, 41, 48]
        },
    ]
};
chart.setOption(option);

$(window).on('resize', function() {
    if (chart != null && chart != undefined) {
        chart.resize();
        console.log(chart);
    }
});