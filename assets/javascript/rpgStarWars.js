$(document).ready(function(){
    var characters = {
        "Obi_wan Kenobi": {
            name: "Obi-Wan Kenobi",
            health: 120,
            attack: 8,
            imageUrl: "assets/images/obiwan.jpg",
            enemyAttackBack: 15
        },
        "luke Skywalker": {
            name: "Luke Skywalker",
            health: 100,
            attack: 14,
            imageUrl: "assets/images/lukeskywalker.jpg",
            enemyAttackBack: 5,
        },
        "Darth Sidious": {
            name: "Darth Sidious",
            health: 150,
            attack: 8,
            imageUrl: "assets/images/darthsidious.jpg",
            enemyAttackBack: 5
        },
        "Darth-Maul": {
            name: "Darth Maul",
            health: 180,
            attack: 7,
            imageUrl: "assets/images/darthmaul.jpg",
            enemyAttackBack: 25
        }
    };
    console.log(characters);
    // This function will render a character card to the page.
    // The character rendered and the area they are rendered to. 

    // This function handles the rendering of characters based on
    var renderCharacters = function(charObj, areaRender) {
        if (areaRender === "#character-section") {
            $(areaRender).empty();
            for (var key in charObj) {
                if(charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender);
                }
            }
        }  
    }
});