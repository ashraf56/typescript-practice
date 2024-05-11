# Mongodb query

```javascript
//Find only age 17 data from collection
db.test.find({age:17})
// find data by filtering
db.test.find({gender:'Male'},{name:1,gender:1})
// 2nd way
db.test.find({gender:'Male'}).project({
   name:1,gender:1,phone:1
 })
//$gt $ne $eq
 db.test.find({age:{$gte: 16}}).sort({ age:1 })
//implicit and
 db.test.find({
    gender:"Female",
    age:{$gte:16 , $lte:30},
    
}, 
  {name:1,age:1,gender:1}
).sort({ age:1 })

//$in oparator 
db.test.find({
    gender:"Female",
    age:{$in:[16,18,20,24]},
    
}, 
  {name:1,age:1,gender:1}
).sort({ age:1 })


// explicit and

db.test.find(
    {
        $and: [

           {'skills.name':"JAVASCRIPT"},
           {'skills.name':"C"}

        ]

    }
).project({age:1,skills:1})


// Update for premitive and object = $set,
// Array update= $addtoset and $push. For remove $pop. $pull, $pullAll