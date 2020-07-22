export class Payload {
  constructor(source) {
    this.data = JSON.stringify(source.data);
  }

  toResponse() {
    try {
      const data = JSON.parse(this.data);
      const id = createId(Math.floor(Math.random() * this.data.length));
      return {
        data,
        id,
      };
    } catch (e) {
      console.error('Failed to parse Payload to Response', e);
      throw new Error(e);
    }
  }
}
