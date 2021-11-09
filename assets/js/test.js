var menuDict = { "Appetizers" : [
    { "item#" : 1, "koreanName" : "asldkfjasd", "englishName" : "ajldskfjasd", "description" : "jaldsfja", "price" : "$1.23"},
    { "item#" : 1, "koreanName" : "asldkfjasd", "englishName" : "ajldskfjasd", "description" : "jaldsfja", "price" : "$1.23"}
],
"Other" : [
    { "item#" : 1, "koreanName" : "asldkfjasd", "englishName" : "ajldskfjasd", "description" : "jaldsfja", "price" : "$1.23"},
    { "item#" : 1, "koreanName" : "asldkfjasd", "englishName" : "ajldskfjasd", "description" : "jaldsfja", "price" : "$1.23"}
]
};
console.log(menuDict["Appetizers"][0]["item#"])
for (const [key, value] of Object.entries(menuDict)) {
console.log(key, value)
}


var menuTitleArray = ["Appetizers", "Snack", "Soup", "Simmer", "BBQ", "Grill", "Casserole", "Cold Noodles", "Vegatarian", "Porridge", "Drinks" ];
var menuArray = [[
    [1, "koreanName", "englishName", "description", "price"],
    [2, "koreanName", "englishName", "description", "price"],
    [3, "koreanName", "englishName", "description", "price"]
], 
[
    [4, "koreanName", "englishName", "description", "price"],
    [5, "koreanName", "englishName", "description", "price"]
]
];





console.log("asdkfjaldskjfa", menuArray[0][0][2])
console.log("length", menuArray[0].length);

for (let x=0; x < menuArray.length; x++) {
console.log("x", menuArray[x])
for (let i=0; i < menuArray[x].length; i++)  {
    console.log("i", menuArray[x][i])
    for (let j=0; j < menuArray[x][i].length; j++) {
        console.log("j", menuArray[x][i][j])
    }
}
}



var menuDict2 = { "Appetizers" : [
[1, "koreanName1", "englishName", "description", "price"],
[2, "koreanName2", "englishName", "description", "price"],
[3, "koreanName3", "englishName", "description", "price"]
],
"Other" : [
[4, "koreanName", "englishName", "description", "price"],
[5, "koreanName", "englishName", "description", "price"]
]
};

//console.log(menuDict2)
//console.log(menuDict2["Appetizers"][0][1])
for (const [key, value] of Object.entries(menuDict2)) {
console.log("alkdjfads", key, value)
console.log("Section", key)
for (i=0; i < value.length; i++){
    console.log("appetizer i", i)
    console.log(value[i].length)
    for (let j=0; j < value[i].length; j++)  {
        console.log("j", value[i][j])
    }
}
};

arr = [{
"Name": "Peter",
"Job": "Programmer"
},
{
"Name": "John",
"Job": "Programmer"
},
{
"Name": "Kevin",
"Job": "Scientist"
},
];
console.log('arr[i].Name', arr[0].Name)
console.log('menuDict', menuDict2.Appetizers[2][1])
var sectionItems = menuDict2.Appetizers[2][1]





