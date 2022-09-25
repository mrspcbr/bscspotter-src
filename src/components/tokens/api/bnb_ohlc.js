async function bnb_ohlc(){
const response2 = await axios.get(
    'https://www.api.bscspotter.com/chart/'+baseCurrency)

    var data = response2.data
    var results_max =[]
    const uniqueIds = [];

    for (var i =0; i<data.length;i++)
                 results_max.push(data[i].timeInterval.minute)
              var  x_max_string= JSON.stringify(results_max)
           var time_stamp = x_max_string.split(",")
var time_stamp_int = []
for (var i =0; i<time_stamp.length;i++)
   var time_string= JSON.stringify(time_stamp[i])
  
   var time_string_clean = time_string.replace(/["\"[\\\"\\\"\""]+/g,'')
    var time_date_xyz = time_string_clean.substring(0, 10)

    uniqueIds.push(time_date_xyz)
    const unique = uniqueIds.filter(element => {
        const isDuplicate = time_stamp_int.includes(element)
      
        if (!isDuplicate) {
            
            time_stamp_int.push(element);
      
          return true;
        }
      
        return false;
      });
      console.log(time_stamp_int)
       

      
        

       
}
