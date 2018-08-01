import { ResolveGuard } from './load-aluno.resolver';

describe('ResolveGuard', () => { 
  let service: ResolveGuard;

  beforeEach(() => {
    service = new ResolveGuard();
  });

  it('works', () => {
    expect(1).toEqual(2);
  });

});
