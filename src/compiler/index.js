import { createCompilerCreator } from "./create-compiler";
import { parse } from "./parser/index";
import { generate } from "./codegen/index";
import { optimize } from "./optimizer";

export const createCompiler = createCompilerCreator(function baseCompile (template, options) {
    const ast = parse(template.trim(), options)
    console.log('gsdast', ast)
    if (options.optimize !== false) { // TODO
        optimize(ast, options)
    }
    const code = generate(ast, options)
    console.log('gsdcode', code)
    return {
        ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
    }
})
