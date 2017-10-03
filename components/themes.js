const purpleBg = '#7c5ba9;';

const main = {
  sidebar: {
    bg: '#363636',
    colour: 'rgb(187, 186, 186)',
    gradeInfoColour: 'rgb(151, 147, 147)',
    lineColour: '#959595'
  }
};

const top = {};

const jungle = {};

const mid = {};

const adc = {
  bg: '#7c5ba9'
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
