
const button = document.getElementById("btn");
const select = document.getElementById("game");

button.addEventListener('click',choices);


function choices (){

const selectedGame = select.value;

let videoUrl ;

switch(selectedGame){
    case "rdr2":
        videoUrl = "https://www.youtube.com/playlist?list=PLe7VjvWOHpLnUr_-nAKAHchHqQpW3olP7"
        break;

    case "witcher3":
        videoUrl = "https://www.youtube.com/watch?v=cn_taKva-AQ"
        break; 
    
    case  "gta5":
        videoUrl ="https://www.youtube.com/watch?v=JLqHbLkv_pQ"
        break;
    
    case "skyrim":
        videoUrl = "https://www.youtube.com/watch?v=o7o-G7by7x0"
        break;

    case "halo5":
        videoUrl = "https://www.youtube.com/shorts/exLXfpnzvbY"
        break;

        default:
      videoUrl = "";
      break;
    
}
if (videoUrl !== "") {
    window.open(videoUrl,'_blank')
}
}



