var z = setInterval (function(){
var eid = new Date("20 july, 2021").getTime()


var today = new Date().getTime()

diff = eid - today
// console.log(diff)

 days = Math.floor(diff /(1000*60*60*24))
hours = Math.floor((diff % (1000*60*60*24))  / (1000*60*60))
