import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    date: new Date(),
    timeHour: "",
    timeMinute: "",
    numberOfPax: "",
    note: "",
  });

  return (
    <div className="h-dvh w-dvw bg-white px-80 pt-10">
      <div className="h-full w-full">
        <div className="w-full flex justify-between">
          <svg
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            strokeWidth="1.5"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 cursor-pointer hover:stroke-yellow-400"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <svg
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            strokeWidth="1.5"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 cursor-pointer hover:stroke-yellow-400"
          >
            <path
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <hr className="border border-black mt-4" />
        <div>
          <div className="flex items-center pt-4 ml-4 cursor-pointer group">
            <svg
              data-slot="icon"
              aria-hidden="true"
              fill="none"
              strokeWidth="1.5"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 group-hover:stroke-red-500"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="text-2xl group-hover:text-red-500">Cancel</p>
          </div>

          <div className="w-4/5 rounded-lg bg-green-950 text-white mx-auto mt-4 mb-20">
            <div className="pt-4 w-full text-center">
              <h1 className="font-bold text-4xl text-[#F4CE14]">
                Little Lemon
              </h1>
              <p className="text-xl">Reserve a Table</p>
            </div>
            <div className="w-4/5 mx-auto h-full flex flex-col items-center space-y-4 pb-8">
              <div className="w-full text-start gap-1.5">
                <Label htmlFor="name">Name:</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="rounded-lg w-full text-black"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="rounded-lg w-full text-black"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="w-full flex flex-col items-center">
                <div>
                  <Label className="mr-2 w-full">Date:</Label>
                  <Calendar
                    mode="single"
                    selected={data.date}
                    onSelect={(date) => setData({ ...data, date })}
                    className="rounded-md border bg-white text-black w-fit"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label>Time:</Label>
                <div className="w-full grid grid-cols-2 gap-4">
                  <Select
                    value={data.timeHour}
                    onValueChange={(value) =>
                      setData((prevData) => ({
                        ...prevData,
                        timeHour: value,
                      }))
                    }
                  >
                    <SelectTrigger className="w-full text-black">
                      <SelectValue placeholder="Hour" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09 AM">09 AM</SelectItem>
                      <SelectItem value="10 AM">10 AM</SelectItem>
                      <SelectItem value="11 AM">11 AM</SelectItem>
                      <SelectItem value="12 PM">12 PM</SelectItem>
                      <SelectItem value="01 PM">01 PM</SelectItem>
                      <SelectItem value="02 PM">02 PM</SelectItem>
                      <SelectItem value="03 PM">03 PM</SelectItem>
                      <SelectItem value="04 PM">04 PM</SelectItem>
                      <SelectItem value="05 PM">05 PM</SelectItem>
                      <SelectItem value="06 PM">06 PM</SelectItem>
                      <SelectItem value="07 PM">07 PM</SelectItem>
                      <SelectItem value="08 PM">08 PM</SelectItem>
                      <SelectItem value="09 PM">09 PM</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={data.timeMinute}
                    onValueChange={(value) =>
                      setData((prevData) => ({
                        ...prevData,
                        timeMinute: value,
                      }))
                    }
                  >
                    <SelectTrigger className="w-full text-black">
                      <SelectValue placeholder="Minute" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="00">00</SelectItem>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                      <SelectItem value="45">45</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full text-start gap-1.5">
                <Label htmlFor="numberOfPax">Number of People:</Label>
                <Input
                  type="number"
                  id="numberOfPax"
                  placeholder="3"
                  className="rounded-lg w-full text-black"
                  value={data.numberOfPax}
                  onChange={(e) =>
                    setData({ ...data, numberOfPax: e.target.value })
                  }
                />
              </div>
              <div className="w-full text-start gap-1.5">
                <Label htmlFor="note">
                  Note {"("}optional{")"}:
                </Label>
                <Textarea
                  id="note"
                  className="text-black"
                  value={data.note}
                  onChange={(e) => setData({ ...data, note: e.target.value })}
                />
              </div>
              <Dialog>
                <DialogTrigger>
                  <Button className="bg-[#F4CE14] hover:bg-yellow-600">
                    Reserve table
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Table Reservation Success!</DialogTitle>
                    <DialogDescription className="mt-3 text-lg">
                      Hello {data.name}, your table reservation with{" "}
                      {data.numberOfPax} seats at {data.timeHour}:
                      {data.timeMinute} is confirmed!
                      <br />
                      You will also receive an email confirmation at{" "}
                      {data.email}.
                      <br />
                      <p className="font-semibold mt-2">Enjoy our food!</p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
