import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { FilterPipe } from "ngx-filter-pipe";



class MockCocktailService {}


describe('Pipe: FilterPipe',() =>{
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters array of strings', () => {
    expect(pipe.transform(['a', 'b', 'c'], 'a')).toEqual(['a']);
  });

  it('filters array of strings without any match', () => {
    expect(pipe.transform(['a', 'b', 'c'], 'x')).toEqual([]);
  });

  it('filters array of strings with repeated element', () => {
    const arrayContainingA = ['a', 'ba', 'ca'];
    expect(pipe.transform(arrayContainingA, 'a')).toEqual(arrayContainingA);
  });

  it('filters array of numbers', () => {
    expect(pipe.transform([1, 2, 3, 11], 1)).toEqual([1]);
  });

  it('filters array of objects', () => {
    expect(
      pipe.transform(
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 111 }],
        { value: 1 }
      )
    ).toEqual([{ value: 1 }]);

    expect(
      pipe.transform(
        [{ value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'abc' }],
        { value: 'a' }
      )
    ).toEqual([{ value: 'a' }, { value: 'abc' }]);
  });
  
})

