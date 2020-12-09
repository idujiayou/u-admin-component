import { ref } from '@vue/runtime-dom';

function useReactiveRef(val) {
  var prevEle = val || null;
  var eleRef = ref(prevEle);

  function setEle(ele) {
    if (prevEle === ele) return;
    prevEle = ele;
    eleRef.value = prevEle;
  }

  return [eleRef, setEle];
}

export default useReactiveRef;