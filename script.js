$(function(){

    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = -1,

        init = function(){
            $mainMenuItems.children(".images").click(function(){
//je veux l'index de mon li (qui comprend l'image, la description) quand je clique sur mon image
//car le parent de mon image est le li
                var newIndex = $(this).parent().index(),
//item = li sur lequel on a cliqué,
//c'est à partir de $mainMenuItems qui répertorie tous mes li
//grace à eq il va sélectionner l'index du li cliqué (correspondant à newIndex)
                $item = $mainMenuItems.eq(newIndex);
                animateItem($item, true, 250);
//mise à jour de la var openIndex
                openedIndex =newIndex;

            });

        };
//ouverture de la description
//l'item que je veux animer, toOpen=bool, la vitesse
        animateItem =function($item, toOpen, speed){

            var $colorImage = $item.find(".color"),
//toOpen est-il true or false; expression ? Valeur1 (si true) :Valeur2(si false)
//itemParam soit = à width 420px (true) width 140px(false)
            itemParam = toOpen ?{width:"420px"}: {width:"140px"},
// quand on ouvre l'img coloré sera à 0px  sinon à 140px (dc disparait à droite)
            colorImageParam =toOpen ? {left:"0px"} :{left:"140px"};



            $colorImage.animate(colorImageParam,speed);
            $item.animate(itemParam,speed);

        };

        init();

        });









