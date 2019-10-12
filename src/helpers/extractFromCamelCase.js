export const extractFromCamelCase = (data, partial, defaultObject) => {
  const object = {};

  Object.keys(data).map(key => {
    const [, splitKey] = key.split(partial);

    if (splitKey) {
      const newKey = `${splitKey.charAt(0).toLowerCase()}${splitKey.slice(1)}`;

      object[newKey] = data[key];
    }
  });

  return object || defaultObject || {};
};
