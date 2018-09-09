function findMatching(drivers,name){
  return drivers.filter(function(driver){
    return driver.toUpperCase() === name.toUpperCase()
  })
}


function fuzzyMatch(drivers, strpart){
  let part = strpart.length;
  return drivers.filter(function(driver){
    return driver.slice(0,part) === strpart;
  })
}

function matchName(drivers, compareName){
  return drivers.filter(function(driver){
    return driver.name.toUpperCase() === compareName.toUpperCase();
  })
}
