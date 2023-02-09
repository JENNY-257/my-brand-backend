
import express from "express"
import mongoose from "mongoose"
import passport from "passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { userSchema } from "./models/User.js";
import bodyParser from 'body-parser';
import userRouter from "./routes/userRoutes.js";
import blogRouter from "./routes/blogRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import router from "./routes/commentRoutes.js"
mongoose.set('strictQuery', false);


mongoose
	.connect("mongodb+srv://admin:vmQRzg2k2kQt1nDb@cluster0.oiwfu8m.mongodb.net/blogs?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {

		const app = express()
app.use(
  bodyParser.json({
    limit: '50mb',
  }),
);
const secretKey = 'secretKey'
		const jwtOptions = {
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			// secretOrKey: process.env.JWT_SECRET
			secretOrKey: secretKey
		  };
		  passport.use(new Strategy(jwtOptions, function(jwt_payload, done) {
			// Check if the user exists in the database
			userSchema.findOne({id: jwt_payload.id}, function(err, user) {
			  if (err) {
				return done(err, false);
			  }
			  if (user) {
				return done(null, user);
			  } else {
				return done(null, false);
			  }
			});
		  }));

app.use(express.json())
app.use("/api/v1/users",userRouter);
app.use("/api/v1/blogs",blogRouter);
app.use("/api/v1/messages",messageRoutes);
app.use("/api/v1/comments",router);
		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})














    

