<template>
    <div>
        <div class="TVChartContainer" id="tv_chart_container"/>
    
    </div>
</template>

<script>

import api from './api/index'


export default {
    
    name: 'TVChartContainer',
    props: {
        symbol: {
            default: 'BITQUERY',
            type: String,
        },
        interval: {
            default: '1D',
            type: String,
        },
        containerId: {
            default: 'tv_chart_container',
            type: String,
        },
        datafeedUrl: {
            default: 'https://demo-feed-data.tradingview.com',
            type: String,
        },
        libraryPath: {
            default: '/charting_library/charting_library/',
            type: String,
        },
        chartsStorageUrl: {
            default: 'https://saveload.tradingview.com',
            type: String,
        },
        chartsStorageApiVersion: {
            default: '1.2',
            type: String,
        },
        clientId: {
            default: 'tradingview.com',
            type: String,
        },
        fullscreen: {
            default: false,
            type: Boolean,
        },
        autosize: {
            default: true,
            type: Boolean,
        },
        studiesOverrides: {
            type: Object,
        },
        
       contractAddress: {
           
        },
       
    },
    tvWidget: null,
    data() {
        return {
           baseCurrency: "",
            addressInfo: {},
            searchValue: "",
            getSearchAddress: [],
            getAllAddressValue: [],
            showSearchChild: false,
        }
    },
    mounted() {
        this.baseCurrency = document.getElementById("contract_div").innerHTML
    
        const widgetOptions = {
            debug: false,
            symbol: this.symbol,
            datafeed: api(this.baseCurrency),
            interval: this.interval,
            container_id: this.containerId,
            library_path: this.libraryPath,
            theme: 'Dark',
            locale: 'en',
           disabled_features: ["header_compare", "use_localstorage_for_settings"],
            charts_storage_url: this.chartsStorageUrl,
            charts_storage_api_version: this.chartsStorageApiVersion,
          has_emtpy_bars: true,
            client_id: this.clientId,
            user_id: this.userId,
           custom_font_family: 'Goldman',
            fullscreen: this.fullscreen,
            autosize: true,
            studies_overrides: this.studiesOverrides,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
               
            overrides: {
	 "mainSeriesProperties.style": 2
}
        }

        this.tvWidget = new TradingView.widget(widgetOptions)
    },
    methods: {
        getCoinInfo() {
         

        },
    },
 

}


</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Titillium+Web:ital,wght@0,200;0,600;1,700&display=swap');

</style>
