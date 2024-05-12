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


// problem 1
db.test.find({
    age:{$gt:30}
})
  .projection({name:1,email:1})
  .sort({age:1})
  
  problem 2 
  db.test.find({
      favoutiteColor:{$in: ["Maroon","Blue"]}
  })
     .projection({favoutiteColor:1})

// problem 2 
  db.test.find({
      favoutiteColor:{$in: ["Maroon","Blue"]}
  })
     .projection({favoutiteColor:1})



// problem3


db.test.find({skills:{$size:0}}).project({skills:1})
  

// Problem 4

db.test.find(
    {
        $and: [

          {'skills.name':"JAVASCRIPT"},
          {'skills.name':"JAVA"}

        ]

    }
).project({skills:1})



// problem 5 

db.test.updateOne({ _id: ObjectId('6406ad63fc13ae5a40000065') },
    {
        $set: {
            email: 'aminextleveldeveloper@gmail.com',


        },
        $addToSet: {
            skills: {
                $each: [{
                    "name": "Python"
                    ,
                    "level": "Beginner"
                    ,
                    "isLearning": true
                }]
            }
        }
        ,
    })


    //problem 6

db.test.updateOne(
    { _id: ObjectId('6406ad63fc13ae5a40000065')},

{$addToSet:{
    languages:{$each: ["Spanish"]}
}})
//problem 7

// db.test.updateMany(
//   { "skills.name": "KOTLIN" },
//   { $pull: { "skills": { "name": "KOTLIN" } } }
// )

