import * as core from "@actions/core";
import {format} from "../shared/format.js";

const input = core.getInput("variable");
const template = core.getInput("template")
const sanitizeInput = core.getInput("sanitize") || 'false'
const data = JSON.parse(input)
let sanitize =  sanitizeInput == 'true'
try {
  console.log("typeof data",typeof data)
  console.log("data",data)
  console.log(JSON.stringify(data?.video))
  console.log(JSON.stringify(data?.ai))
  console.log("keys",Object.keys(data))
}catch (e) {
  console.error('access failed', e)
}
core.setOutput('result', format(template, data, sanitize))
