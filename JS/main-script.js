const VERSION = "1.1";
const VERSIONDATE = "2023-11-12";
const YEAR = "2023";
const COMPANY = "VSK1 GmbH";

main();

function main() 
{
    document.getElementById('footer').innerText = COMPANY + " " + YEAR + " " + "V" + VERSION;
}

let menu_value = 1;
function menu()
{
    menu_value++;
    if(menu_value % 2 == 0)
    {
        document.getElementById('menu-list-cont').innerHTML = '<div id="menu-list"><a href="">Zaloguj</a><a href="">Załóż konto</a><a href="">Settings</a></div>';
    } else {
        document.getElementById('menu-list-cont').innerText = '';
    } 
}
