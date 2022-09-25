import axios from 'axios';
import * as Bitquery from './../TVChartContainer/Bitquery';


const lastBarsCache = new Map();
const configurationData = {
    supported_resolutions: [ '60', '120', '1D', '1W', '1M' ],
};

export default(baseCurrency) => ({
    
    onReady: (callback) => {
        setTimeout(() => callback(configurationData));
    },

    resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) =>{
var address = {baseCurrency, }

      const response = await axios.get(
        'https://www.api.bscspotter.com/info/'+baseCurrency)
        
        const coin = response.data
          

        

        if(!coin){
            onResolveErrorCallback();
        }else{
            const symbol = {
                ticker: symbolName,
                name: `${coin.symbol}/USD`,
                session: '24x7',
                timezone: 'Etc/UTC',
                minmov: 1,
                pricescale: 1000000000,
                has_intraday: true,
                intraday_multipliers: ['1', '5', '15', '30', '60'],
                has_empty_bars: true,
                has_weekly_and_monthly: false,
                supported_resolutions: configurationData.supported_resolutions,
                volume_precision: 1,
                data_status: 'streaming',
            }
            onSymbolResolvedCallback(symbol)
        }
    }, 

    getBars: async(symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) =>{
        const { from, to, firstDataRequest } = periodParams;
        try{
        
            const response2 = await axios.get(
                'https://www.api.bscspotter.com/chart/'+baseCurrency)

                const data = await response2.data
                if (response2.response && response2.response === 'Error' || response2.data.length === 0) {
                    // "noData" should be set if there is no data in the requested period.
                    onHistoryCallback([], { noData: true });
                    return;
                }
   
           
                let arr = [];
                let arr2 = [];
                    for (var i=0; i < data.length; i++) 
                        
                           
                           arr.push(data[i].timeInterval.minute)
                           
                            var dates_split = JSON.stringify(arr)
                            var dates_string= dates_split.split(",")
                            var dates_string2=JSON.stringify(dates_string)
                            var time_string_clean = dates_string2.replace(/["\"[\\\"\00Z\\"\""]+/g,'')
                            var dates_split2 = time_string_clean.split(",")
                            var time_date_xyz = time_string_clean.substring(0, 10)
                            var unix = new Date(time_date_xyz).getTime() / 1000
                            for(var i=0; i < dates_split2.length; i++) {
                                dates_split2[i] = dates_split2[i].substring(0, 10);
                               arr2.push((new Date(dates_split2[i]).getTime() / 1000))
                               }
                               let uniqueChars = [...new Set(arr2)];
                              
                               
                           
                           
                            const bnb_ohlc_response= await axios.get('https://www.api.bscspotter.com/bnb_ohlc')
                            var bnb_ohlc_data = bnb_ohlc_response.data
                         var arr4 =  bnb_ohlc_data
                        var arr3= uniqueChars
                       var index = arr3.map(x => {
                            return arr4.find(y => x == y[0]);
                        })
                    
                        
                        function isBigEnough(value) {
                            return value >-1
                          }

                           let filtered =index.filter(isBigEnough)
                        

                       
                        
                       let unix_to_normal = index.map(x=>
                      [ ((((new Date(x[0]*1000)).toISOString().split('T')))+","+x[4]).split(',')])
                        const flattened = unix_to_normal.flatMap(num => num)
                     
       //+','+y[3]*x.volume+','+y[3]*x.high+','+y[3]*x.low+','+y[3]*x.low
                   
       const multiplierObj = flattened.reduce((accumu, current) => {
        accumu[current[0]] = current[2];
        return accumu;
      }, {});
     
      const bnb_token_ohlc = data.map(datum => {
        const minute = datum.timeInterval.minute.substring(0, 10);
        const found = multiplierObj[minute];
        const multiplier = found ? found : 1;
        return {
          ...datum,
          volume: datum.volume * multiplier,
          high: datum.high * multiplier,
          low: datum.low * multiplier,
          open: datum.open * multiplier,
          close: datum.close * multiplier,
          time: new Date(datum.timeInterval.minute).getTime()/1000
         
        }
      });
    

     let bars = [];
  
     bnb_token_ohlc.forEach(bar => {
        if (bar.time>= from && bar.time < to)  {
            bars = [...bars, {
                time: new Date(bar.timeInterval.minute).getTime(),
                low: bar.low,
                high: bar.high,
                open: bar.open,
                close: bar.close,
                volume: bar.volume,
                
            }];
        }
    });
    

    if (firstDataRequest) {
        lastBarsCache.set(symbolInfo.full_name, {
            ...bars[bars.length - 1],
        });
    }
           
  
   
    setTimeout(() => onHistoryCallback(bars, { noData: bars.length === 0 }));
        } catch(err){
            console.log({err})
        }
    },
    
})