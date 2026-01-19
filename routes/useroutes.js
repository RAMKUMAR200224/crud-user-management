import express from "express";
import {
    create,
    fetch,
    fetchOne,
    updateUser,
    deleteUser
} from "../controller/usercontroller.js";

const route = express.Router();

route.post("/create", create);
route.get("/fetch", fetch);
route.get("/fetch/:id", fetchOne);
route.put("/update/:id", updateUser);
route.delete("/delete/:id", deleteUser);

export default route;