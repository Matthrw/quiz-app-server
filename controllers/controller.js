import Questions from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"
import questions, {answers} from '../database/data.js'

// get all questions
export async function getQuestions(req, res) {
try {
  const q = await Questions.find();
  res.json(q)
} catch (error) {
  res.json({error})
}
}

// insert all questions


export async function insertQuestions(req, res) {
try {
  Questions.insertMany({
    questions, answers
  }, function(err, data) {
      res.json({msg:"data saved successfully"})   })
} catch (error) {
  res.json({error})
}
}

// delete all questions
export async function dropQuestions(req, res) {
try {
  await Questions.deleteMany();
  res.json({msg:"Questions Deleted Successfully!"})
} catch (error) {
  res.json({error})
}
}

// get all result
export async function getResult(req, res) {
try {
  const r = await Results.find();
  res.json(r);
} catch (error) {
  res.json({error})
}
}


// post all result
export async function storeResult(req, res) {
 try {
   const { username, result, attempts, points, achived } = req.body;
   if (!username && !result) throw new Error('Data Not Provided....!')
   Results.create({ username, result, attempts, points, achived }, function (err, data){
     res.json({msg:'result saved successfully'})
   });
 } catch (error) {
  res.json({error})
 }
}


// dleete all result
export async function dropResult(req, res) {
try {
  await Results.deleteMany();
  res.json({msg:"Result Deleted  Successfully..."})
} catch (error) {
  res.json({error})
}
}



// get all result
export async function getResults(req, res) {
try {
  const r = await Results.find();
  res.json(r);
} catch (error) {
  res.json({error})
}
}


// post all result
export async function storeResults(req, res) {
 try {
   const { username, result, attempts, points, achived } = req.body;
   if (!username && !result) throw new Error('Data Not Provided....!')
   Results.create({ username, result, attempts, points, achived }, function (err, data){
     res.json({msg:'result saved successfully'})
   });
 } catch (error) {
  res.json({error})
 }
}


// dleete all result
export async function dropResults(req, res) {
try {
  await Results.deleteMany();
  res.json({msg:"Result Deleted  Successfully..."})
} catch (error) {
  res.json({error})
}
}


export async  function authenticateAdmin(req, res, next){
  const { username, password } = req.headers;
  try {
    const question = await Questions.findOne({ 'admin.username': username, 'admin.password': password });
    if (!question) {
      throw new Error('Invalid admin credentials');
    }
    next();
  } catch (err) {
    res.status(401).send(err.message);
  }
}
