import React from "react";
import { useEffect, useState } from "react";
const Switch = () => {
  const [mode, setMode] = useState(false);
  const handleChange = (e) => {
    console.log("here1");

    if (globalThis.document.documentElement.classList.contains("dark")) {
      console.log("here");
      setMode(false);

      globalThis.document.documentElement.classList.remove("dark");
      globalThis.localStorage.theme = "light";
    } else {
      globalThis.document.documentElement.classList.add("dark");
      globalThis.localStorage.theme = "dark";
      setMode(true);
    }
  };

  const onStorageUpdate = ({ key, newValue }) => {
    if (key !== "theme") return;
    if (newValue === "dark") {
      globalThis.document.documentElement.classList.add("dark");
      setMode(true);
    } else {
      globalThis.document.documentElement.classList.remove("dark");
      setMode(false);
    }
  };
  const onDeviceThemeChange = () => {
    if (globalThis.matchMedia("(prefers-color-scheme: dark)").matches) {
      globalThis.document.documentElement.classList.add("dark");
      globalThis.localStorage.theme = "dark";
      setMode(true);
    } else {
      globalThis.document.documentElement.classList.remove("dark");
      globalThis.localStorage.theme = "light";
      setMode(false);
    }
  };

  useEffect(() => {
    globalThis.addEventListener("storage", onStorageUpdate);
    globalThis
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", onDeviceThemeChange);
    globalThis.localStorage.theme === "dark" ? setMode(true) : setMode(false);

    return () => {
      globalThis.removeEventListener("storage", onStorageUpdate);
      globalThis
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", onDeviceThemeChange);
    };
  }, []);
  return (
    <input
      onChange={(e) => handleChange(e)}
      checked={mode}
      value="idk"
      className=" relative appearance-none h-4 w-8 bg-slate-400 rounded-full checked:bg-black transition duration-200 after:h-4 after:w-4 after:rounded-full after:bg-white after:absolute after:scale-110 checked:after:transform checked:after:scale-110  checked:after:translate-x-4"
      type="checkbox"
    />
  );
};

export default Switch;
