



const profs = [
    {
        id: 1, nom: 'MBAYE', semaine: '', modules: [1, 2, 3], plannings: [[
           { module: "Javascript",                                 
            classee: "DevWeb",
            sall: "101",
            hded: "8H",
            hfin: "10H",
            jour: 1,},
        ], [],[],[], [],[]]
    },
    {
        id: 2, nom: 'MOUSSA', semaine: '', modules: [6, 2, 3], plannings: [[], [], [], [],[],[]]
    },
    { id: 3, nom: 'MAR', semaine: '', modules: [4, 3, 5], plannings: [[], [], [], [],[],[]] },
    { id: 4, nom: 'THIORO', semaine: '', modules: [1, 4, 3], plannings: [[], [], [], [],[],[]] },
    { id: 5, nom: 'ADJA', semaine: '', modules: [1, 3], plannings: [[], [], [], [],[],[]] },
    { id: 6, nom: 'JEAN Mendy', semaine: '', modules: [1, 3], plannings: [[], [], [], [],[]] },
];



// console.log(profs[1].plannings);
const modules = [
    { id: 1, nom: 'Javascript', semaine: '', plannings: [[], [], [], [],[],[]] },
    { id: 2, nom: 'Python', semaine: '', plannings: [[], [], [], [],[],[]] },
    { id: 3, nom: 'Java', semaine: '', plannings: [[], [], [], [],[],[]] },
    { id: 4, nom: 'PHP', semaine: '', plannings: [[], [], [], [],[],[]] },
    { id: 5, nom: 'Merise', semaine: '', plannings: [[], [], [], [],[],[]] },
    { id: 6, nom: 'Arabe', semaine: '', plannings: [[], [], [], [],[],[]] },
];


const classes = [
    { id: 1, nom: 'DevWeb', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 30 },
    { id: 2, nom: 'Gl', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 29 },
    { id: 3, nom: 'Marketing', semaine: '', plannings:[[], [], [], [],[],[]], effectif: 50 },
    { id: 4, nom: 'Hackeuse', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 10 },
];

const salles = [
    { id: 1, nom: '101', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 30 },
    { id: 2, nom: '102', semaine: '', plannings:[[], [], [], [],[],[]], effectif: 29 },
    { id: 3, nom: '103', semaine: '', plannings:[[], [], [], [],[],[]], effectif: 50 },
    { id: 4, nom: '104', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 10 },


];



const select1 = document.getElementById("select1");
const btn_enseignants = document.getElementById("btn_Enseignants");
const btn_Salles = document.getElementById("btn_Salles");
const btn_Classes = document.getElementById("btn_Classes");
const btn_Modules = document.getElementById("btn_Modules");
const aly = document.querySelector(".aly");
const nbre_Enseig= document.querySelector("#nbre_Enseig")
const nbre_Salles = document.querySelector("#nbre_Salles");
const nbre_Classes = document.querySelector("#nbre_Classes");
const nbre_Modules = document.querySelector("#nbre_Modules");
const chooseTeacher = document.querySelector("#chooseTeacher");
const chooseModule = document.querySelector("#chooseModule");

chooseModule.addEventListener("change", ()=>{
    profs.forEach(prof => {
        
        if(getNameIfidinclude(getIdWithName(chooseModule.value,modules),prof)!=="")      
        {
            //console.log(getNameIfidinclude(getIdWithName(chooseTeacher.value,modules),prof))
            let option = document.createElement("option")
                option.innerText =getNameIfidinclude(getIdWithName(chooseModule.value,modules),prof);

                chooseTeacher.appendChild(option);


        }  
    });

})



nbre_Modules.innerText= modules.length;
nbre_Salles.innerText = salles.length;
nbre_Enseig.innerText =  profs.length
nbre_Classes.innerText = classes.length;

btn_enseignants.addEventListener("click", ()=>{
    creatOptionInselect(profs,"Enseignants",select1);
})
btn_Classes.addEventListener("click", ()=>{
    creatOptionInselect(classes,"Classes",select1);
})
btn_Salles.addEventListener("click", ()=>{
    creatOptionInselect(salles,"Salles",select1);
})
btn_Modules.addEventListener("click", ()=>{
    creatOptionInselect(modules,"Modules",select1);
})

    select1.addEventListener("change", ()=> {
    if(select1.innerText !== "Classes" && select1.innerText !== "Salles" && select1.innerText !== "Modules" && select1.innerText !== "Enseignants")
    {
        aly.innerText = select1.value;
    }
});

creatOptionInselect(modules,"Choisir un module",chooseModule)



function creatOptionInselect(tab,strings,select)
{
    select.innerText = "";
    let option = document.createElement("option");
        option.innerText = strings;
        select.appendChild(option)
    tab.forEach(element => {
        let options = document.createElement("option");
            options.innerText = element.nom;

        select.appendChild(options);
        
    });

}


function getIdWithName(name,tab)
{
    let id= "";
    tab.forEach(mod => {
        if(mod.nom === name)
        {
            id += mod.id
        }
        
    });
    return parseInt(id)
}


// fonction qui return le nom si l'id est inclue dans la clée module 
function getNameIfidinclude(id, objet)
{
    let name="";
    objet.modules.forEach(ele => {
        if(ele===id)
        {
            name += objet.nom
        }
        
    });
    return name
}
// console.log(getNameIfidinclude(1,profs[3]))

