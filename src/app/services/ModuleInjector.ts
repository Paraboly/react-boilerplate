abstract class ModuleInjector {
  static inject(modules: string[]): void {
    modules.forEach((module) => {
      import(
        `../../modules/${module.toLowerCase()}/${module.toLowerCase()}.init`
      ).then((plugin) => plugin.default());
    });
  }
}

export default ModuleInjector;
