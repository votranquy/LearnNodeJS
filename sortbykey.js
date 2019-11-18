const unordered = {
    'b': 'foo',
    'c': 'bar',
    'a': 'baz'
  };
  
  console.log(JSON.stringify(unordered,null,2));
  // → '{"b":"foo","c":"bar","a":"baz"}'
  
  const ordered = {};
  Object.keys(unordered).sort().forEach(function(key) {
    ordered[key] = unordered[key];
  });
  
  console.log(JSON.stringify(ordered,null,2));
  // → '{"a":"baz","b":"foo","c":"bar"}'
  //OK