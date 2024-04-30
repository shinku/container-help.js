#!/usr/bin/env node
/**
 * default config 
 * borrow -c=config.config -vm=docker 
 */
const {exec} = require('child_process')

const commands = process.argv
const paramsAndValues = {};
commands.forEach(pv=>{
  const paramAndValue = {}
  paramAndValue.key = pv.split("=")[0];
  paramAndValue.value = pv.split("=")[1];
  Object.assign(paramsAndValues,paramAndValue);
})