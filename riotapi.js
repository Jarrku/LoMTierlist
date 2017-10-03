//const rp = require('request-promise');
import rp from 'request-promise';
// newer syntax

// recommendation is to always use const unless u really need let due to better understadning for others youre not supposed to change the value

// node 8 here -> if you mark a function async, you can use await keyword so you write "sync" code but its async, no callbacks needed this way.
// async funtions always return a promise aswell, doesnt matter what you put in the return statement
const getUpdatedVersion = async () => {
  const options = {
    uri: 'https://ddragon.leagueoflegends.com/realms/na.json',
    json: true
  };

  //res is now the resolved value, no cb needed.
  // const res = await rp(options);
  // return res.dd

  // Because we just need the dd value you can imm destructure the return value
  const { dd } = await rp(options); // --> this gets the dd value out of the result
  return dd;
};

/*
let getUpdatedVersion = () => {
  let options = {
    uri: 'https://ddragon.leagueoflegends.com/realms/na.json',
    json: true
  };

  rp(options).then(
    data => {
      let version = data['dd'];
      Promise.resolve(version);
    },
    err => {
      Promise.reject(err.statusCode);
    }
  );
};*/

//new export syntax, only one default export allowed to do multiple you can do:
// export const getChampionsList = () => ...

// again you can use async await
export default async () => {
  // has to value of the function, getOutdated returns a promise but you "unwrap" it with await.
  const version = await getUpdatedVersion();

  // String interpolation! with `` you can write vars(or any js expression) in your strings with the ${} notation.
  const options = {
    uri: `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`,
    json: true
  };

  const { data } = await rp(options);

  const splashesBaseURL = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/`;
  const iconBaseURL = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;

  //Ok first basic map functions, you use it on an arry, then you provide a function what to do with each element of the array, then it returns the transformed array
  const champs = data.map(champ => {
    // Destructure the props we need again out of champ var.
    const { name, title, id, key } = champ;

    const splash = `${splashesBaseURL}${id}_0.jpg`;
    const icon = `${iconBaseURL}${id}.png`;
    // Make a new object and return it with the 2 new properties
    return { name, title, id, key, splash, icon };
  });

  return champs;

  //short verison of the map, combining destructuring with param init;
  return data.map(({ name, title, id, key }) => {
    return {
      name,
      title,
      id,
      key,
      splash: `${splashesBaseURL}${id}_0.jpg`,
      icon: `${iconBaseURL}${id}.png`
    };
  });
};
/*
exports.getChampionsList = () => {
  getUpdatedVersion().then(version => {
    let options = {
      uri:
        'http://ddragon.leagueoflegends.com/cdn/' +
        version +
        '/data/en_US/champion.json',
      json: true
    };
    rp(options).then(
      data => {
        let champs = data['data'];

        let map = new Map();

        let splashesURL =
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash';
        let iconURL =
          'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/';

        for (champ in champs) {
          let champData = {
            name: champs[champ].name, // The champion's name - Wukong
            title: champs[champ].title, // The champion's title - the Monkey King
            id: champs[champ].id, // The champion's id - MonkeyKing
            key: champs[champ].key, // The champion's key - 62
            splash: splashesURL + champs[champ].id + '_0.jpg', // Link to the champion's splash art
            icon: iconURL + champs[champ].id + '.png' // Link to the champion's icon
          };

          map.set(champs[champ].name, champData);
        }

        console.log(map);
        Promise.resolve(map);
      },
      err => {
        console.log(err.statusCode);
      }
    );
  });
};
*/
