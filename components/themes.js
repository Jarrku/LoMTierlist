const purpleBg = '#7c5ba9;';

const main = {
  sidebar: {
    bg: '#363636',
    colour: 'rgb(187, 186, 186)',
    gradeInfoColour: 'rgb(151, 147, 147)',
    lineColour: '#959595'
  },
  content: {
    tierlist: {
      overlays: {
        bronze: 'rgba(183, 122, 108, 0.4)',
        silver: 'rgba(235, 210, 200, 0.4)',
        gold: 'rgba(255, 172, 62, 0.4)',
        platinum: 'rgba(56, 136, 59, 0.4)',
        diamond: 'rgba(135, 22, 143, 0.25)',
        master: 'rgba(84, 64, 243, 0.4)'
      },
      shadow: '0px 0px 20px 1px black'
    },
    highlight: {
      image: {
        size: '50%',
        shadow: 'inset 0 0 20px 3px wheat'
      }
    }
  }
};

const top = {};

const jungle = {};

const mid = {};

const adc = {
  bg: '#7c5ba9',
  content: {
    title: {
      border:
        'linear-gradient(120deg, darkblue 0%, darkblue 40%,lightblue 50%,darkblue 60%, darkblue 100%)',
      shadow: '0 0 10px 2px darkblue;',
      overlay: 'rgba(77, 8, 105, 0.7)'
    },
    changes: {
      overlay: 'rgba(77, 8, 105, 0.4)'
    },
    highlight: {
      border:
        'linear-gradient(120deg, darkblue 0%, darkblue 40%,lightblue 50%,darkblue 60%, darkblue 100%)',
      shadow: '0 0 10px 2px darkblue;',
      overlay: 'rgba(77, 8, 105, 0.7)'
    },
    footer: {
      background: '#7c5ba9',
      colour: 'white'
    }
  }
};

const support = {};

const themes = { top, jungle, mid, adc, support };

const isObject = item => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

const mergeDeep = (target, source) => {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

export default theme => mergeDeep(main, themes[theme]);
