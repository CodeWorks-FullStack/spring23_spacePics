import { NasaApodController } from "./Controllers/NasaApodController.js";
import { SandboxApodController } from "./Controllers/SandboxApodController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  nasaApodController = new NasaApodController();

  sandboxApodController = new SandboxApodController();
}

window["app"] = new App();
