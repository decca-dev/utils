import chalk from "chalk";

class Logger {
  static getSource(src: string) {
    return src ? src.toUpperCase() : "OTHER";
  }

  static toHHMMSS(time: Date) {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  static info(message: string, src: string) {
    console.log(
      `[${this.toHHMMSS(new Date())}] ${chalk.green("INFO")} [${this.getSource(
        src
      )}] ${message}`
    );
  }

  static error(message: string, src: string) {
    console.log(
      `[${this.toHHMMSS(new Date())}] ${chalk.red("INFO")} [${this.getSource(
        src
      )}] ${message}`
    );
  }

  static warning(message: string, src: string) {
    console.log(
      `[${this.toHHMMSS(new Date())}] ${chalk.yellow("INFO")} [${this.getSource(
        src
      )}] ${message}`
    );
  }
}

export default Logger;
