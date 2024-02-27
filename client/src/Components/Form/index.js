import React from "react";
import { LuListTodo } from "react-icons/lu";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = async () => {
    if (title === "" || description === "") {
      alert("Enter the fields");
    } else {
      const postData = {
        title,
        description,
      };

      await axios.post("/task/new", postData);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <>
      <div class="relative flex items-top justify-center min-h-screen bg-basic-50 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div class="mt-8 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  TO-DO-LIST
                </h1>
                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the fields to add tasks
                </p>
                <LuListTodo className="text-8xl ml-12 mt-8 md:ml-16 lg:ml-24" />
              </div>

              <div class="p-6 flex flex-col justify-center">
                <div class="flex flex-col">
                  <label for="name" class="hidden">
                    Title
                  </label>
                  <input
                    id="title"
                    placeholder="Title"
                    value={title}
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div class="flex flex-col mt-2">
                  <label for="email" class="hidden">
                    Description
                  </label>
                  <textarea
                    id="desc"
                    placeholder="Description"
                    row="6"
                    value={description}
                    class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button
                  class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                  onClick={submitForm}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
