export class Prescription {
  constructor(
    public _id: number,
    public doctor: any,
    public patient: any,
    public medicine:any,
    public date: Date
  ) {}
}
