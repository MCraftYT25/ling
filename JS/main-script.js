const VERSION = "0.5";
const VERSIONDATE = "2023-10-14";
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
        document.getElementById('menu-list-cont').innerHTML = '<div id="menu-list"><a>Zaloguj</a><a>Załóż konto</a><a>Settings</a></div>';
    } else {
        document.getElementById('menu-list-cont').innerText = '';
    } 
}
