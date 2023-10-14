const VERSION = "0.3";
const VERSIONDATE = "2023-10-14";
const YEAR = "2023";
const COMPANY = "VSK1 GmbH";

main();

function main() 
{
    document.getElementById('footer').innerText = COMPANY + " " + YEAR + " " + "V" + VERSION;
}


