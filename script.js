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
                $item = $mainMenuItems.eq(newIndex),
//Je veux l'image coloré: trouve la class .color parmis les descendants dans mon li cliqué ($item)
                $colorImage = $item.find(".color");
//je veux faire apparaitre l'image coloré à place du b&w.
//pour le moment l'image colorée est à 140px dans le css
//on va la mettre à 0px pour la faire apparaitre
                $colorImage.animate({left:"0px"},250);
//Je veux ouvrir la description dont left est aussi à 140px (css)
//et son li a aussi pour largeur de 140px c'est pour ça que l'on a que l'image
//il faut donc augmenter la largeur du li qui est stocké dans $item
                $item.animate({width:"420px"},250);
//mise à jour de la var openIndex
                openedIndex =newIndex;

            });

        };

        init();

        });









