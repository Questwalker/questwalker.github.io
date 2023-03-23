$(document).ready(function(){
    $('table td').each(function(){
        // Types
        if ($(this).text() == 'Melee') {
            $(this).css('color', '#fe1c12');
        } else if ($(this).text() == 'Range') {
            $(this).css('color', '#bc12fd');
        } else if ($(this).text() == 'Armor') {
            $(this).css('color', '#188eff');
        } else if ($(this).text() == 'Pet') {
            $(this).css('color', '#80e125');
        } else if ($(this).text() == 'Skin') {
            $(this).css('color', '#fee000');
        }
        // Rarities
        else if ($(this).text() == 'Common') {
            $(this).css('color', '#dad5d1');
        } else if ($(this).text() == 'Rare') {
            $(this).css('color', '#abddaa');
        } else if ($(this).text() == 'Unique') {
            $(this).css('color', '#cc5d15');
        }
        // code-128
        else if (($(this).text().length) == 8) {
            $(this).css('font-family', 'consolas');
        }
    });
});