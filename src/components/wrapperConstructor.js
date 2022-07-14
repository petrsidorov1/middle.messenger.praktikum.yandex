export function createElement(tagInfo, content = "") {
  if (typeof content === "object") {
    let wrapper = createElement(tagInfo);
    // wrapper.innerHTML = createElement(content)
    // console.log(createElement(content))
    //  console.log(`tagInfo: ${tagInfo}, content: ${JSON.stringify(content)}`);
    Object.entries(content).forEach((tagInfoContentPair) => {
      let [tagInfo, content] = tagInfoContentPair;
      let inner = createElement(tagInfo, content);
      wrapper.innerHTML = inner.outerHTML;
      console.log(wrapper);
    });
  }
  //   console.log(tagInfo, content);
  let tag, cssClasses;

  [tag, cssClasses] = tagInfo.split(":");
  let arrayOfClasses = cssClasses?.replace(/\[|\]|\s/g, "").split(",");

  if (tag.startsWith("$")) {
    el = content;
    arrayOfClasses ? el.classList.add(...arrayOfClasses) : "";
  } else {
    el = document.createElement(tag);
    el.innerHTML = content;
    // el = el.outerHTML;
  }
  //  console.log(el);
  return el;
}

// 'form:[mt-1, entry-form]': {
//     'h2:[mt-2]': '{{ formHeading }}',
//     'div' :{
//         'p': 'test',
//         'a': 'check',
//     },
//     'action-buttons':[buttonPrimary]
// }
export function wrapperConstructor(data) {
  const html = [];
  function traverse(target) {
    for (const key in target) {
      //   if (target.hasOwnProperty(key)) {
      //    console.log(`key:${key}, target: ${target[key]}`);
      if (typeof target[key] === "object") {
        let wrap = createElement(key, target[key]);
        //  console.log('wrap', wrap)
        // console.log(`key: ${key}, target[key]: ${target[key]}`);
        // if (key) {
        // }
        traverse(target[key]);
      } else {
        html.push(createElement(key, target[key]));
      }
      //   }
    }
  }

  traverse(data);
  //   console.log(html);

  // for (const [key, value] of Object.entries(data)) {
  //     console.log(`${key}: ${value}`);
  //   }
}
