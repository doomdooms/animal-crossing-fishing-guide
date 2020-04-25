export class QueryData {
  _northSelected: boolean;
  _monthSelected: number;
  constructor(northSelected: boolean, monthSelected: number) {
    this._northSelected = northSelected;
    this._monthSelected = monthSelected;
  }
  northSelected(): boolean {
    return this._northSelected;
  }
  monthSelected(): number {
    return this._monthSelected;
  }
}

