import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import store from '../redux/configureStore';
import reducer, {
  getBooks, setFilter, clearFilter, newUrl,
} from '../redux/home/homeSlice';

const state = { searchFilter: { topic: '', search: '', languages: '' } };
const mockApi = () => {
  const mock = new MockAdapter(axios);
  mock.onGet('/').reply(200, { data1: '1', data2: '2' });
};

describe('reducer fetch books from API', () => {
  beforeAll(() => mockApi());

  it('action GET_BOOKS', async () => {
    const result = await store.dispatch(getBooks('/'));
    expect(result.payload).toEqual({ data1: '1', data2: '2' });
    expect(result.type).toBe('home/getBooks/fulfilled');
    expect(store.getState().home).toEqual({ searchFilter: { topic: '', search: '', languages: '' }, data1: '1', data2: '2' });
  });
});

describe('reducer actions tests', () => {
  it('action SET_FILTER', () => {
    const action = { type: setFilter, payload: { languages: 'sp' } };
    const result = reducer(state, action);
    expect(result).not.toEqual({ searchFilter: { topic: '', search: '', languages: 'en' } });
    expect(result).not.toEqual({ searchFilter: { topic: '', search: '', languages: '' } });
    expect(result).toEqual({ searchFilter: { topic: '', search: '', languages: 'sp' } });
  });

  it('action CLEAR_FILTER', () => {
    const filterState = { searchFilter: { topic: 'drama', search: 'dumas', languages: 'fr' }, data1: '1', data2: '2' };
    const action = { type: clearFilter, payload: { searchFilter: { topic: '', search: '', languages: '' } } };
    const result = reducer(filterState, action);
    expect(result).not.toEqual({ searchFilter: { topic: 'drama', search: 'dumas', languages: 'fr' }, data1: '1', data2: '2' });
    expect(result).toEqual({ searchFilter: { topic: '', search: '', languages: '' }, data1: '1', data2: '2' });
  });
});

describe('newUrl build function', () => {
  const filter0 = { topic: '', search: '', languages: '' };
  const filter1 = { topic: '', search: 'dumas', languages: '' };
  const filter2 = { topic: 'drama', search: '', languages: 'fr' };
  const filter3 = { topic: 'drama', search: 'dumas', languages: 'fr' };
  it('no param', () => expect(newUrl(filter0)).toBe('https://gutendex.com/books'));
  it('1 params', () => expect(newUrl(filter1)).toBe('https://gutendex.com/books?search=dumas'));
  it('2 params', () => expect(newUrl(filter2)).toBe('https://gutendex.com/books?topic=drama&&languages=fr'));
  it('3 params', () => expect(newUrl(filter3)).toBe('https://gutendex.com/books?topic=drama&&search=dumas&&languages=fr'));
});
