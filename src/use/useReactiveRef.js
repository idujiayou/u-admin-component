import { ref } from 'vue';

function useReactiveRef(val) {
  var prevEle = val || null;
  var eleRef = ref(prevEle);

  function setEle(ele, key) {
    if(key) {
      if (prevEle[key] === ele) return;
      eleRef.value[key] = ele;
      prevEle = eleRef.value
    } else {
      if (prevEle === ele) return;
      prevEle = ele;
      eleRef.value = prevEle;
    }
    
  }

  return [eleRef, setEle];
}

export default useReactiveRef;