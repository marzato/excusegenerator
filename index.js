window.onload = () => {
    document.querySelector("#btn").addEventListener("click",() => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
    });
    console.log("hello excuse");
};

let generateExcuse = () => {

    let who=["My Mom","My Dad","My Sister"];
    let action=["Destroy","throw it away","Hidden"];
    let object=["My homework","My breakfast","My shoes"];
    let where=["This morning","this afternoon","Tonight"];

    let whoRdm=Math.floor(Math.random()* who.length);
    let actRdm=Math.floor(Math.random()* action.length);
    let objRdm=Math.floor(Math.random()* object.length);
    let wheRdm=Math.floor(Math.random()* where.length);

    return who[whoRdm]+" "+action[actRdm]+" "+object[objRdm]+" "+where[wheRdm];
};