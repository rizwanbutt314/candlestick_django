
// A $( document ).ready() block.
$( document ).ready(function() {
    $.ajax({
        type: 'GET',
        url: "/data",
        processData: true,
        data: {},
        dataType: "json",
        success: function (data) {
            data = data.data;
            // create the chart
            Highcharts.stockChart('container', {


                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: 'AAPL Stock Price'
                },

                series: [{
                    type: 'candlestick',
                    name: 'AAPL Stock Price',
                    data: data,
                    dataGrouping: {
                        units: [
                            [
                                'week', // unit name
                                [1] // allowed multiples
                            ], [
                                'month',
                                [1, 2, 3, 4, 6]
                            ]
                        ]
                    }
                }]
            });
        }
    });

});
