import express from "express";
import {registerController,loginController, testController,forgotPasswordController,updateProfileController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register',registerController)
  
//Login || POST
router.post('/login', loginController)

// Forgot password || Post
router.post("/login", forgotPasswordController);

//tesr routes
router.get('/test',requireSignIn,  isAdmin, testController);

// protected user route auth
router.get("/user-auth", requireSignIn, (req,res)=>{
    res.status(200).send({ok:true});
});

// protected admin route auth
router.get("/admin-auth", requireSignIn, (req,res)=>{
    res.status(200).send({ok:true});
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);
export default router;