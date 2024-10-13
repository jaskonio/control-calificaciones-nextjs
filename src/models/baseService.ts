export interface IBaseService<T, ViewModel> {
  create(data: T): Promise<ViewModel>;
  getAll(): Promise<ViewModel[]>;
  getById(id: number): Promise<ViewModel | null>;
  update(id: number, data: Partial<T>): Promise<ViewModel>;
  delete(id: number): Promise<ViewModel>;
}
