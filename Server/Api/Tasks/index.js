import express from "express";

import { TaskModel } from "../../database/Tasks";

const Router = express.Router();

/*
Route       /
Des         Get all tasks
Params      None
Access      Public
Method      GET
*/

Router.get("/", async (req, res) => {
  try {
    const tasks = await TaskModel.find();

    return res.json({ tasks });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /:title
Des         Get specific task
Params      None
Access      Public
Method      GET
*/

Router.get("/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const task = await TaskModel.find({
      title: { $regex: title, $options: "i" },
    });

    return res.json({ task });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /new
Des         add new task
Params      None
Access      Public
Method      POST
*/

Router.post("/new", async (req, res) => {
  try {
    const task = req.body;

    await TaskModel.create(task);

    return res.json({ task: "Successfully created Task" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /update/
Des         update specific task
Params      None
Access      Public
Method      PUT
*/

Router.put("/update/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const { TaskData } = req.body;

    const updateTaskData = await TaskModel.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        $set: TaskData,
      },
      {
        new: true,
      }
    );

    return res.json({ task: updateTaskData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /delete/
Des         delete specific task
Params      None
Access      Public
Method      DELETE
*/

Router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;


    const deleteTaskData = await TaskModel.findOneAndDelete({
      _id: _id,
    });

    return res.json({ task: deleteTaskData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
