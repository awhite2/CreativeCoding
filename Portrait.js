let portraits = []

function preload(){
    let json = loadJSON('portraits.json',
                        loadPortraits,
                        function(){print("err")});

}

function setup(){


}

function draw(){


}
function loadPortraits(data){
    for(var i = 0; i<data.portraits.length; i++){
        let name = data.portraits[i].name;
        let posx = data.portraits[i].posx;
        let posy = data.portraits[i].posy;
        let landscape = data.portraits[i].landscape;
        portraits.push(new Portrait(name, posx, posy, landscape));
    }
    print(portraits);
}