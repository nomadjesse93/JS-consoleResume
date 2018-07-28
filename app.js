let myname=("Jesse Sanderson")
console.log(myname.toUpperCase())

console.log("Career: Full Stack Developer")

console.log("Description: Living in Thailand learning to code")

function displayInterests(){
    for (i = 0; i < interests.length; i++){
        console.log(interests[i].name)
    }
}
 
console.log(   )

let int =("my interests")
console.log(int.toUpperCase())

let interests=[
    {name:"Flying Fpv Drones"},
    {name:"The crushing weight of knowing existence is meaningless"},
    {name:"All things code"},
    {name:"Hunting/Firearms"},
    {name:"The vast indifferent universe"}
]

displayInterests()

function displayPosition(){
    for(p = 0; p < position.length; p++){
        console.log("Company: " + position[p].name)
        console.log("Title: " + position[p].title)
        console.log("Description: " + position[p].description)
    }
}

console.log(    )

let workexp = ("my Previous Work Experience")
console.log(workexp.toUpperCase())

let position = [

    {name:"Pronto Worx Roofing", title:"Lead Hand", description:"I was responsable for all aspects of asphalt roofing."},
    {name:"Safeway Consulting", title:"Field Technician", description:"I maintained gas monitoring equipment, fire safety gear, and performed safety watch on a variety of sites. "}


]

displayPosition()

console.log(   )

let myskill=("my Skills")
console.log(myskill.toUpperCase())

let skills=[
    {name: "Flying Fpv race drones", iscool:true },
    {name:"Roofing Ninja", iscool:false},
    {name:"Speaks to Platypus", iscool:false},
    {name:"Html, css", iscool:false},
    {name:"Immune to jellyfish", iscool:true}
]

displaySkills()

function  displaySkills(){
    for (s = 0; s < skills.length; s++){
        if (skills[s].iscool === true){
            console.log("BAM " + skills[s].name)
        }else {
            console.log(skills[s].name)
        }
    }

}