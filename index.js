// Code your solution here:
function driversWithRevenueOver(drivers,rev){
  return drivers.filter(function(element){
    return element.revenue > rev
  })
}