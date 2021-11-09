
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
var menuDict3 = { "Appetizers" : [
    [1, "에그 롤", "Egg Roll", "3 pieces", "4.50"],
    [2, "야끼 만두", "Fried Dumplings", "5 pieces", "4.50"],
    [3, "파전", "Pa Jeon", "Seafood with Green Onion Pancake", "12.99"],
    [4, "김치전", "Kimchi Jeon", "Kimichi with Green Onion Pancake", "11.99"],
    [5, "연어 사시미", "Salmon Sashimi", "description", "18.99"]
    
],
"Snack" : [
    [6, "자장면", "Ja Jang Myeon", "Noodle with Stir fried black bean paste", "12.99"],
    [7, "짬뽕", "Jjam Bbong", "Spicy Seafood Noodle Soup", "14.99"],
    [8, "돈까스", "Tonkatsu", "Japanese style pork Cutlet", "13.99"],
    [9, "비빔밥", "Bibimbab", "Rice with mixed vegetable and beef", "11.99"],
    [10, "돌솥 비빔밥 ", "Dolsot-Bibimbab", "Bibimbab with Sizzling stone pot", "13.99"],
    [11, "볶음밥", "Fried Rice", "Combination beef, pork, chicken, vegetable", "11.99"]
],
"Soup" : [
    [9, "만두국", "Mandoo Soup", "Beef Dumpling Soup", "10.99"],
    [9, "떡만두국", "DDock Mandoo Soup", "Beef Dumpling Soup with ricecake", "12.99"],
    [9, "갈비탕", "Galbi Tang", "Short Rib Soup", "13.99"],
    [9, "우거지 갈비탕", "Ugeoji Glabitang", "Galbitang with napa cabbage", "13.99"],
    [9, "설렁탕", "Sullung Tang", "Ox Bone Soup", "12.99"],
    [9, "육개장", "Yokgaejang", "Spicy shredded beef soup", "13.99"],
    [9, "동태 매운탕", "Daegoo Maewoon Tang", "Spicy cod soup with vegetable and tofu", "14.99"],
    [9, "알탕", "Al Tang", "Spicy cod roe soup with vegetable and tofu", "14.99"],
    [9, "된장 찌개", "Dwanjang Jjigae", "Soybean stew with beef, tofu, and vegetable", "11.99"],
    [9, "김치 찌개", "Kimchi Jjigae", "Spicy kimichi soup with tofu and vegetable", "11.99"],
    [9, "순두부 찌개", "Soon Dooboo Jjigae", "Spicy soft tofu with vegie, beef, pork, seafood, or combo", "12.99"]
],
"Simmer" : [
    [9, "고등어 조림", "Godeungeo Jorim", "Braised mackerel with radish and spicy sauce", "28.99"],
    [9, "갈치 조림", "Galchi Jorim", "Braised hairtail fish with radish and spicy sauce", "28.99"]
],
"BBQ" : [
    [9, "닭 불고기", "Chicken Boolgogi", "Korean Chicken BBQ", "13.99"],
    [9, "돼지 불고기", "Pork Boolgogi", "Korean Pork BBQ", "13.99"],
    [9, "소 불고기", "Beef Boolgogi", "Korean Beef BBQ", "13.99"],
    [9, "오징어 볶음", "Ojingeo Bbockum", "Spicy squid stir fry with vegetable", "15.99"],
    [9, "LA 갈비", "LA Galbi", "Marinated Beef Short Ribs BBQ", "19.99"],
    [9, "갈비 정식", "Galbi Jungsik", "Galbi and one of spicy soft tofu soup, dwanjang jjigae or cold noodles", "20.99"],
    [9, "고등어 구이", "Grilled Mackeral", "description", "14.99"],
    //[9, "조기 구이", "Grilled yellow Croaker", "description", "price"],
    [9, "연어 구이", "Grilled Salmon", "description", "14.99"],
    [9, "잡채", "Jabchae", "Stired noodle with beef and vegetable", "13.99"],
    [9, "치킨 데리야끼", "Chicken Teriyaki", "description", "13.99"],
    [9, "연어 데리야끼", "Salmon Teriyaki", "description", "14.99"]
],
"Grill" : [
    [9, "흑돼지 삼겹살", "Sliced Black Pork", "description", "22.99"],
    [9, "생갈비", "Fresh Sliced Beef Short Ribs", "description", "32.99"],
    [9, "양념 갈비", "Marinated Sliced Beef Short Ribs", "description", "32.99"]
],
"Casserole" : [
    [9, "부대 전골", "Boodae Jeongol", "Spicy casserole with kimchi, sausage, spam, pork, and tofu (for 2)", "29.99"],
    [9, "곱창 전골", "Gobchang Jeongol", "Spicy casserole with beef intestine and vegetable (for 2)", "30.99"],
    [9, "해물 전골", "Haemool Jeongol", "Spicy seafood casserole with vegetable (for 2)", "35.99"]
],
"Cold Noodles" : [
    [9, "물 냉면", "Mool Nangmyeon", "Iced noodle in cold beef broth", "12.99"],
    [9, "비빔 냉면", "Bibim Nangmyeon", "Iced noodle with spicy sauce", "12.99"],
    [9, "회 냉면", "Hoe Nangmyeon", "Iced noodle with raw fish and spicy sauce", "13.99"]
],
"Vegetarian" : [
    [4, "간장 두부", "Ganjang Tofu", "Fresh tofu with soysauce", "9.99"],
    [5, "두부 야채 볶음", "Dooboo Yachae Bockum", "Fresh tofu with stir fry vegetable", "12.99"],
    [4, "야채 비빔밥", "Yachae Bibimbab", "Bibimbab with vegetable and tofu", "11.99"],
    [4, "야채 돌솥 비빔밥", "Yache Dolsot Bibimbab", "Yache Bibimbab with sizzling stone pot", "13.99"]
],
"Porridge" : [
    [4, "잣죽", "Jat Jook", "Pine Nut Porridge", "11.99"],
    [5, "버섯굴죽", "Beosut Gool Jook", "Mushroom & Oyster Porridge", "11.99"],
    [4, "야채죽", "Yachae Jook", "Vegetable Porridge", "11.99"],
    [5, "전복죽", "Jeonbok Jook", "Abalone Porridge", "11.99"]
],
"Drinks" : [
    [4, "Korean Traditional Alcohol",  "12.99", "Soju", "Baekseju", "Makgeolli"],
    [5, "Soda",  "1.65", "Coke", "Sprite", "Dr. Pepper"],
    [5, "Beer",  "3.85", "Budweiser Light", "Miller Light", "XX", "Shinebuck", "Tshingtao"]
]
};

