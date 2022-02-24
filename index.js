// hello world, this is my message!
// this is my second message

// I think this project can use this feature that i just coded.

import { compareAsc, format } from 'date-fns';
import got from 'got';
// this is my sixth message
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

format(new Date(2014, 1, 11), 'yyyy-MM-dd');
//=> '2014-02-11'

const dates = [
  new Date(1291, 6, 2),
  new Date(1987, 1, 11),
  new Date(22, 6, 10),
];
dates.sort(compareAsc);
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
console.log('These are the dates:', dates);

const { data } = await got
  .post('https://httpbin.org/anything', {
    json: {
      hello: 'world',
    },
  })
  .json();

console.log(data);
//=> {"hello": "world"}
