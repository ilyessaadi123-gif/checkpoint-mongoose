import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
async function main() {
    await mongoose.connect(process.env.MONGO_URL)

    const personSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            unique:true,
        },
        age:Number,
        favoriteFoods:[String],
    })
    const Person = mongoose.model("Person", personSchema)

    const prs1 = new Person({
        name:'ilyes',
        age:20,
        favoriteFoods:['pizza','burger']
    })
    //await prs1.save()
   // Person.create([
        //{name:'ahmed',age:22,favoriteFoods:['pasta','salade']},
       // {name:'mohamed',age:27,favoriteFoods:['sushi','hamburger']},

    //])
    const people = await Person.find()
    const prs2 = await Person.findOne({name:'ilyes'})
    const prs3 = await Person.findById('695d18aca39234b10c75b5f2')
    prs3.favoriteFoods.push('mlewi')
    //await prs3.save()
    //const res=await Person.findOneAndUpdate({name:'ilyes'},{$push:{favoriteFoods:'kafteji'}},{new:true})
    //await Person.findByIdAndDelete('695d18aca39234b10c75b5f2')
    mongoose.disconnect()
}
try {
    main()
}
catch (err) {
    console.log(err);
}