!(function($) {
    "use strict";
    console.log("this opened");

    function menuItems(){
        console.log("functin was called")
        $.each(menuDict3, function(i, j, x, y, l) {
            //console.log('i', i)
            //console.log('length', j.length)
            if (i == "Cold Noodles") {
                //console.log('COLD NOODLES')
                var sectionTitle = '<div id="Cold-Noodles"><h1 class="sectionHeading">'+ i +'</h1><hr color="#BF0A2F" style="margin-bottom: 0;"></div>' 
            }
            else {
                var sectionTitle = '<div id="'+ i +'"><h1 class="sectionHeading">'+ i +'</h1><hr color="#BF0A2F" style="margin-bottom: 0;"></div>'
            }

            var menuItemTotal = ''
            for (x=0; x < j.length; x++){
                //console.log(i)
                if (i =="Drinks"){
                    //console.log("DRINKS")
                    //console.log("j[x]", j[x][1])
                    if (j[x][1] == "Beer") {
                        //console.log ("BEER")
                        var drinks2 = '<div id="menuCard" class="col-lg-4 col-md-6 col-12" style="padding: 0 8px !important;"><div class="card" ><div class="card-header"><div class="row"><h5 id="koreanName" class="col-9 drink-card-title">' + j[x][1] + '</h5><p id="price" class="col-3 drink-card-title" style="padding-left: 0 !important; text-align: right;">$' + j[x][2] + '</p></div></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ j[x][3] +'</li><li class="list-group-item">' + j[x][4] + '</li><li class="list-group-item">' + j[x][5] + '</li><li class="list-group-item">' + j[x][6] + '</li><li class="list-group-item">' + j[x][7] + '</li></ul></div></div>'
                        menuItemTotal = menuItemTotal.concat(drinks2)
                    }
                    else {
                        //console.log ("NOT")
                        var drinks1 = '<div id="menuCard" class="col-lg-4 col-md-6 col-12" style="padding: 0 8px !important;"><div class="card" ><div class="card-header"><div class="row"><h5 id="koreanName" class="col-9 drink-card-title">' + j[x][1] + '</h5><p id="price" class="col-3 drink-card-title" style="padding-left: 0 !important; text-align: right;">$' + j[x][2] + '</p></div></div><ul class="list-group list-group-flush"><li class="list-group-item">'+ j[x][3] +'</li><li class="list-group-item">' + j[x][4] + '</li><li class="list-group-item">' + j[x][5] + '</li></ul></div></div>'
                        menuItemTotal = menuItemTotal.concat(drinks1)
                    }
                }
                else {
                    var menuItem = '<div id="menuCard" class="col-xl-4 col-lg-6 col-md-6 col-12" style="padding: 0 8px !important;"> <div class="card" style="max-width: 540px;"> <div class="row no-gutters">    <div class="col-xl-5 col-lg-4 col-md-5 col-sm-5 col-5"><img id="itemImg" src="assets/manna_imgs/menu-imgs/Item-img@3x.png" class="card-img" alt="..."></div>      <div class="col-xl-7 col-lg-8 col-md-7 col-sm-7 col-7">  <div class="card-body"><div class="row"> <h5 id="koreanName" class="col-7 card-title" style="padding-right: 0 !important; text-align: left;">' + j[x][1] + '</h5><p id="price" class="col-5 card-title" style="padding-left: 0 !important; text-align: right;">$' + j[x][4] + '</p> </div>   <h6 id="englishName" class="card-text">' + j[x][2] + '</h6>   <p id="description" class="card-text"><small class="text-muted">' + j[x][3] + '</small></p>   </div>  </div> </div>  </div> </div>'
                    //console.log('ajdlkfaj',menuItemTotal.concat(menuItem))
                    menuItemTotal = menuItemTotal.concat(menuItem)
                }
            }
            
            var total = '<section id="here" style="padding: 35px 0px;"></section>' + sectionTitle + '<div id="addCards" class="row">' + menuItemTotal + '</div>'
            //console.log(total)
            $('#menuSection').append(total)
          })

    }

    $(window).on('load', function() {
        menuItems();
    });

    
})(jQuery);



   