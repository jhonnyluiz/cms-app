export class ObjUtil {
  private constructor() { }

  public static isNull(obj: any): boolean {
    return obj === undefined || obj === null;
  }

  public static isNotNull(obj: any): boolean {
    return !this.isNull(obj);
  }

  public static isEmpty(obj: any): boolean {
    if (this.isNotNull(obj)) {
      if (typeof obj === 'string') {
        return obj.trim() === '';
      } else if (obj instanceof Array) {
        return obj.length === 0;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  public static isNotEmpty(obj: any): boolean {
    return !this.isEmpty(obj);
  }


  public static  capitalize(string) {
    return string.replace(/(?:^|\s)\S/g, (a) => { return a.toUpperCase(); });
};
}
