import chalk from "chalk";

/**
 * Logger using the chalk library. See https://www.npmjs.com/package/chalk for more information
*/
export class Logger {
    /**
     * Simple logging. Blue resource name, white message.
     * @param {string} msg The message
     * @param {string} resName The resource the message comes from. If not provided, it uses the name of the core resource.
     */
    static log(msg: string, resName: string = GetCurrentResourceName()) {
        console.log("[" + chalk.blueBright(resName) + "] " + msg);
    }

    /**
     * Print a warning message to the console. Blue resource name, yellow message.
     * @param {string} msg The message 
     * @param {string} resName The resource the message comes from. If not provided, it uses the name of the core resource.
     */
    static logWarning(msg: string, resName: string = GetCurrentResourceName()) {
        console.log(`[${chalk.blueBright(resName)}] ${chalk.yellow(msg)}`)
    }

    /**
     * Print an error message to the console. Blue resource name, red message.
     * @param {string} msg The message 
     * @param {string} resName The resource the message comes from. If not provided, it uses the name of the core resource.
     */
    static logError(msg: string, resName: string = GetCurrentResourceName()) {
        console.log(`[${chalk.blueBright(resName)}] ${chalk.red(msg)}`)
    }

    /**
     * Print an success message to the console. Blue resource name, green message.
     * @param {string} msg The message 
     * @param {string} resName The resource the message comes from. If not provided, it uses the name of the core resource.
     */
    static logSuccess(msg: string, resName: string = GetCurrentResourceName()) {
        console.log(`[${chalk.blueBright(resName)}] ${chalk.greenBright(msg)}`)
    }
}