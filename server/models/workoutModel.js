const mongoose = require('mongoose');

//function to create a new schema 
const Schema = mongoose.Schema;

//schema defines the structure of a document inside db while a model applies that schema to a particular model and then use model to interact with a collection with that name 
//first argument describes how the schema looks 
//second argument automatically creates the timestamp property when you create a new document 
const workoutSchema = new Schema({
  description: { 
    type: String, 
    required: true 
  },
  duration: { 
    type: Number, 
    required: true
  },
  date: { 
    type: Date, 
    required: true 
  },
//associating every workout document to a specific user
user_id: {
  type: String,
  required: true
}
}, { timestamps: true })

// export module and say its equal to mongoose.model to create a new model and then you give the model a name (singular because it will pluralize it to create a workouts collection for you) and then pass in the schema 
module.exports = mongoose.model('Workout', workoutSchema)