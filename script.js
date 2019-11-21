$(function(){

    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
//lorsque l'on recharge la page on veut voir l'item de jessica s'afficher
        openedIndex = 2,


        init = function(){
             bindEvents();
//on vérifie si opened index est valide
                if(validIndex(openedIndex))
                        animateItem($mainMenuItems.eq(openedIndex),true,700);


        },


        bindEvents =function(){
            $mainMenuItems.children(".images").click(function(){
//je veux l'index de mon li (qui comprend l'image, la description) quand je clique sur mon image
//car le parent de mon image est le li
                var newIndex = $(this).parent().index();
//item = li sur lequel on a cliqué,
//c'est à partir de $mainMenuItems qui répertorie tous mes li
//grace à eq il va sélectionner l'index du li cliqué (correspondant à newIndex)
                checkAndAnimateItem(newIndex);

            });
            $(".button").hover(
                function(){
                    $(this).addClass("hovered");
            },
                function(){
                    $(this).removeClass("hovered");
            }
            );

            $(".button").click(function(){
                var newIndex = $(this).index();
                //item = li sur lequel on a cliqué,
                //c'est à partir de $mainMenuItems qui répertorie tous mes li
                //grace à eq il va sélectionner l'index du li cliqué (correspondant à newIndex)
                checkAndAnimateItem(newIndex);
            });
        },


//ouverture de la description
// est ce l'index est valide?
        validIndex = function(indexTocheck){
        // indextocheck <= à 0
        return (indexTocheck >= 0)&& (indexTocheck <= totalMainMenuItems);
        }
//l'item que je veux animer, toOpen=bool, la vitesse
        animateItem =function($item, toOpen, speed){
                var $colorImage = $item.find(".color"),
//toOpen=> ouvert/fermé est-il true or false; expression ? Valeur1 (si true) :Valeur2(si false)
//itemParam soit = à width 420px (true) width 140px(false)
                itemParam = toOpen ?{width:"420px"}: {width:"140px"},
// quand on ouvre l'img coloré sera à 0px  sinon à 140px (dc disparait à droite)
                colorImageParam =toOpen ? {left:"0px"} :{left:"140px"};
                $colorImage.animate(colorImageParam,speed);
                $item.animate(itemParam,speed);
            },

            checkAndAnimateItem = function(indexToCheckAndAnimate){
//je verif si l'index était ouvert, je dois donc le fermer
                if(openedIndex === indexToCheckAndAnimate){
//quand je clique sur img coloré de l'item ouvert ça se referme
                    animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                    openedIndex=-1;
                }
                else{
                    if(validIndex(indexToCheckAndAnimate)){
                           animateItem($mainMenuItems.eq(openedIndex), false, 250);
                           openedIndex =indexToCheckAndAnimate;
                           animateItem($mainMenuItems.eq(openedIndex), true, 250);
                    }
                }

            };

        init();

        });








