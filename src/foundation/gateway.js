//import timeout from 'race-timeout';
import _ from 'lodash';
import axiosMod from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const TIMEOUT = 20 * 1000;
const API_ENDPOINT = window.location.origin;

const axios = axiosMod.create({
  baseURL: API_ENDPOINT,
});

// https://github.com/lgmcolin/race-timeout/blob/master/index.js
function timeout(interval) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('timeout');
    }, interval || 0);
  });
}

function RaceTimeout(task, interval) {
  let longTask = Array.isArray(task) ? task : [task];

  if (interval && typeof interval === 'number') {
    longTask = longTask.concat(timeout(interval));
  }

  try {
    return Promise.race(longTask);
  } catch (err) {
    console.log(err.stack);
  }
}
//------------------------------------------------------------------------------

export function setupMockAPIData() {
  const mock = new AxiosMockAdapter(axios, { delayResponse: 250 });

  mock.onGet('/api/blogs').reply(200, {
    data: [
      {
        blog_id: 'b0000',
        nickname: 'Mock User 0',
        self_introduction: 'This blog is mock-user-0’s blog',
        image: 'https://placehold.it/600x300?text=MockUser0',
      },
      {
        blog_id: 'b0001',
        nickname: 'Mock User 1',
        self_introduction: 'This blog is mock-user-1’s blog',
        image: 'https://placehold.it/600x300?text=MockUser1',
      },
      {
        blog_id: 'b0002',
        nickname: 'Mock User 2',
        self_introduction: 'This blog is mock-user-2’s blog',
        image: 'https://placehold.it/600x300?text=MockUser2',
      },
      {
        blog_id: 'b0003',
        nickname: 'Mock User 3',
        self_introduction: 'This blog is mock-user-3’s blog',
        image: 'https://placehold.it/600x300?text=MockUser3',
      },
      {
        blog_id: 'b0004',
        nickname: 'Mock User 4',
        self_introduction: 'This blog is mock-user-4’s blog',
        image: 'https://placehold.it/600x300?text=MockUser4',
      },
      {
        blog_id: 'b0005',
        nickname: 'Mock User 5',
        self_introduction: 'This blog is mock-user-5’s blog',
        image: 'https://placehold.it/600x300?text=MockUser5',
      },
      {
        blog_id: 'b0006',
        nickname: 'Mock User 6',
        self_introduction: 'This blog is mock-user-6’s blog',
        image: 'https://placehold.it/600x300?text=MockUser6',
      },
      {
        blog_id: 'b0007',
        nickname: 'Mock User 7',
        self_introduction: 'This blog is mock-user-7’s blog',
        image: 'https://placehold.it/600x300?text=MockUser7',
      },
      {
        blog_id: 'b0008',
        nickname: 'Mock User 8',
        self_introduction: 'This blog is mock-user-8’s blog',
        image: 'https://placehold.it/600x300?text=MockUser8',
      },
      {
        blog_id: 'b0009',
        nickname: 'Mock User 9',
        self_introduction: 'This blog is mock-user-9’s blog',
        image: 'https://placehold.it/600x300?text=MockUser9',
      },
      {
        blog_id: 'b0010',
        nickname: 'Mock User 10',
        self_introduction: 'This blog is mock-user-10’s blog',
        image: 'https://placehold.it/600x300?text=MockUser10',
      },
      {
        blog_id: 'b0011',
        nickname: 'Mock User 11',
        self_introduction: 'This blog is mock-user-11’s blog',
        image: 'https://placehold.it/600x300?text=MockUser11',
      },
      {
        blog_id: 'b0012',
        nickname: 'Mock User 12',
        self_introduction: 'This blog is mock-user-12’s blog',
        image: 'https://placehold.it/600x300?text=MockUser12',
      },
      {
        blog_id: 'b0013',
        nickname: 'Mock User 13',
        self_introduction: 'This blog is mock-user-13’s blog',
        image: 'https://placehold.it/600x300?text=MockUser13',
      },
      {
        blog_id: 'b0014',
        nickname: 'Mock User 14',
        self_introduction: 'This blog is mock-user-14’s blog',
        image: 'https://placehold.it/600x300?text=MockUser14',
      },
      {
        blog_id: 'b0015',
        nickname: 'Mock User 15',
        self_introduction: 'This blog is mock-user-15’s blog',
        image: 'https://placehold.it/600x300?text=MockUser15',
      },
      {
        blog_id: 'b0016',
        nickname: 'Mock User 16',
        self_introduction: 'This blog is mock-user-16’s blog',
        image: 'https://placehold.it/600x300?text=MockUser16',
      },
      {
        blog_id: 'b0017',
        nickname: 'Mock User 17',
        self_introduction: 'This blog is mock-user-17’s blog',
        image: 'https://placehold.it/600x300?text=MockUser17',
      },
      {
        blog_id: 'b0018',
        nickname: 'Mock User 18',
        self_introduction: 'This blog is mock-user-18’s blog',
        image: 'https://placehold.it/600x300?text=MockUser18',
      },
      {
        blog_id: 'b0019',
        nickname: 'Mock User 19',
        self_introduction: 'This blog is mock-user-19’s blog',
        image: 'https://placehold.it/600x300?text=MockUser19',
      },
      {
        blog_id: 'b0020',
        nickname: 'Mock User 20',
        self_introduction: 'This blog is mock-user-20’s blog',
        image: 'https://placehold.it/600x300?text=MockUser20',
      },
      {
        blog_id: 'b0021',
        nickname: 'Mock User 21',
        self_introduction: 'This blog is mock-user-21’s blog',
        image: 'https://placehold.it/600x300?text=MockUser21',
      },
      {
        blog_id: 'b0022',
        nickname: 'Mock User 22',
        self_introduction: 'This blog is mock-user-22’s blog',
        image: 'https://placehold.it/600x300?text=MockUser22',
      },
      {
        blog_id: 'b0023',
        nickname: 'Mock User 23',
        self_introduction: 'This blog is mock-user-23’s blog',
        image: 'https://placehold.it/600x300?text=MockUser23',
      },
      {
        blog_id: 'b0024',
        nickname: 'Mock User 24',
        self_introduction: 'This blog is mock-user-24’s blog',
        image: 'https://placehold.it/600x300?text=MockUser24',
      },
      {
        blog_id: 'b0025',
        nickname: 'Mock User 25',
        self_introduction: 'This blog is mock-user-25’s blog',
        image: 'https://placehold.it/600x300?text=MockUser25',
      },
      {
        blog_id: 'b0026',
        nickname: 'Mock User 26',
        self_introduction: 'This blog is mock-user-26’s blog',
        image: 'https://placehold.it/600x300?text=MockUser26',
      },
      {
        blog_id: 'b0027',
        nickname: 'Mock User 27',
        self_introduction: 'This blog is mock-user-27’s blog',
        image: 'https://placehold.it/600x300?text=MockUser27',
      },
      {
        blog_id: 'b0028',
        nickname: 'Mock User 28',
        self_introduction: 'This blog is mock-user-28’s blog',
        image: 'https://placehold.it/600x300?text=MockUser28',
      },
      {
        blog_id: 'b0029',
        nickname: 'Mock User 29',
        self_introduction: 'This blog is mock-user-29’s blog',
        image: 'https://placehold.it/600x300?text=MockUser29',
      },
      {
        blog_id: 'b0030',
        nickname: 'Mock User 30',
        self_introduction: 'This blog is mock-user-30’s blog',
        image: 'https://placehold.it/600x300?text=MockUser30',
      },
    ],
  });

  mock.onGet(/^\/api\/blog\/\w+$/).reply(200, {
    data: {
      blog_id: 'b0000',
      nickname: 'Mock User 0',
      self_introduction: 'This blog is mock-user-0’s blog',
      image: 'https://placehold.it/600x300?text=MockUser0',
    },
  });

  mock.onGet(/^\/api\/blog\/\w+\/entries$/).reply(200, {
    data: [
      {
        entry_id: 'e0000',
        blog_id: 'b0000',
        title: '日記 #0',
        thumbnail: 'https://placehold.it/600x300?text=Entry+0',
        publish_flag: 'open',
        published_at: 1585394946024,
        like_count: 10,
        items: [],
      },
      {
        entry_id: 'e0001',
        blog_id: 'b0000',
        title: '日記 #1',
        thumbnail: 'https://placehold.it/600x300?text=Entry+1',
        publish_flag: 'close',
        published_at: 1585394946024,
        like_count: 10,
        items: [],
      },
      {
        entry_id: 'e0002',
        blog_id: 'b0000',
        title: '日記 #2',
        thumbnail: 'https://placehold.it/600x300?text=Entry+2',
        publish_flag: 'open',
        published_at: 1585394946024,
        like_count: 10,
        items: [],
      },
      {
        entry_id: 'e0003',
        blog_id: 'b0000',
        title: '日記 #3',
        thumbnail: 'https://placehold.it/600x300?text=Entry+3',
        publish_flag: 'open',
        published_at: 1585394946024,
        like_count: 10,
        items: [],
      },
      {
        entry_id: 'e0004',
        blog_id: 'b0000',
        title: '日記 #4',
        thumbnail: 'https://placehold.it/600x300?text=Entry+4',
        publish_flag: 'open',
        published_at: 1585394946024,
        like_count: 10,
        items: [],
      },
      {
        entry_id: 'e0005',
        blog_id: 'b0000',
        title: '日記 #5',
        thumbnail: 'https://placehold.it/600x300?text=Entry+5',
        publish_flag: 'open',
        published_at: 1585394946024,
        like_count: 10,
        items: [],
      },
      {
        entry_id: 'e0006',
        blog_id: 'b0000',
        title: '日記 #6',
        thumbnail: 'https://placehold.it/600x300?text=Entry+6',
        publish_flag: 'open',
        published_at: 1585394946024,
        like_count: 10,
        items: [],
      },
    ],
  });

  mock.onGet(/^\/api\/blog\/\w+\/entry\/\w+$/).reply(200, {
    data: {
      entry_id: 'e0000',
      blog_id: 'b0000',
      title: '日記 #0',
      thumbnail: 'https://placehold.it/600x300?text=Entry+0',
      publish_flag: 'open',
      published_at: 1585394946024,
      like_count: 10,
      items: [
        {
          type: 'headline',
          data: {
            level: 2,
            text: 'あのイーハトーヴォのすきとおった風',
          },
        },
        {
          type: 'paragraph',
          data: {
            text:
              'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。',
          },
        },
        {
          type: 'link',
          data: {
            url: 'https://example.com',
            text: 'そのころわたくしは、モリーオ市の博物局に勤めて居りました。',
          },
        },
        {
          type: 'image',
          data: {
            url: 'https://placehold.it/600x300?text=image',
            width: 200,
            height: 100,
            caption: 'あのイーハトーヴォのすきとおった風',
          },
        },
        {
          type: 'video',
          data: {
            url:
              'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
            width: 400,
            height: 400 * (9 / 16),
          },
        },
        {
          type: 'headline',
          data: {
            level: 2,
            text: '遁げた山羊',
          },
        },
        {
          type: 'paragraph',
          data: {
            text:
              '五月のしまいの日曜でした。わたくしは賑やかな市の教会の鐘の音で眼をさましました。もう日はよほど登って、まわりはみんなきらきらしていました。時計を見るとちょうど六時でした。わたくしはすぐチョッキだけ着て山羊を見に行きました。すると小屋のなかはしんとして藁が凹んでいるだけで、あのみじかい角も白い髯も見えませんでした。',
          },
        },
        {
          type: 'paragraph',
          data: {
            text:
              '「あんまりいい天気なもんだから大将ひとりででかけたな。」わたくしは半分わらうように半分つぶやくようにしながら、向うの信号所からいつも放して遊ばせる輪道の内側の野原、ポプラの中から顔をだしている市はずれの白い教会の塔までぐるっと見まわしました。けれどもどこにもあの白い頭もせなかも見えていませんでした。うまやを一まわりしてみましたがやっぱりどこにも居ませんでした。',
          },
        },
      ],
    },
  });

  mock.onPost(/^\/api\/blog\/\w+\/entry\/\w+\/like$/).reply(200);

  mock.onGet(/^\/api\/blog\/\w+\/entry\/\w+\/comments$/).reply(200, {
    data: [
      {
        comment_id: 'c0000',
        entry_id: 'e0000',
        blog_id: 'b0000',
        title: 'Title #0',
        comment: 'Comment for 日記 #0 blog #0',
        posted_at: 1585394946024,
        commenter: {
          user_id: 'u0000',
          user_name: 'みゃーもり',
          image: 'https://placehold.it/600x600?text=MockUser10',
        },
      },
      {
        comment_id: 'c0001',
        entry_id: 'e0000',
        blog_id: 'b0000',
        title: 'Title #1',
        comment: 'Comment for 日記 #0 blog #1',
        posted_at: 1585394946024,
        commenter: {
          user_id: 'u0000',
          user_name: 'みゃーもり',
          image: 'https://placehold.it/600x600?text=MockUser10',
        },
      },
      {
        comment_id: 'c0002',
        entry_id: 'e0000',
        blog_id: 'b0000',
        title: 'Title #2',
        comment: 'Comment for 日記 #0 blog #2',
        posted_at: 1585394946024,
        commenter: {
          user_id: 'u0000',
          user_name: 'みゃーもり',
          image: 'https://placehold.it/600x600?text=MockUser10',
        },
      },
      {
        comment_id: 'c0003',
        entry_id: 'e0000',
        blog_id: 'b0000',
        title: 'Title #3',
        comment: 'Comment for 日記 #0 blog #3',
        posted_at: 1585394946024,
        commenter: {
          user_id: 'u0000',
          user_name: 'みゃーもり',
          image: 'https://placehold.it/600x600?text=MockUser10',
        },
      },
      {
        comment_id: 'c0004',
        entry_id: 'e0000',
        blog_id: 'b0000',
        title: 'Title #4',
        comment: 'Comment for 日記 #0 blog #4',
        posted_at: 1585394946024,
        commenter: {
          user_id: 'u0000',
          user_name: 'みゃーもり',
          image: 'https://placehold.it/600x600?text=MockUser10',
        },
      },
      {
        comment_id: 'c0005',
        entry_id: 'e0000',
        blog_id: 'b0000',
        title: 'Title #5',
        comment: 'Comment for 日記 #0 blog #5',
        posted_at: 1585394946024,
        commenter: {
          user_id: 'u0000',
          user_name: 'みゃーもり',
          image: 'https://placehold.it/600x600?text=MockUser10',
        },
      },
    ],
  });
}

export async function fetch(path) {
  const requestWithTimeout = RaceTimeout(axios.get(path), TIMEOUT);
  const res = await requestWithTimeout;

  if (res === 'timeout') {
    throw new Error(`Timeout: ${path}`);
  }

  const payload = _.get(res, 'data.data');

  if (!payload || typeof payload !== 'object') {
    throw new Error(`Invalid response for ${path}: ${JSON.stringify(res)}`);
  }

  return payload;
}

export async function post(path, data) {
  const requestWithTimeout = RaceTimeout(axios.post(path, data), TIMEOUT);
  const res = await requestWithTimeout;

  if (res.status !== 200) {
    throw new Error(
      `Invalid response for ${path} with ${JSON.stringify(data)}: status ${
        res.status
      }`,
    );
  }

  return res;
}
