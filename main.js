let taxtak = [
    ["                1",  "  2", " 3",],
    [ "1 տող", "-", "-", "-"],
    [ "2 տող", "-", "-", "-"],
    [ "3 տող", "-", "-", "-"],
]

let arajiTox = (taxtak[1][1] && taxtak[1][2] && taxtak[1][3]);

let player  = "x";

while(true){ 
    let taxtakStr =         (taxtak  [ 0 ].join("    ") + 
                "\n"    
                            + taxtak [ 1 ].join("      ") +
                "\n"    
                            + taxtak [ 2 ].join("      ")
                            +
                "\n"    
                            + taxtak [ 3 ].join("      ")  );

 let tox = +prompt("Հարգելի օգտատեր, նշեք տողի արժեքը թվի տեսքով \n \n"  +taxtakStr); 

 let syun = +prompt("Հարգելի օգտատեր, նշեք սյան արժեքը թվի տեսքով \n \n"  +taxtakStr );

    if(taxtak[tox][syun] !== "-" ) {
        alert("iravunq chuneq aydpes qayli");
        break;
    }

     taxtak[tox][syun] = player;

     if(player === "x") {
        player = "o"
     } else {
        player = "x";
     }


        if(taxtak [1] === "x"){
            alert("stop")
        }


    //  if((taxtak[1][1] ,[1][2] , [1][3]) !== "x")  
    //    {
    //     true } else { 

    //     alert("stop")
    //     break
    //  } 
     
    //   {
    //     if ((taxtak[2][1] , taxtak[3][1] , taxtak[0][0]) !== "x"){
    //         true } else {
    //         alert("stopppp")
    //     }
    //  }
}



    //  if ((taxtak[1][1] && taxtak[1][2] && taxtak[1][3]) === "x")   {
    //     alert("stop")
    //     break
    //  }