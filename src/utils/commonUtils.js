import JsonData from "constants/text.json";

export const getText = (id)=> {
    const keys = id.split(".");
    let text = JsonData
    for (let k in keys) {
        text = text[keys[k]];
    }
    return text;
};

 export  const setRootCssVars = (varName, newValue) => {
    const root = document.querySelector(":root");
    root?.style?.setProperty(varName, newValue);
  }