export function BooleanInput(): any {
  return (target: any, propertyKey: string | symbol) => {
    const key = Symbol();
    return {
      get() {
        return this[key];
      },
      set(value: boolean | string) {
        if (typeof value === 'string') {
          this[key] = value !== 'false';
        } else {
          this[key] = value;
        }
      }
    }
  }
}
