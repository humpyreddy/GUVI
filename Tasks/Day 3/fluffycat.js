var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }

   cat.height = 1
   cat.weight = 4
   cat.name = "Fluffyy"

  //Listing all the activities of the cat friends
   
  for(let i=0;i<cat.catFriends.length;i++){
      for(let j=0;j<cat.catFriends[i].activities.length;j++){
         // console.log(cat.catFriends[i].activities[j])
      }
  }


//Print the catFriends names.
  for(let i=0;i<cat.catFriends.length;i++){
    
       // console.log(cat.catFriends[i].name)
    
}

//Print the total weight of catFriends
weight = 0
for(let i=0;i<cat.catFriends.length;i++){
    
   weight += cat.catFriends[i].weight
   
 
}

console.log(weight)

//Print the total activities of all cats (op:6)

for(let j=0;j<cat.activities.length;j++){
    console.log(cat.activities[j])

}
for(let i=0;i<cat.catFriends.length;i++){
    
    for(let j=0;j<cat.catFriends[i].activities.length;j++){
        console.log(cat.catFriends[i].activities[j])
    }

}

//Add 2 more activities to bar & foo cats

cat.catFriends[0].activities.push("hike")
cat.catFriends[0].activities.push("swim")
cat.catFriends[1].activities.push("jump")
cat.catFriends[1].activities.push("twirl")


//Update the fur color of bar

for(let i=0;i<cat.catFriends.length;i++){
    if(cat.catFriends[i].name=='bar'){
        cat.catFriends[i].furcolor = 'black'
    }
}

