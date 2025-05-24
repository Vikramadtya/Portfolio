import { getSortedMarkdownData } from '../mdxUtils';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // mdxUtils uses matter, so it should be mocked or its behavior understood

jest.mock('fs');
jest.mock('path');
// Mock gray-matter
jest.mock('gray-matter');

describe('getSortedMarkdownData', () => {
  beforeEach(() => {
    // Reset mocks before each test
    fs.readdirSync.mockReset();
    fs.readFileSync.mockReset();
    path.join.mockReset();
    matter.mockReset(); // Reset gray-matter mock

    // Mock path.join to return a predictable path
    // The first call to path.join in getSortedMarkdownData is: path.join(process.cwd(), '_markdown_content', directory)
    // The subsequent calls are: path.join(absoluteDirectory, fileName)
    path.join.mockImplementation((...args) => args.join('/'));

    // Mock process.cwd() to return a consistent value
    // jest.spyOn(process, 'cwd').mockReturnValue('mock_process_cwd');
    // No, path.join is fully mocked, so process.cwd() will actually run if not for the mockImplementation above.
    // The first argument to path.join will be the *actual* process.cwd() unless we mock it.
    // The task stated: "path.join is mocked, so the call to process.cwd() inside getSortedMarkdownData will be real."
    // "The assertion for toHaveBeenCalledWith should reflect the actual path that getSortedMarkdownData would try to access."
    // So, for the first call to path.join, the first arg will be the real cwd.
  });

  it('should read and parse markdown files, then sort by date (descending)', async () => {
    const mockDirectory = 'someDirectory';
    const actualProcessCwd = process.cwd(); // Get the actual cwd for assertion

    // Mock fs.readdirSync to return dummy file names
    fs.readdirSync.mockReturnValue(['test2.mdx', 'test1.mdx', 'test3_no_date.mdx']);

    // Mock gray-matter (matter default export is the function)
    matter
      .mockReturnValueOnce({ data: { title: 'Test Post 2', date: '2023-01-02' } }) // for test2.mdx
      .mockReturnValueOnce({ data: { title: 'Test Post 1', date: '2023-01-01' } }) // for test1.mdx
      .mockReturnValueOnce({ data: { title: 'Test Post 3 No Date' } }); // for test3_no_date.mdx
    
    // fs.readFileSync is called by mdxUtils but its content is passed to matter.
    // Since matter is mocked, we don't strictly need to mock readFileSync's return value for *parsing*,
    // but it will still be called.
    fs.readFileSync.mockReturnValue(''); // Return empty string as content is handled by matter mock

    const result = await getSortedMarkdownData(mockDirectory);

    // Check calls
    expect(path.join).toHaveBeenCalledWith(actualProcessCwd, '_markdown_content', mockDirectory);
    expect(fs.readdirSync).toHaveBeenCalledWith(actualProcessCwd + '/_markdown_content/' + mockDirectory);
    
    //readFileSync will be called for each file
    expect(fs.readFileSync).toHaveBeenCalledTimes(3);
    expect(fs.readFileSync).toHaveBeenCalledWith(actualProcessCwd + '/_markdown_content/' + mockDirectory + '/test2.mdx', 'utf8');
    expect(fs.readFileSync).toHaveBeenCalledWith(actualProcessCwd + '/_markdown_content/' + mockDirectory + '/test1.mdx', 'utf8');
    expect(fs.readFileSync).toHaveBeenCalledWith(actualProcessCwd + '/_markdown_content/' + mockDirectory + '/test3_no_date.mdx', 'utf8');

    // Check that matter was called for each file's content
    expect(matter).toHaveBeenCalledTimes(3);

    // Check the sorted result
    expect(result).toEqual([
      { slug: 'test2', title: 'Test Post 2', date: '2023-01-02' },
      { slug: 'test1', title: 'Test Post 1', date: '2023-01-01' },
      { slug: 'test3_no_date', title: 'Test Post 3 No Date' }, // No date items come last
    ]);
  });

  it('should filter out non-mdx files', async () => {
    path.join.mockImplementation((...args) => args.join('/'));
    fs.readdirSync.mockReturnValue(['test1.mdx', 'image.png', 'test2.mdx']);
    
    matter
      .mockReturnValueOnce({ data: { title: 'Test Post 1', date: '2023-01-01' } })
      .mockReturnValueOnce({ data: { title: 'Test Post 2', date: '2023-01-02' } });
    fs.readFileSync.mockReturnValue('');

    const result = await getSortedMarkdownData('anotherDir');
    
    expect(fs.readFileSync).toHaveBeenCalledTimes(2); // Only for mdx files
    expect(result.length).toBe(2);
    expect(result.map(r => r.slug)).toEqual(['test2', 'test1']); // test2 is later date
  });

  it('should handle empty directory', async () => {
    path.join.mockImplementation((...args) => args.join('/'));
    fs.readdirSync.mockReturnValue([]);
    
    const result = await getSortedMarkdownData('emptyDir');
    
    expect(fs.readFileSync).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it('should place items with date before items without date', async () => {
    path.join.mockImplementation((...args) => args.join('/'));
    fs.readdirSync.mockReturnValue(['no_date_first.mdx', 'with_date.mdx', 'no_date_last.mdx']);

    matter
      .mockReturnValueOnce({ data: { title: 'No Date First' } })
      .mockReturnValueOnce({ data: { title: 'With Date', date: '2023-01-01' } })
      .mockReturnValueOnce({ data: { title: 'No Date Last' } });
    fs.readFileSync.mockReturnValue('');
    
    const result = await getSortedMarkdownData('mixedDir');

    expect(result.map(r => r.title)).toEqual([
      'With Date',
      'No Date First', // Original order among no-date items is preserved if no other criteria
      'No Date Last',
    ]);
  });
});
