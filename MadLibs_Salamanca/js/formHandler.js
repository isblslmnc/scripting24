function write(){
    console.log("write function is functional");



    var loc = document.getElementById('loc').value;
    var ver = document.getElementById('ver').value;
    var drvrname = document.getElementById('drvrname').value;
    var drvrname2 = document.getElementById('drvrname2').value;
    var colour = document.getElementById('colour').value;
    var rivaldrvrteam = document.getElementById('rivaldrvrteam').value;
    var rivaldrvrname1 = document.getElementById('rivaldrvrname1').value;
    var adv = document.getElementById('adv').value;
    var num = document.getElementById('num').value;
    var rivaldrvrname2 = document.getElementById('rivaldrvrname2').value;
    var rivaldrvrname3 = document.getElementById('rivaldrvrname3').value;


    var wea = document.querySelector('input[name="weather"]:checked').value;

    console.log(loc);
    console.log(ver);
    console.log(drvrname);
    console.log(drvrname2);
    console.log(colour);
    console.log(rivaldrvrteam);
    console.log(rivaldrvrname1);
    console.log(adv);
    console.log(num);
    console.log(rivaldrvrname2);
    console.log(rivaldrvrname3);


    var weaMessage;

    if(wea=="rainy"){
        weaMessage = "a rainy day.";
    }else if(wea=="sunny"){
        weaMessage = "a sunny day.";
    }

    console.log(weaMessage);

    document.getElementById('output').innerHTML = "It was "+weaMessage+" at the "+loc+" Grand Prix. The crowd was "+ver+" as "+drvrname+" led the race. Suddenly, "+drvrname2+" goes off the race track that caused a "+colour+" flag. The "+rivaldrvrteam+" team was devastated. Meanwhile, "+rivaldrvrname1+" was "+adv+" racing hard. With only "+num+" laps remaining, "+rivaldrvrname2+" gave his all, crossing the finish line. The crowd went wild as "+rivaldrvrname3+" claimed victory in the eventful race!"

}

