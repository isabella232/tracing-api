// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Sync extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Sync entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Sync entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Sync", id.toString(), this);
  }

  static load(id: string): Sync | null {
    return store.get("Sync", id) as Sync | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get key(): string | null {
    let value = this.get("key");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set key(value: string | null) {
    if (value === null) {
      this.unset("key");
    } else {
      this.set("key", Value.fromString(value as string));
    }
  }

  get value(): BigInt | null {
    let value = this.get("value");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt | null) {
    if (value === null) {
      this.unset("value");
    } else {
      this.set("value", Value.fromBigInt(value as BigInt));
    }
  }
}

export class StorageSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StorageSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StorageSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StorageSet", id.toString(), this);
  }

  static load(id: string): StorageSet | null {
    return store.get("StorageSet", id) as StorageSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get key(): string | null {
    let value = this.get("key");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set key(value: string | null) {
    if (value === null) {
      this.unset("key");
    } else {
      this.set("key", Value.fromString(value as string));
    }
  }

  get value(): BigInt | null {
    let value = this.get("value");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt | null) {
    if (value === null) {
      this.unset("value");
    } else {
      this.set("value", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Frame extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Frame entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Frame entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Frame", id.toString(), this);
  }

  static load(id: string): Frame | null {
    return store.get("Frame", id) as Frame | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt | null {
    let value = this.get("index");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set index(value: BigInt | null) {
    if (value === null) {
      this.unset("index");
    } else {
      this.set("index", Value.fromBigInt(value as BigInt));
    }
  }

  get blockHash(): Bytes | null {
    let value = this.get("blockHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set blockHash(value: Bytes | null) {
    if (value === null) {
      this.unset("blockHash");
    } else {
      this.set("blockHash", Value.fromBytes(value as Bytes));
    }
  }

  get blockNumber(): BigInt | null {
    let value = this.get("blockNumber");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt | null) {
    if (value === null) {
      this.unset("blockNumber");
    } else {
      this.set("blockNumber", Value.fromBigInt(value as BigInt));
    }
  }

  get from(): Bytes | null {
    let value = this.get("from");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes | null) {
    if (value === null) {
      this.unset("from");
    } else {
      this.set("from", Value.fromBytes(value as Bytes));
    }
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (value === null) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(value as Bytes));
    }
  }

  get input(): string | null {
    let value = this.get("input");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set input(value: string | null) {
    if (value === null) {
      this.unset("input");
    } else {
      this.set("input", Value.fromString(value as string));
    }
  }

  get output(): string | null {
    let value = this.get("output");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set output(value: string | null) {
    if (value === null) {
      this.unset("output");
    } else {
      this.set("output", Value.fromString(value as string));
    }
  }

  get hash(): string | null {
    let value = this.get("hash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set hash(value: string | null) {
    if (value === null) {
      this.unset("hash");
    } else {
      this.set("hash", Value.fromString(value as string));
    }
  }
}
