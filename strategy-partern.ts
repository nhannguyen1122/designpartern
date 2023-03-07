// 1: strategy partern:
// -- sử dụng khi 1 điều kiện được định nghĩa trước mà có thẻ phát sinh theo thời gian
// vd: con vịt thì có thể bay cao, bay vừa, kb bay,
// chú thích: con vịt thì có thể có các loại trên, nên là ta sẽ tách 1 interface riêng ra để quyết định method của vịt
// link:https://refactoring.guru/design-patterns/strategy

//duck fly method
type DuckFly = "height" | "low" | "medium" | "cant";

// duck interface
interface DuckBehavfly {
  fly: (mode: DuckFly) => void;
}

class DuckCanFly implements DuckBehavfly {
  fly(mode: DuckFly) {
    return mode;
  }
}

class DuckCantFly implements DuckBehavfly {
  fly(mode: DuckFly) {
    return mode;
  }
}

class DuckBehaviorContent {
  private duct: { [key: string]: string | any; behavior: DuckBehavfly | null } =
    {
      name: "duct",
      behavior: null,
      type: "",
    };

  constructor(duckBehavior: DuckBehavfly) {
    this.duct.behavior = duckBehavior;
  }

  getInforofThatDuck(mode: DuckFly) {
    const duckType = this.duct.behavior?.fly(mode);

    this.duct.type = duckType;
  }
}

const flyDuct = new DuckBehaviorContent(new DuckCanFly());
const cantFlyDuct = new DuckBehaviorContent(new DuckCantFly());
//consumer
cantFlyDuct.getInforofThatDuck("cant");
flyDuct.getInforofThatDuck("height");

//function version

function duckCantFlyFnc(mode: DuckFly) {
  return mode;
}

function duckCanFlyFnc(mode: DuckFly) {
  return mode;
}

const ductInterfaceObj = {
  height: duckCanFlyFnc,
  cant: duckCantFlyFnc,
};

function ductContext(mode) {
  return ductInterfaceObj[mode](mode);
}

//consumer
ductContext("height");
ductContext("cant");
