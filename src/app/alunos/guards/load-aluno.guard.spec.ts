import { TestBed, async, inject } from '@angular/core/testing';

import { LoadAlunoResolver } from './load-aluno.resolver';

describe('LoadAlunoResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadAlunoResolver]
    });
  });

  it('should ...', inject([LoadAlunoResolver], (guard: LoadAlunoResolver) => {
    expect(guard).toBeTruthy();
  }));
});
