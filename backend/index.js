const express=require("express")
const { connection } = require("./db")
const { Configuration, OpenAIApi } = require("openai");
const bodyParser =require("body-parser")
require("dotenv").config()
const cors = require('cors')

const configuration = new Configuration({
	organization:process.env.organization,
	apiKey:process.env.apiKey,
});
const openai = new OpenAIApi(configuration);

const { userRouter } = require("./routes/user.routes")
const { postRotuter } = require("./routes/post.routes")

const app=express()

app.use(bodyParser.json());
app.use(cors())
app.use(express.json())

// #### USER ROUTER ######
app.use("/users",userRouter)

// #### POST ROUTER ######
app.use("/posts",postRotuter)



app.post("/", async (req, res) => {

	const { message } = req.body;
try {
    
    console.log(message)
	const completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [
			{role:"user",content:`${message}`}
		]
	})

	res.json({
		completion: completion.data.choices[0].message
	})
} catch (error) {
    res.send(error.message)
}
	

});



app.listen(process.env.PORT,async()=>{
    try {
    await connection
    console.log(`Server is Running at ${process.env.PORT}`)
    console.log(">>>>>>>>>>>>Connected To DB>>>>>>>>>>>>>>")
    } catch (error) {
        console.log(error.message)
    }
})

