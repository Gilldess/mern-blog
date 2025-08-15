import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link, Links } from "react-router-dom";

export default function SingUp() {
  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex gap-5 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-500 rounded-lg text-white">
              Shope
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            molestias quos autem similique rerum repellendus hic perspiciatis!
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label>Your name</Label>
              <TextInput type="text" placeholder="Username" id="name"/>
            </div>
            <div>
              <Label>Your email</Label>
              <TextInput type="text" placeholder="exsample@gmail.com" id="email"/>
            </div>
            <div>
              <Label>Your password</Label>
              <TextInput type="text" placeholder="Password" id="password"/>
            </div>
            <Button className="bg-gradient-to-r from-pink-500 via-purple-400 to-sky-500 hover:text-black" type="submit">
              Sing Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
