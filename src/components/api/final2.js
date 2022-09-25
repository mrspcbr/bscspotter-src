 try {
            const data = await axios.get(
                'https://www.api.bscspotter.com/chart/'+baseCurrency);
            if (data.response && data.response === 'Error' || data.data.length === 0) {
                // "noData" should be set if there is no data in the requested period.
                onHistoryCallback([], { noData: true });
                return;
            }

            var response_results = data.data
            let arr = [];
            let arr2 = [];
                for (var i=0; i < response_results.length; i++) 
                    
                       
                       arr.push(response_results[i].timeInterval.minute)
                       
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
      time: new Date(datum.timeInterval.minute).getTime()
     
    }
  });

console.log(bnb_token_ohlc)


            


            let bars = [];
            data.Data.forEach(bar => {
                if (bar.time >= from && bar.time < to) {
                    bars = [...bars, {
                        time: bar.time * 1000,
                        low: bar.low,
                        high: bar.high,
                        open: bar.open,
                        close: bar.close,
                    }];
                }
            });
            console.log(`[getBars]: returned ${bars.length} bar(s)`);
            onHistoryCallback(bars, { noData: false });
        } catch (error) {
            console.log('[getBars]: Get error', error);
            onErrorCallback(error);
        }
    