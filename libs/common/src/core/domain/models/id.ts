import { ValueObject } from './value-object';
interface Props {
  value: string;
}
export abstract class Id extends ValueObject<Props> {
  constructor(protected readonly id: string) {
    super({ value: id });
  }

  get value(): string {
    return this.props.value;
  }
}
