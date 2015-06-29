var cities = [
    {name: 'Delhi', country: 'India'},
    {name: 'New York', country: 'USA'},
    {name: 'London', country:'England'}];

function add(city){
    for(var index = 0; index < cities.length; index++){
        if(cities[index].name === city.name){
            return -1;
        }
    }

    cities.push(city);
    return 0;
}

function getAll(){
    return cities;
}

function getOne(cityName){
    for(var index = 0; index < cities.length; index++){
        if(cities[index].name === cityName){
            return cities[index];
        }
    }

    return {};
}

function modify(city){
    for(var index = 0; index < cities.length; index++){
        if(cities[index].name === city.name){
            cities[index].country = city.country;
            return 0;
        }
    }

    return -1;
}

module.exports = {
    getAll: getAll,
    getOne: getOne,
    add:add,
    modify: modify
};