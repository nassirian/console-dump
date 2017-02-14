/**
 * Created by Iman on 2/13/17.
 */
'use strict';
var Console=require('console').Console,
    utils=require('utils')
Console.prototype.dump=function dump(){
    /**
     * https://github.com/baryon/tracer
     * get regexp from baryon
     * @type {RegExp}
     */
    var stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i;
    var stackReg2 = /at\s+()(.*):(\d*):(\d*)/i;
    var stackList=(new Error()).stack.split('\n').slice(3),
        stackString=stackList[0],
        stackArray = stackReg.exec(stackString) || stackReg2.exec(stackString);
    var data={};
    if (stackArray && stackArray.length === 5) {
        data.method = stackArray[1];
        data.path = stackArray[2];
        data.line = stackArray[3];
        data.pos = stackArray[4];
    }
    /**
     * todo handle else
     */
    this._stderr.write('================ \n================\n')
    this._stderr.write(`Filename: ${data.path}:${data.line}\n`)
    if (arguments.length) console.log(`${util.format.apply(null, arguments)}`);
    this._stderr.write('================ \n================\n')
